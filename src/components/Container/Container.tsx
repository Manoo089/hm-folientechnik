import cn from '@/libs/class-name';
import { Component } from '@/types/component';

type BgColor = 'orange' | 'dark' | 'bright';

export interface Props extends Component {
  bgColor: BgColor;
  children: React.ReactNode;
}

export default function Container({ bgColor, children }: Props) {
  return <div className={cn('Container', [{ [`bgColor-${bgColor}`]: bgColor }])}>{children}</div>;
}
