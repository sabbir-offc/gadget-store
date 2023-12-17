import { axiosSecure } from "../hook/useAxios";

const AdvertiseSend = () => {
  const handleAd = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const ad = { image };
    axiosSecure("/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ad),
    })
      .then((res) => res.json())
      .then((data) => data);
  };
  return (
    <form
      onSubmit={handleAd}
      className="container mx-auto flex flex-col space-y-3"
    >
      <input name="image" type="text" className="input input-primary" id="" />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default AdvertiseSend;
