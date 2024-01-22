import { Features } from "../../../interface/feature";

interface Props {
  data: Array<Features>;
}
export default function Feature(props: Props) {
  const { data } = props;

  return (
    <div className="row">
      {data?.map((feature) => (
        <div className="col-lg-4 col-12" key={feature.title}>
          <div className="feature__item">
            <div className="feature__item__icon">{feature.icon}</div>
            <div className="feature__item__details">
              <h4 className="sm__heading">{feature.title}</h4>
              <p>{feature.brief}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
