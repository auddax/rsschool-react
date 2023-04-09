import { Dispatch, SetStateAction } from 'react';

export interface PhotosListProps {
  photosList: IPhoto[];
}

export interface SearchContextType {
  photosList: IPhoto[];
  isLoading: boolean;
  setPhotosList: Dispatch<SetStateAction<IPhoto[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PhotoCardProps {
  handlerClick: () => void;
  data: IPhoto;
  key: string;
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
  handlerClick: () => void;
  children: React.ReactNode | React.ReactNode[];
}

export interface SuccessModalProps {
  data: ModalProps;
}

export interface BackdropModalProps {
  handlerClick: () => void;
  data: ModalProps;
}

export interface PhotoModalProps {
  handlerClick: () => void;
  data: ModalProps;
}

export interface ModalProps {
  type: string;
  data: IPhoto | string | null;
}

export interface ILink {
  text: string;
  route: string;
}

export interface IPhoto {
  alt_description: string | undefined;
  blur_hash: string | null;
  color: string | null;
  created_at: string;
  current_user_collections: [];
  description: string | undefined;
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
  user: IPhotoUser;
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

export interface IPhotoUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
}

export interface IPhotoList {
  [index: number]: FormDataEntryValue | FileList;
}

export interface IReview {
  [index: string]: FormDataEntryValue | FileList | string | null;
}
