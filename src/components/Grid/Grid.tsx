import cn from '@/libs/class-name';

export interface Props {
  children: React.ReactNode;
}

export default function Grid({ children }: Props) {
  return <div className={cn('Grid', [])}>{children}</div>;
}
