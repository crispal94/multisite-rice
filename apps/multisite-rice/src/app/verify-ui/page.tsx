'use client';
import { Button } from '@heroui/react';

export default function VerifyPage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">HeroUI Verification</h1>
      <Button color="primary" variant="solid">
        Primary Button
      </Button>
      <Button color="secondary" variant="flat">
        Secondary Button
      </Button>
    </div>
  );
}
