import { Features } from "../../../interface/feature";
import Feature from "../../molecules/Feature";

export default function Features({ data }: { data: Array<Features> }) {
  console.log(data);
  return (
    <section className="feature section__gap">
      <div className="container">
        <h1 className="section__title">Why Choose Us?</h1>
        <Feature data={data} />
      </div>
    </section>
  );
}
