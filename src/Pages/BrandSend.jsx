import { axiosSecure } from "../hook/useAxios";

const BrandSend = () => {
  const handleAd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const brandData = { title, image };
    axiosSecure("/brand-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form
        onSubmit={handleAd}
        className="container mx-auto flex flex-col space-y-3"
      >
        <input name="title" type="text" className="input input-primary" id="" />
        <input name="image" type="text" className="input input-primary" id="" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BrandSend;
