import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import NotFound from "../components/pages/NotFound";

export default function RoutesCollection(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/beauty" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
