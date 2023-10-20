import { useEffect, useState } from "react";

const Feature = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://brand-shop-server-q4h1thm4y-mdsabbirhowlader420-gmailcom.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl text-center font-medium mb-5">Feature</h1>
      <div className="flex flex-col lg:items-center lg:flex-row">
        <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
          <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
            {products?.length} + Products
          </h3>
        </div>
        <div className="lg:w-1/2">
          <p className="">
            {` Welcome to our Gadget Store! Discover a wide range
            of high-quality products from renowned brands. With
            ${products?.length}+ products, we offer an extensive collection of
            items, including electronics, fashion, home goods, and more. Our
            mission is to provide you with the best shopping experience. Whether
            you're looking for the latest gadgets, trendy fashion, or innovative
            home appliances, you'll find it all here. We pride ourselves on
            offering competitive prices and excellent customer service. Our
            dedicated team is committed to ensuring your satisfaction. Shop with
            confidence and explore our diverse product categories today. Thank
            you for choosing us as your preferred online shopping destination.
            We look forward to serving you and helping you find the perfect
            products to meet your needs.`}
          </p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Feature;
