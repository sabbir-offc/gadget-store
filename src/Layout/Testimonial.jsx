const Testimonial = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
      <h1 className="font-bold text-3xl my-5 ">Happy Client</h1>
      <div className="flex items-center justify-center px-5 py-5">
        <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://i.ibb.co/5RHkTjV/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg"
                className="mx-auto object-cover rounded-full h-20 w-20 "
              />
            </a>
          </div>
          <div className="w-full mb-10">
            <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
              “
            </div>
            <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
              {`I've been shopping from this website for years, and I'm always
              impressed by the quality of the products and the excellent
              customer service. I highly recommend it to anyone looking for
              great deals on top brands.`}
            </p>
            <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="font-bold text-center text-indigo-500 text-md">
              Tom Hardy
            </p>
            <p className="text-xs text-center text-gray-500 dark:text-gray-300">
              @thom.hardy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
