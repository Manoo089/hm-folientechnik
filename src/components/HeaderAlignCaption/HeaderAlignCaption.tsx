import cn from '@/libs/class-name';

export interface Props {
  children: React.ReactNode;
}

export default function HeaderAlignCaption({ children }: Props) {
  return <div className={cn('HeaderAlignCaption', [])}>{children}</div>;
}
