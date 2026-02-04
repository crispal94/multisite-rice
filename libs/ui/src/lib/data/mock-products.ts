export interface Product {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  country: string;
  imageUrl: string;
  badges?: {
    text: string;
    color: 'primary' | 'secondary' | 'accent' | 'red' | 'text-main';
    textColor?: string;
  }[];
  images?: {
    src: string;
    alt: string;
    badge?: string;
  }[];
}

export const products: Product[] = [
  {
    slug: 'costerito-gourmet',
    title: 'COSTERITO GOURMET',
    subtitle: 'Añejado por 24 meses',
    description:
      'Arroz de grano extra largo, envejecido naturalmente para ofrecer una textura superior y un sabor inigualable. Ideal para la alta cocina ecuatoriana.',
    longDescription:
      'Procedente de los mejores cultivos de la costa ecuatoriana, nuestro Costerito Gourmet es añejado tradicionalmente para reducir la humedad, resultando en un grano que duplica su tamaño al cocinarse y queda siempre graneado.',
    price: '$24.00',
    originalPrice: '$28.00',
    rating: 4.9,
    reviewCount: 128,
    country: 'Ecuador',
    imageUrl:
      'https://proarroz.com.ec/wp-content/uploads/2022/01/costerito-gouurmet.jpg',
    badges: [
      { text: 'Orgánico', color: 'primary' },
      { text: 'Añejado 2 Años', color: 'secondary' },
    ],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/costerito-gouurmet.jpg',
        alt: 'Basmati',
        badge: 'Cosecha 2023',
      },
      { src: '/images/basmati_rice.png', alt: 'Cocinando' },
    ],
  },
  {
    slug: 'costerito-premium',
    title: 'COSTERITO PREMIUM',
    subtitle: 'Cosecha Seleccionada',
    description:
      'Arroz premium de grano largo y blanco, seleccionado electrónicamente para garantizar la máxima pureza y calidad.',
    longDescription:
      'Costerito Premium representa lo mejor de la producción nacional. Su grano entero y limpio asegura una cocción pareja y un rendimiento excepcional en cada preparación.',
    price: '$18.50',
    rating: 4.7,
    reviewCount: 85,
    country: 'Ecuador',
    imageUrl: 'https://proarroz.com.ec/wp-content/uploads/2022/01/cpremium.jpg',
    badges: [
      { text: 'Nueva Cosecha', color: 'accent' },
      { text: 'Comercio Justo', color: 'secondary' },
    ],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/cpremium.jpg',
        alt: 'Jasmine Rice',
      },
    ],
  },
  {
    slug: 'arroz-super-reina',
    title: 'ARROZ SUPER REINA',
    subtitle: 'Calidad Superior',
    description:
      'Arroz blanco de excelente calidad, perfecto para el consumo diario de las familias ecuatorianas. Grano entero y rendidor.',
    longDescription:
      'Super Reina es el arroz preferido por su relación calidad-precio. Seleccionado cuidadosamente para ofrecer un producto limpio y de buen sabor que nunca falta en la mesa.',
    price: '$15.00',
    rating: 4.8,
    reviewCount: 1200,
    country: 'Ecuador',
    imageUrl: 'https://proarroz.com.ec/wp-content/uploads/2022/01/sr.jpg',
    badges: [{ text: 'Especialidad', color: 'text-main' }],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/sr.jpg',
        alt: 'Arborio Rice',
      },
    ],
  },
  {
    slug: 'arroz-gavilan',
    title: 'ARROZ GAVILAN',
    subtitle: 'Tradición y Sabor',
    description:
      'Una marca de confianza con años en el mercado. Arroz seleccionado que garantiza un graneado perfecto.',
    longDescription:
      'Arroz Gavilán se caracteriza por su consistencia y sabor tradicional. Ideal para acompañar tus platos típicos favoritos con la garantía de siempre.',
    price: '$12.99',
    rating: 4.6,
    reviewCount: 450,
    country: 'Ecuador',
    imageUrl: 'https://proarroz.com.ec/wp-content/uploads/2022/01/ag.jpg',
    badges: [
      { text: 'Orgánico', color: 'primary' },
      { text: 'Herencia', color: 'secondary' },
    ],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/ag.jpg',
        alt: 'Black Rice',
      },
    ],
  },
  {
    slug: 'arroz-lombarda-envejecido',
    title: 'ARROZ LOMBARDA ENVEJECIDO',
    subtitle: 'Sabor Intenso',
    description:
      'Arroz envejecido de calidad superior. Su proceso de maduración resalta su sabor natural y mejora su textura.',
    longDescription:
      'El Arroz Lombarda pasa por un riguroso proceso de envejecimiento que permite que el grano se asiente, logrando una cocción más firme y un sabor más concentrado, ideal para paladares exigentes.',
    price: '$17.60',
    originalPrice: '$22.00',
    rating: 4.5,
    reviewCount: 92,
    country: 'Ecuador',
    imageUrl: 'https://proarroz.com.ec/wp-content/uploads/2022/01/lombarda.jpg', // Fallback as used in MPP
    badges: [
      { text: '-20%', color: 'red' },
      { text: 'Orgánico', color: 'primary' },
    ],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/lombarda.jpg',
        alt: 'Sushi Rice',
      },
    ],
  },
  {
    slug: 'arroz-el-pibe-envejecido',
    title: 'ARROZ EL PIBE ENVEJECIDO',
    subtitle: 'El de Siempre',
    description:
      'Arroz envejecido tradicional, conocido por su gran rendimiento y sabor casero inimitable.',
    longDescription:
      'El Pibe Envejecido es un clásico en los hogares. Su grano madurado asegura que rinda más en la olla y absorba mejor los sabores de tus condimentos.',
    price: '$14.00',
    rating: 4.3,
    reviewCount: 210,
    country: 'Ecuador',
    imageUrl:
      'https://proarroz.com.ec/wp-content/uploads/2022/01/Untitled-1-3.jpg',
    badges: [{ text: 'Grano Entero', color: 'secondary' }],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/Untitled-1-3.jpg',
        alt: 'Brown Rice',
      },
    ],
  },
  {
    slug: 'arroz-laurel',
    title: 'ARROZ LAUREL',
    subtitle: 'Frescura del Campo',
    description:
      'Arroz blanco de grano seleccionado, fresco y listo para cocinar. La opción económica de gran calidad.',
    longDescription:
      'Arroz Laurel trae la frescura del campo a tu mesa. Un arroz versátil que se adapta a cualquier receta, garantizando siempre un resultado delicioso.',
    price: '$14.00',
    rating: 4.3,
    reviewCount: 210,
    country: 'Ecuador',
    imageUrl: 'https://proarroz.com.ec/wp-content/uploads/2022/01/laurel.jpg',
    badges: [{ text: 'Grano Entero', color: 'secondary' }],
    images: [
      {
        src: 'https://proarroz.com.ec/wp-content/uploads/2022/01/laurel.jpg',
        alt: 'Brown Rice',
      },
    ],
  },
];
