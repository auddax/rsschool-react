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

export interface ReviewFormProps {
  handleReviews: (review: IReview) => void;
}

export interface CardProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface ModalProps {
  message: string | string[];
}

export interface BackdropProps {
  data: string | string[];
}

export interface SuccessModalProps {
  data: string | string[];
}

export interface ILink {
  text: string;
  route: string;
}

export interface IReview {
  [index: string]: FormDataEntryValue | File | string | null;
}
