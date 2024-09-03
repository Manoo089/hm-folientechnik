import cn from '@/libs/class-name';

type Image = 'header' | 'about' | 'wrapping' | 'tinting' | 'protect';

export interface Props {
  image: Image;
}

export default function BackgroundImage({ image }: Props) {
  return <div className={cn('BackgroundImage', [{ [`image-${image}`]: image }])}></div>;
}
