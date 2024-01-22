import { Link } from "react-router-dom";
import { Menu } from "../../../interface/menu";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo";
import IconButton from "../../atoms/IconButton";
import React from "react";
interface Props {
  menuItems: Array<Menu>;
  activeMenu: string;
  onChange: (newActive: string) => void;
  toggleMobileMenu: (newState: boolean) => void;
}
export default function Menu(props: Props) {
  const { menuItems, activeMenu, onChange, toggleMobileMenu } = props;

  const menuRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMobileMenu]);
  return (
    <nav>
      <ul className="menu__items" ref={menuRef}>
        <li className="d-lg-none mobile__header">
          <div className="mobile__logo">
            <Logo />
          </div>
          <IconButton
            onClick={() => {
              toggleMobileMenu(false);
            }}
          >
            <IoMdClose />
          </IconButton>
        </li>
        {menuItems.map((menuItem) => (
          <li key={menuItem.value} className={menuItem.value === activeMenu ? "active" : ""}>
            <Link to={menuItem.link} onClick={() => onChange(menuItem.value)}>
              {menuItem.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
