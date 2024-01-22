import { Link } from "react-router-dom";
import { Menu } from "../../../interface/menu";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo";
import IconButton from "../../atoms/IconButton";
interface Props {
  menuItems: Array<Menu>;
}
export default function Menu(props: Props) {
  const { menuItems } = props;
  return (
    <nav>
      <ul className="menu__items">
        <li className="d-md-none mobile__header">
          <div className="mobile__logo">
            <Logo />
          </div>
          <IconButton onClick={() => {}}>
            <IoMdClose />
          </IconButton>
        </li>
        {menuItems.map((menuItem) => (
          <li key={menuItem.value}>
            <Link to={menuItem.link}>{menuItem.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
