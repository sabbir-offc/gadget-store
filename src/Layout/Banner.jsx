const Banner = () => {
  const windowHeight = window.innerHeight;
  const middleOfScreen = windowHeight / 2;
  const handleScroll = () => {
    window.scroll(0, middleOfScreen);
  };
  return (
    <div>
      <div className="hero bg-hero-bg bg-no-repeat min-h-[60vh]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl  md:text-4xl font-bold">
              Welcom To Gadget Store
            </h1>
            <p className="mb-5">Find your favourit product in an one place.</p>
            <button onClick={handleScroll} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
