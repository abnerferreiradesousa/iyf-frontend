import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FormEventHandler, MouseEventHandler } from 'react';

export default interface CardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  activeWidth: number;
  activeHeight: number;
  top: string;
  left: string;
  activeTop: string;
  activeLeft: string;
  order: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}
