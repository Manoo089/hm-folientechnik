import cn from '@/libs/class-name';

export interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function Section({ children, id }: Props) {
  return (
    <section id={id} className={cn('Section', [])}>
      {children}
    </section>
  );
}
