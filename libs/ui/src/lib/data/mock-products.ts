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
    slug: 'royal-basmati-reserve',
    title: 'Reserva Real Basmati',
    subtitle: 'Añejado por 24 meses',
    description:
      'Granos extra largos con aroma a nuez, añejados para una textura superior. Paquete de 5kg.',
    longDescription:
      'Procedente directamente de los valles alimentados por nieve de Uttarakhand, nuestro Basmati de Reserva es añejado tradicionalmente para reducir el contenido de humedad, resultando en una textura excepcionalmente esponjosa y granos que se alargan al doble de su tamaño al cocinarse.',
    price: '$24.00',
    originalPrice: '$28.00',
    rating: 4.9,
    reviewCount: 128,
    country: 'India',
    imageUrl: '/images/royal_hermitage_basmati_rice.png',
    badges: [
      { text: 'Orgánico', color: 'primary' },
      { text: 'Añejado 2 Años', color: 'secondary' },
    ],
    images: [
      {
        src: '/images/royal_hermitage_basmati_rice.png',
        alt: 'Basmati',
        badge: 'Cosecha 2023',
      },
      { src: '/images/black_rice.png', alt: 'Textura' },
      { src: '/images/basmati_rice.png', alt: 'Cocinando' },
      { src: '/images/basmati_rice.png', alt: 'Empaque' },
    ],
  },
  {
    slug: 'thai-hom-mali-jasmine',
    title: 'Jazmín Thai Hom Mali',
    subtitle: 'Cosecha Nueva de Surin',
    description:
      'Auténtico arroz jazmín aromático de la provincia de Surin. Textura suave y húmeda.',
    longDescription:
      'Nuestro arroz Jazmín Hom Mali es reconocido mundialmente por su fragancia natural a pandan y su textura suave y sedosa. Cultivado en los suelos ricos de Tailandia, es el acompañamiento perfecto para curris y salteados.',
    price: '$18.50',
    rating: 4.7,
    reviewCount: 85,
    country: 'Tailandia',
    imageUrl: '/images/organic_white_jasmine_rice.png',
    badges: [
      { text: 'Nueva Cosecha', color: 'accent' },
      { text: 'Comercio Justo', color: 'secondary' },
    ],
    images: [
      { src: '/images/organic_white_jasmine_rice.png', alt: 'Jasmine Rice' },
    ],
  },
  {
    slug: 'superfino-arborio',
    title: 'Arborio Superfino',
    subtitle: 'El Rey del Risotto',
    description:
      'El grano clásico italiano para risotto cremoso. Alto contenido de almidón.',
    longDescription:
      'Cultivado en el valle del Po, este arroz Arborio Superfino tiene un núcleo perlado que se mantiene "al dente" mientras libera suficiente almidón para crear el risotto más cremoso que jamás hayas probado.',
    price: '$15.00',
    rating: 4.8,
    reviewCount: 1200,
    country: 'Italia',
    imageUrl: '/images/classic_arborio_rissotto_rice.png',
    badges: [{ text: 'Especialidad', color: 'text-main' }],
    images: [
      { src: '/images/classic_arborio_rissotto_rice.png', alt: 'Arborio Rice' },
    ],
  },
  {
    slug: 'forbidden-black-rice',
    title: 'Arroz Negro Prohibido',
    subtitle: 'Variedad Herencia',
    description:
      'Rico en antioxidantes con sabor a nuez. Antiguamente reservado para emperadores.',
    longDescription:
      'Conocido como el "arroz de la longevidad", esta variedad antigua de grano entero es rica en antocianinas. Tiene un sabor profundo a nuez y una textura ligeramente masticable.',
    price: '$12.99',
    rating: 4.6,
    reviewCount: 450,
    country: 'China',
    imageUrl: '/images/forbidden_black_rice.png',
    badges: [
      { text: 'Orgánico', color: 'primary' },
      { text: 'Herencia', color: 'secondary' },
    ],
    images: [{ src: '/images/forbidden_black_rice.png', alt: 'Black Rice' }],
  },
  {
    slug: 'premium-sushi-rice',
    title: 'Arroz para Sushi Premium',
    subtitle: 'Grano Corto Estilo Japonés',
    description:
      'Grano corto japonés auténtico. Pegajosidad perfecta para sushi y poke.',
    longDescription:
      'Seleccionado por maestros de sushi, este grano corto tiene el equilibrio perfecto de dulzura y pegajosidad, esencial para mantener la forma del nigiri y los rollos.',
    price: '$17.60',
    originalPrice: '$22.00',
    rating: 4.5,
    reviewCount: 92,
    country: 'Japón',
    imageUrl: '/images/basmati_rice.png', // Fallback as used in MPP
    badges: [
      { text: '-20%', color: 'red' },
      { text: 'Orgánico', color: 'primary' },
    ],
    images: [{ src: '/images/basmati_rice.png', alt: 'Sushi Rice' }],
  },
  {
    slug: 'whole-grain-brown',
    title: 'Integral de Grano Entero',
    subtitle: 'Fuente de Fibra',
    description:
      'Denso en nutrientes con la capa de salvado intacta. Excelente fuente de fibra.',
    longDescription:
      'Nuestro arroz integral conserva el salvado y el germen, ofreciendo un sabor a nuez más robusto y una textura firme. Perfecto para pilafs saludables y ensaladas de granos.',
    price: '$14.00',
    rating: 4.3,
    reviewCount: 210,
    country: 'EE.UU.',
    imageUrl: '/images/brown_rice.png',
    badges: [{ text: 'Grano Entero', color: 'secondary' }],
    images: [{ src: '/images/brown_rice.png', alt: 'Brown Rice' }],
  },
];
