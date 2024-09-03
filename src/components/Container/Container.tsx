import cn from '@/libs/class-name';
import { Component } from '@/types/component';

type BgColor = 'orange' | 'dark' | 'bright';

export interface Props extends Component {
  id?: string;
  verticalAlignCenter?: boolean;
  bgColor: BgColor;
  children: React.ReactNode;
  marginTop?: boolean;
  paddingTopBottom?: boolean;
}

export default function Container({
  id,
  verticalAlignCenter,
  bgColor,
  children,
  marginTop = false,
  paddingTopBottom,
}: Props) {
  return (
    <div id={id}
      className={cn('Container', [
        { marginTop },
        { paddingTopBottom },
        { verticalAlignCenter },
        { [`bgColor-${bgColor}`]: bgColor },
      ])}
    >
      {children}
    </div>
  );
}
