export interface ProductsListProps {
  products: string[][];
}

export interface ProductCardProps {
  data: string[];
}

export interface CardProps {
  children: React.ReactNode;
}

export interface ILink {
  text: string;
  route: string;
}
