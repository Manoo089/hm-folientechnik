import cn from '@/libs/class-name';
import Image from 'next/image';

export interface Props {
  src: string;
  alt: string;
  heading: string;
  desc: string;
}

export default function ServiceCard({ src, alt, heading, desc }: Props) {
  return (
    <div className={cn('ServiceCard', [])}>
      <Image className="ServiceCard__img" src={src} alt={alt} fill />
      <div className="ServiceCard__content">
        <h5 className="ServiceCard__content-heading">{heading}</h5>
        <p className="ServiceCard__content-desc">{desc}</p>
        <p className="ServiceCard__content-discover-more">
          <a href="#">Mehr erfahren...</a>
        </p>
      </div>
    </div>
  );
}
