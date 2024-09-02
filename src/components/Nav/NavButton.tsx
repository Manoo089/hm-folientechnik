import cn from '@/libs/class-name';

export interface Props {
  label: string;
  onClick: () => void;
}

export default function NavButton({ label, onClick }: Props) {
  return <button className={cn('NavButton', [])} onClick={onClick}>{label}</button>;
}
