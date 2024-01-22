import { BsArrowRight } from "react-icons/bs";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12  order-lg-1 order-2">
            <h1 className="lg__heading">
              We Bring <span>terrific</span> <br />
              <span> change</span> in you.
            </h1>
            <p>
              We are dedicated to Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ut ea cumque neque quidem aspernatur quisquam ab
              perferendis porro voluptatem quaerat voluptatibus dicta nulla dolor earum, itaque corrupti iusto reprehenderit.
            </p>

            <div className="text-end">
              <button className="more__btn">
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-lg-2 order-1">
            <h1 className="lg__heading">
              Banner <span>Image</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
