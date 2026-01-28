'use client';

import { Select, SelectItem } from '@heroui/react';

const sortOptions = [
  { key: 'most_popular', label: 'Más Populares' },
  { key: 'newest', label: 'Cosecha Más Reciente' },
  { key: 'price_asc', label: 'Precio: Bajo a Alto' },
  { key: 'price_desc', label: 'Precio: Alto a Bajo' },
];

export const SortControl = () => {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort"
        className="text-sm font-medium text-text-main whitespace-nowrap hidden sm:block"
      >
        Ordenar por:
      </label>
      <Select
        id="sort"
        defaultSelectedKeys={['most_popular']}
        className="min-w-[180px]"
        size="sm"
        aria-label="Sort by"
        classNames={{
          trigger:
            'bg-transparent border border-secondary rounded-lg shadow-sm hover:bg-secondary/30 transition-colors focus:ring-1 focus:ring-primary',
          value: 'text-sm font-medium text-text-main',
        }}
        popoverProps={{
          classNames: {
            content:
              'bg-surface-light border border-secondary/50 shadow-lg text-text-main',
          },
        }}
      >
        {sortOptions.map((option) => (
          <SelectItem
            key={option.key}
            className="text-text-main hover:bg-secondary/20 hover:text-primary"
          >
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
