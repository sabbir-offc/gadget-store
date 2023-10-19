import { useEffect } from "react";
import Banner from "../Layout/Banner";
import Brands from "../Layout/Brands";
import Feature from "../Layout/Feature";

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
      <Feature></Feature>
    </div>
  );
};

export default Home;
