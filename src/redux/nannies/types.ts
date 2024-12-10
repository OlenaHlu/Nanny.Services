export type Nannies = Nanny[];

export type Nanny = {
  id: string;
  name: string;
  avatar_url: string;
  birthday: string;
  experience: string;
  reviews: Review[];
  education: string;
  kids_age: string;
  price_per_hour: number;
  location: string;
  about: string;
  characters: string[];
  rating: number;
};

export type Review = {
  reviewer: string;
  rating: number;
  comment: string;
};

export type NanniesState = {
  nannies: Nanny[];
  isLoading: boolean;
  error: Error | string | null;
  visibleCount: number;
};
