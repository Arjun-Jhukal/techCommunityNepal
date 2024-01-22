import { features } from "../../constants/features";
import Banner from "../organism/Banner";
import Features from "../organism/Features";
import Header from "../organism/Header";

export default function LandingPage() {
  const highlightFeature = features.slice(0, 3);

  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <Features data={highlightFeature} />
      </main>
    </>
  );
}
