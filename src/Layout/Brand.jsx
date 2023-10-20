import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { title, image } = brand;
  return (
    <div>
      <div
        data-aos="zoom-out-up"
        className="hero min-h-[30vh] min-w-[50vh] md:min-w-[40vh]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <Link to={`/brand-products/${title}`}>
              <button className="p-3 bg-blue-700 text-white font-medium rounded">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};
export default Brand;
