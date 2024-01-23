import { BsArrowRight } from "react-icons/bs";
import Image from "../../atoms/Image";
import BannerImage from "../../../assets/bannerImage.jpg";
export default function Banner() {
  const buttonText = "Learn More Learn More";
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12  order-lg-1 order-2 text-lg-start text-center ">
            <h1 className="lg__heading ">
              We Bring <span>terrific</span> <br />
              <span> change</span> in you.
            </h1>
            <p>
              We are dedicated to Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ut ea cumque neque quidem aspernatur quisquam ab
              perferendis porro voluptatem quaerat voluptatibus dicta nulla dolor earum, itaque corrupti iusto reprehenderit.
            </p>

            <div className="text-lg-end text-center">
              <button className="more__btn">
                {buttonText.split("").map((char, i) => {
                  return (
                    <span
                      key={i}
                      style={{
                        transform: `rotate(${i * 17}deg)`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-lg-2 order-1 text-end">
            {/* <h1 className="lg__heading">
              Banner <span>Image</span>
            </h1> */}

            <div className="d-flex justify-content-center">
              <div className="banner__image">
                <Image src={BannerImage} alt="Professional Software Developer" />
                <div className="circular__dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
