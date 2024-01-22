import Menu from "../../molecules/Menu";
import IconButton from "../../atoms/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Logo from "../../molecules/Logo";
import { menuItems } from "../../../constants/menuItems";
import React from "react";

export default function Header() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = React.useState("Home");
  const [mobileMenuState, setMobileMenuState] = React.useState(false);

  const handleActiveChange = (newActive: string) => {
    if (newActive !== activeMenu) {
      setActiveMenu(newActive);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row  align-items-center justify-content-between">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="d-none d-lg-block">
              <Logo />
            </div>
            <div className="d-lg-none">
              <IconButton
                onClick={() => {
                  setMobileMenuState(true);
                }}
              >
                <RxHamburgerMenu size={"24px"} />
              </IconButton>
            </div>
          </div>
          <div className={mobileMenuState ? `col-lg-7 header__menu active ` : "col-lg-7 header__menu"}>
            <Menu
              menuItems={menuItems}
              activeMenu={activeMenu}
              onChange={handleActiveChange}
              toggleMobileMenu={(newState) => setMobileMenuState(newState)}
            />
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
