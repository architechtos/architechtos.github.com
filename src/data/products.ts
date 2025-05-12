
export interface Product {
  id: string;
  name: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  price: number;
  image: string;
  category: 'black' | 'green' | 'herbal' | 'white' | 'oolong';
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "tea-001",
    name: {
      en: "Earl Grey Classic",
      de: "Earl Grey Klassisch"
    },
    description: {
      en: "A timeless black tea infused with bergamot oil for a citrusy aroma and flavor.",
      de: "Ein zeitloser schwarzer Tee mit Bergamottöl für ein zitrisches Aroma und Geschmack."
    },
    price: 12.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%2374c856'/%3E%3Cpath d='M80 35 C70 35, 65 45, 65 60 C65 75, 70 85, 80 85 C90 85, 95 75, 95 60 C95 45, 90 35, 80 35' stroke='%23376e26' stroke-width='1' fill='%239bd986'/%3E%3C/svg%3E",
    category: "black",
    featured: true
  },
  {
    id: "tea-002",
    name: {
      en: "Jasmine Pearl",
      de: "Jasmin Perle"
    },
    description: {
      en: "Hand-rolled green tea leaves scented with fresh jasmine blossoms for a sweet, floral cup.",
      de: "Handgerollte grüne Teeblätter, mit frischen Jasminblüten parfümiert für eine süße, blumige Tasse."
    },
    price: 18.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%239bd986'/%3E%3Cpath d='M75 45 C72 42, 68 44, 70 48 C72 52, 76 53, 78 50 C80 47, 78 43, 75 45' stroke='%23fff' stroke-width='1' fill='%23fff'/%3E%3Cpath d='M85 50 C82 47, 78 49, 80 53 C82 57, 86 58, 88 55 C90 52, 88 48, 85 50' stroke='%23fff' stroke-width='1' fill='%23fff'/%3E%3Cpath d='M78 60 C75 57, 71 59, 73 63 C75 67, 79 68, 81 65 C83 62, 81 58, 78 60' stroke='%23fff' stroke-width='1' fill='%23fff'/%3E%3C/svg%3E",
    category: "green",
    featured: true
  },
  {
    id: "tea-003",
    name: {
      en: "Chamomile Bliss",
      de: "Kamillen Glückseligkeit"
    },
    description: {
      en: "Soothing chamomile flowers with hints of honey and apple for a calming herbal infusion.",
      de: "Beruhigende Kamillenblüten mit einem Hauch von Honig und Apfel für einen beruhigenden Kräuteraufguss."
    },
    price: 9.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%23bee7b1'/%3E%3Ccircle cx='80' cy='55' r='15' fill='%23f2e7c6' stroke='%23e2c67c'/%3E%3Ccircle cx='80' cy='55' r='8' fill='%23e2c67c'/%3E%3C/svg%3E",
    category: "herbal",
    featured: true
  },
  {
    id: "tea-004",
    name: {
      en: "Silver Needle White",
      de: "Silbernadel Weiß"
    },
    description: {
      en: "Delicate white tea with subtle floral notes and a sweet finish.",
      de: "Delikater weißer Tee mit subtilen Blumennoten und einem süßen Abgang."
    },
    price: 24.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%23f2e7c6'/%3E%3Cpath d='M70 45 L75 65 M75 45 L80 65 M80 45 L85 65 M85 45 L90 65' stroke='%23e2c67c' stroke-width='1'/%3E%3C/svg%3E",
    category: "white",
    featured: false
  },
  {
    id: "tea-005",
    name: {
      en: "Darjeeling First Flush",
      de: "Darjeeling First Flush"
    },
    description: {
      en: "Light and floral black tea with muscatel notes, harvested in early spring.",
      de: "Leichter und blumiger schwarzer Tee mit Muskatelleraromen, geerntet im frühen Frühling."
    },
    price: 19.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%237c6128'/%3E%3Cpath d='M70 40 C80 50, 90 45, 95 35 M65 50 C75 60, 85 55, 90 45 M70 60 C80 70, 90 65, 95 55' stroke='%239e7c2f' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E",
    category: "black",
    featured: false
  },
  {
    id: "tea-006",
    name: {
      en: "Moroccan Mint",
      de: "Marokkanische Minze"
    },
    description: {
      en: "Refreshing gunpowder green tea blended with spearmint leaves for a cooling sensation.",
      de: "Erfrischender Gunpowder-Grüntee gemischt mit Minzblättern für ein kühlendes Gefühl."
    },
    price: 11.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%2357b13a'/%3E%3Cpath d='M70 40 L75 30 M75 45 L80 35 M80 50 L85 40 M85 55 L90 45 M75 60 L80 50' stroke='%2345902e' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E",
    category: "green",
    featured: true
  },
  {
    id: "tea-007",
    name: {
      en: "Iron Goddess Oolong",
      de: "Eiserne Göttin Oolong"
    },
    description: {
      en: "Traditional oolong tea with a smooth, roasted flavor and honey-like sweetness.",
      de: "Traditioneller Oolong-Tee mit einem weichen, gerösteten Geschmack und honigartiger Süße."
    },
    price: 22.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%23d7b558'/%3E%3Cpath d='M70 45 C75 35, 85 35, 90 45 C95 55, 85 70, 75 60 C65 50, 65 55, 70 45' stroke='%23c29a38' stroke-width='1' fill='%23c29a38'/%3E%3C/svg%3E",
    category: "oolong",
    featured: false
  },
  {
    id: "tea-008",
    name: {
      en: "Rooibos Vanilla",
      de: "Rooibos Vanille"
    },
    description: {
      en: "Naturally caffeine-free South African red bush tea with sweet vanilla notes.",
      de: "Natürlich koffeinfreier südafrikanischer Rotbuschtee mit süßen Vanillenoten."
    },
    price: 10.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120' fill='none'%3E%3Crect width='160' height='120' fill='%23e2c67c'/%3E%3Cpath d='M80 25 C65 25, 55 40, 55 60 C55 80, 65 95, 80 95 C95 95, 105 80, 105 60 C105 40, 95 25, 80 25' stroke='%23376e26' stroke-width='2' fill='%23c29a38'/%3E%3Cpath d='M75 40 C70 45, 70 55, 75 60 M85 40 C90 45, 90 55, 85 60 M75 50 L85 50' stroke='%23faf7ed' stroke-width='1'/%3E%3C/svg%3E",
    category: "herbal",
    featured: false
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
