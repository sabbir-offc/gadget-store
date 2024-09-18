import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Brands from "../components/Product/Brands";
import Feature from "../components/Home/Feature";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center">
          Choose your favourite Brand
        </h3>
        <Brands></Brands>
      </div>
      <div>
        <Feature></Feature>
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
