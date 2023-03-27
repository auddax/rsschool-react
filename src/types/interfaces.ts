export interface ProductsListProps {
  products: string[][];
}

export interface ProductCardProps {
  data: string[];
}

export interface ReviewsListProps {
  reviews: IReview[];
}

export interface ReviewCardProps {
  data: IReview;
}

export interface CardProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface ILink {
  text: string;
  route: string;
}

export interface IReview {
  [index: string]: FormDataEntryValue | File | string | null;
}
