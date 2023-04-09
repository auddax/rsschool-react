export interface PhotosListProps {
  photosList: IPhoto[];
}

export interface PhotoCardProps {
  data: IPhoto;
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

export interface IPhoto {
  alt_description: string | null;
  blur_hash: string | null;
  color: string | null;
  created_at: string;
  current_user_collections: [];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: object;
  promoted_at: string | null;
  sponsorship: string | null;
  topic_submissions: object;
  updated_at: string | null;
  urls: IPhotoUrls;
  user: object;
  width: number;
}

export interface IPhotoUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface IPhotoList {
  [index: number]: FormDataEntryValue | FileList;
}

export interface IReview {
  [index: string]: FormDataEntryValue | FileList | string | null;
}
