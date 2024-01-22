import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <button className="header__logo" onClick={() => navigate("/")}>
      <div className="header__logo__icon">
        <div className="logo__central__dot"></div>
        <div className="logo__border__dot"></div>
      </div>
      <h3>
        <span>Beauty</span>Lab
      </h3>
    </button>
  );
}
