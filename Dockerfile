FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc* ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV STANDALONE=true
ENV NEXT_TELEMETRY_DISABLED=1
ENV NX_DAEMON=false
ENV NX_SKIP_NX_CACHE=true

RUN pnpm nx build ui
RUN pnpm nx build multisite-rice --configuration=production

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/multisite-rice/public ./apps/multisite-rice/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/multisite-rice/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/multisite-rice/.next/static ./apps/multisite-rice/.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "apps/multisite-rice/server.js"]
