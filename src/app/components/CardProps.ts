import { MouseEventHandler } from 'react';

export default interface CardProps {
  title: string;
  description: string;
  big: boolean;
  imageUrl: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
