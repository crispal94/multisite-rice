'use client';

import {
  Checkbox,
  CheckboxGroup,
  Slider,
  Accordion,
  AccordionItem,
  Button,
} from '@heroui/react';

export const ProductFilters = () => {
  return (
    <div className="sticky top-28 space-y-8 bg-surface-light p-6 rounded-xl border border-secondary/50 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-text-main">Filtros</h3>
        <Button
          variant="light"
          size="sm"
          className="text-primary hover:text-primary-hover font-semibold"
        >
          Restablecer
        </Button>
      </div>

      <Accordion
        selectionMode="multiple"
        defaultExpandedKeys={['1', '2', '3', '4']}
        className="px-0"
      >
        <AccordionItem
          key="1"
          aria-label="Tipo de Grano"
          title="Tipo de Grano"
          classNames={{
            title: 'font-bold text-sm text-text-main',
            trigger: 'py-2',
          }}
        >
          <CheckboxGroup classNames={{ base: 'gap-2' }}>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="long"
            >
              Grano Largo
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="medium"
            >
              Grano Medio
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="short"
            >
              Grano Corto
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="sticky"
            >
              Pegajoso / Glutinoso
            </Checkbox>
          </CheckboxGroup>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Rango de Precio"
          title="Rango de Precio"
          classNames={{
            title: 'font-bold text-sm text-text-main',
            trigger: 'py-2',
          }}
        >
          <div className="px-1 pt-2 pb-4">
            <Slider
              step={1}
              maxValue={50}
              minValue={0}
              defaultValue={[2, 25]}
              showSteps={false}
              showTooltip={true}
              className="max-w-md"
              color="success"
              classNames={{
                base: 'max-w-md',
                filler: 'bg-primary',
                thumb: 'border-2 border-primary',
              }}
            />
            <div className="flex items-center justify-between text-sm text-text-muted mt-2">
              <span>$2</span>
              <span className="font-medium text-text-main">$25+</span>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Origen"
          title="Origen"
          classNames={{
            title: 'font-bold text-sm text-text-main',
            trigger: 'py-2',
          }}
        >
          <CheckboxGroup classNames={{ base: 'gap-2' }}>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="india"
            >
              India
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="thailand"
            >
              Tailandia
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="italy"
            >
              Italia
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="japan"
            >
              Japón
            </Checkbox>
          </CheckboxGroup>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Certificación"
          title="Certificación"
          classNames={{
            title: 'font-bold text-sm text-text-main',
            trigger: 'py-2',
          }}
        >
          <CheckboxGroup classNames={{ base: 'gap-2' }}>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="usda"
            >
              Orgánico USDA
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="fair_trade"
            >
              Comercio Justo
            </Checkbox>
            <Checkbox
              classNames={{
                wrapper: 'after:bg-primary text-primary',
                label: 'text-sm text-text-muted group-hover:text-primary',
              }}
              value="non_gmo"
            >
              Proyecto No-OGM
            </Checkbox>
          </CheckboxGroup>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
