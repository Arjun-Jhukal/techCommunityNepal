import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not__found">
      <div className="content">
        <h1 className="xl__heading">404</h1>
        <h1 className="sm__heading">page not found !</h1>
        <p>The page your are trying to access is either moved to other location or deleted.</p>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back Home
        </button>
      </div>
    </div>
  );
}
