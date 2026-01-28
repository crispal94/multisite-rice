'use client';

import { useState } from 'react';
import { Accordion, AccordionItem } from '@heroui/react';

interface ProductDetailsProps {
  title: string;
  subtitle: string;
  price: string;
  rating: number;
  reviewCount: number;
  description: string;
}

export const ProductDetails = ({
  title,
  subtitle,
  price,
  rating,
  reviewCount,
  description,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="px-4 mt-12 sm:mt-16 sm:px-0 lg:mt-0">
      <div className="pb-8 mb-8 border-b border-stone-200 dark:border-stone-800">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold tracking-tight text-text-main dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="font-serif text-lg italic text-text-muted">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="font-serif text-3xl font-bold tracking-tight text-primary">
            {price}
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-0.5">
              {/* Fixed 5 stars for visual consistency as per design, could be dynamic */}
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`material-symbols-outlined text-[20px] ${star <= Math.round(rating) ? 'text-accent fill-current' : 'text-stone-300'}`}
                >
                  {star <= rating
                    ? 'star'
                    : star - 0.5 <= rating
                      ? 'star_half'
                      : 'star'}
                </span>
              ))}
            </div>
            <a
              className="text-sm font-medium underline text-text-muted hover:text-primary"
              href="#reviews"
            >
              {reviewCount} reseñas
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <p className="text-lg font-light leading-relaxed text-text-muted dark:text-stone-300">
          {description}
        </p>

        <div className="p-6 rounded-xl border bg-surface-light dark:bg-stone-800/50 border-stone-100 dark:border-stone-700">
          <h3 className="mb-4 font-sans text-sm font-bold tracking-wide uppercase text-stone-400">
            Notas de Cata
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-2 w-10 h-10 bg-white rounded-full shadow-sm dark:bg-stone-700 text-primary">
                <span className="material-symbols-outlined">local_florist</span>
              </div>
              <span className="block text-sm font-medium text-text-main dark:text-white">
                Aroma Floral
              </span>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-2 w-10 h-10 bg-white rounded-full shadow-sm dark:bg-stone-700 text-primary">
                <span className="material-symbols-outlined">grain</span>
              </div>
              <span className="block text-sm font-medium text-text-main dark:text-white">
                Grano Extra Largo
              </span>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-2 w-10 h-10 bg-white rounded-full shadow-sm dark:bg-stone-700 text-primary">
                <span className="material-symbols-outlined">cookie</span>
              </div>
              <span className="block text-sm font-medium text-text-main dark:text-white">
                Notas a Nuez
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-start p-4 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
          <span className="text-3xl material-symbols-outlined text-primary">
            landscape
          </span>
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-text-main dark:text-white">
              Origen: The Verdant Valley Farm
            </h4>
            <p className="mt-1 text-sm text-text-muted dark:text-stone-300">
              Cultivado por la Familia Sharma usando agricultura regenerativa a
              2,000 pies de altura.
            </p>
          </div>
        </div>
      </div>

      <form className="mt-10">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="mb-3 text-sm font-medium text-text-main dark:text-white">
              Empaque
            </h3>
            <div className="flex gap-3 items-center">
              <label className="cursor-pointer">
                <input
                  defaultChecked
                  className="sr-only peer"
                  name="packaging"
                  type="radio"
                  value="cotton"
                />
                <div className="px-4 py-2 text-sm font-medium rounded-lg border transition-all border-stone-200 dark:border-stone-700 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-surface-light dark:hover:bg-stone-800">
                  Bolsa de Algodón Orgánico
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  className="sr-only peer"
                  name="packaging"
                  type="radio"
                  value="jute"
                />
                <div className="px-4 py-2 text-sm font-medium rounded-lg border transition-all border-stone-200 dark:border-stone-700 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-surface-light dark:hover:bg-stone-800">
                  Yute Tradicional
                </div>
              </label>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-text-main dark:text-white">
                Peso Neto
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {['1kg', '2kg', '5kg'].map((weight, idx) => (
                <label key={weight} className="cursor-pointer">
                  <input
                    defaultChecked={idx === 1}
                    className="sr-only peer"
                    name="weight"
                    type="radio"
                    value={weight}
                  />
                  <div className="flex justify-center items-center py-3 text-sm font-bold bg-white rounded-lg border transition-all border-stone-200 peer-checked:ring-2 peer-checked:ring-primary peer-checked:border-transparent dark:border-stone-700 dark:text-white hover:bg-surface-light dark:hover:bg-stone-800 dark:bg-stone-800 text-text-main">
                    {weight}
                  </div>
                </label>
              ))}

              <label className="opacity-50 cursor-not-allowed">
                <input
                  className="sr-only"
                  disabled
                  name="weight"
                  type="radio"
                  value="10kg"
                />
                <div className="flex overflow-hidden relative justify-center items-center py-3 text-sm font-medium rounded-lg border border-stone-200 bg-surface-light dark:bg-stone-900 text-text-muted dark:border-stone-800">
                  10 kg
                  <div className="flex absolute inset-0 justify-center items-center">
                    <div className="w-full h-px -rotate-45 bg-stone-300"></div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <div className="flex items-center bg-white rounded-lg border shadow-sm border-stone-300 dark:border-stone-600 dark:bg-stone-800">
            <button
              type="button"
              onClick={handleDecrement}
              className="px-3 py-3 transition-colors text-text-muted hover:text-primary dark:text-stone-400 dark:hover:text-white"
            >
              <span className="material-symbols-outlined text-[20px]">
                remove
              </span>
            </button>
            <input
              className="p-0 w-12 font-medium text-center bg-transparent border-none text-text-main dark:text-white focus:ring-0"
              type="text"
              readOnly
              value={quantity}
            />
            <button
              type="button"
              onClick={handleIncrement}
              className="px-3 py-3 transition-colors text-text-muted hover:text-primary dark:text-stone-400 dark:hover:text-white"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>
          <button
            className="flex flex-1 justify-center items-center px-8 py-3 text-base font-bold text-white rounded-lg border border-transparent shadow-md transition-all bg-primary dark:bg-primary-hover hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            type="submit"
          >
            Agregar al Carrito
          </button>
          <button
            className="flex justify-center items-center px-4 py-3 bg-white rounded-lg border shadow-sm transition-colors border-stone-200 dark:border-stone-700 dark:bg-stone-800 text-text-main dark:text-white hover:bg-surface-light dark:hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              favorite
            </span>
          </button>
        </div>
      </form>

      <div className="mt-12">
        <Accordion
          className="px-0"
          selectionMode="multiple"
          defaultExpandedKeys={['1']}
        >
          <AccordionItem
            key="1"
            aria-label="Instrucciones de Cocina"
            title={
              <span className="flex gap-3 items-center font-serif font-bold text-text-main dark:text-white">
                <span className="material-symbols-outlined text-primary">
                  skillet
                </span>
                Instrucciones de Cocina
              </span>
            }
          >
            <div className="pb-2 space-y-2 text-sm text-text-muted dark:text-stone-300">
              <p>
                <strong className="text-text-main dark:text-white">
                  Enjuagar:
                </strong>{' '}
                Lave el arroz 2-3 veces hasta que el agua salga clara.
              </p>
              <p>
                <strong className="text-text-main dark:text-white">
                  Remojar:
                </strong>{' '}
                Para mejores resultados, remoje por 20-30 minutos.
              </p>
              <p>
                <strong className="text-text-main dark:text-white">
                  Proporción:
                </strong>{' '}
                Use 1 taza de arroz por 1.5 tazas de agua.
              </p>
              <p>
                <strong className="text-text-main dark:text-white">
                  Cocinar:
                </strong>{' '}
                Hierva, tape, reduzca el fuego al mínimo por 15 mins. Deje
                reposar 5 mins antes de esponjar.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Valor Nutricional"
            title={
              <span className="flex gap-3 items-center font-serif font-bold text-text-main dark:text-white">
                <span className="material-symbols-outlined text-primary">
                  nutrition
                </span>
                Valor Nutricional
              </span>
            }
          >
            <div className="pb-2 text-sm text-text-muted dark:text-stone-300">
              <div className="grid grid-cols-2 gap-y-2 py-2">
                <span>Porción</span>{' '}
                <span className="font-medium text-right">45g seco</span>
                <span>Calorías</span>{' '}
                <span className="font-medium text-right">160 kcal</span>
                <span>Carbohidratos</span>{' '}
                <span className="font-medium text-right">35g</span>
                <span>Proteína</span>{' '}
                <span className="font-medium text-right">3g</span>
                <span>Fibra</span>{' '}
                <span className="font-medium text-right">1g</span>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="Almacenamiento y Frescura"
            title={
              <span className="flex gap-3 items-center font-serif font-bold text-text-main dark:text-white">
                <span className="material-symbols-outlined text-primary">
                  inventory_2
                </span>
                Almacenamiento y Frescura
              </span>
            }
          >
            <p className="pb-2 text-sm text-text-muted dark:text-stone-300">
              Almacenar en un lugar fresco y seco. Consumir preferiblemente
              dentro de los 12 meses posteriores a la apertura. Recomendamos
              transferir a un recipiente de vidrio hermético para mantener el
              aroma.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
