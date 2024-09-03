import cn from '@/libs/class-name';

export interface Props {
  children: React.ReactNode;
}

export default function Stack({ children }: Props) {
  return <div className={cn('Stack', [])}>{children}</div>;
}
