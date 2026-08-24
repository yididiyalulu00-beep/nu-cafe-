export type Language = 'en' | 'am';

export interface MenuItem {
  id: string;
  name: string;
  nameAm?: string;
  category: 'coffee' | 'tea' | 'juice' | 'pastries' | 'breakfast' | 'snacks';
  description: string;
  descriptionAm?: string;
  priceText: string; // "Ask for price"
  priceTextAm?: string; // "ዋጋ ይጠይቁ"
  isPopular?: boolean;
  tags?: string[];
  tagsAm?: string[];
  image?: string;
}

export interface MenuCategory {
  id: 'coffee' | 'tea' | 'juice' | 'pastries' | 'breakfast' | 'snacks';
  name: string;
  nameAm: string;
  iconName: string;
  description: string;
  descriptionAm: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleAm?: string;
  category: 'coffee' | 'pastries' | 'ambiance' | 'food';
  imageUrl: string;
  caption: string;
  captionAm?: string;
  aspect?: string;
}

export interface CafeInfo {
  name: string;
  nameAm: string;
  tagline: string;
  taglineAm: string;
  category: string;
  categoryAm: string;
  location: string;
  locationAm: string;
  plusCode: string;
  city: string;
  cityAm: string;
  country: string;
  countryAm: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  openingHours: {
    days: string;
    daysAm: string;
    openTime: string;
    openTimeAm: string;
    closeTime: string;
    closeTimeAm: string;
    openHour24: number;
    closeHour24: number;
  };
}
