import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FormEventHandler, MouseEventHandler } from 'react';

export default interface CardProps {
  title: string;
  description: string;
  activeCard: boolean;
  image: StaticImport;
  bigImage: StaticImport;
  imageAlt: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
