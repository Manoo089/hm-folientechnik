import cn from '@/libs/class-name';
import InstagramIcon from '../../resources/icons/Icon-Instagram.svg';
import HamburgerIcon from '../../resources/icons/Icon-Hamburger.svg';
import Firmenlogo from '../../resources/icons/Firmenlogo.svg';

export default function Navbar() {
  return (
    <div className={cn('Navbar', [])}>
      <div className="Navbar__instagram">
        <InstagramIcon />
      </div>
      <div className="Navbar__logo">
        <Firmenlogo />
      </div>
      <div className="Navbar__hamburger">
        <HamburgerIcon />
      </div>
    </div>
  );
}
