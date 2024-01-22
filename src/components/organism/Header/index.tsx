import Menu from "../../molecules/Menu";
import IconButton from "../../atoms/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Logo from "../../molecules/Logo";
import { menuItems } from "../../../constants/menuItems";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="d-none d-lg-block">
              <Logo />
            </div>
            <div className="d-lg-none">
              <IconButton onClick={() => {}}>
                <RxHamburgerMenu size={"24px"} />
              </IconButton>
            </div>
          </div>
          <div className="col-lg-7 header__menu">
            <Menu menuItems={menuItems} />
          </div>
          <div className="col-lg-2 col-md-7 col-6 text-end">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="primary"
            >
              Free Consulation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
