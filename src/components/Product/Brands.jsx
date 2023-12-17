import { useEffect, useState } from "react";
import Brand from "./Brand";
import { axiosSecure } from "../../hook/useAxios";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axiosSecure.get("/brand-data").then((res) => setBrands(res.data));
  }, []);

  return (
    <div
      id="brand"
      className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 mx-auto"
    >
      {brands.map((brand) => (
        <Brand key={brand._id} brand={brand}></Brand>
      ))}
    </div>
  );
};

export default Brands;
