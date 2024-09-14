import cn from '@/libs/class-name';

export interface Props {
  children: React.ReactNode;
}

export default function Cards({ children }: Props) {
  return <div className={cn('Cards', [])}>{children}</div>;
}
