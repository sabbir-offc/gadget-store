import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  const [productType, setProductType] = useState(product.productType);

  const { _id, image, productName, brandName, price, rating } = product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const updateProduct = {
      image,
      productName,
      brandName,
      productType,
      price,
      rating,
    };
    fetch(`https://brand-shop-server-teal.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product data updated Successfull.");
          navigate(location.state && location.state);
        } else {
          toast.error("Update failed, you haven't modified anything.");
        }
      });
  };
  return (
    <div className="my-20">
      <section className="max-w-4xl p-6 mx-auto   rounded-md shadow-md">
        <h2 className="text-lg mb-5 font-semibold   capitalize ">
          Update Product Details
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-6  gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="image" className="text-sm">
                Image
              </label>
              <input
                id="image"
                type="text"
                name="image"
                placeholder="Image"
                required
                defaultValue={image}
                className="w-full border border-blue-700 p-3 rounded-md focus:ring focus:ri focus:ri "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="productName" className="text-sm">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                name="productName"
                placeholder="Product name"
                required
                defaultValue={productName}
                className="w-full border border-blue-700 p-3 rounded-md focus:ring focus:ri focus:ri "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="brandName" className="text-sm">
                Brand Name
              </label>
              <input
                id="brandName"
                type="text"
                name="brandName"
                placeholder="Brand Name"
                required
                defaultValue={brandName}
                className="w-full border border-blue-700 p-3 rounded-md focus:ring focus:ri focus:ri "
              />
            </div>
            <div className="col-span-full">
              <select
                defaultValue={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="select border border-blue-700 select-ghost w-full max-w-xs"
              >
                <option disabled value="">
                  Product Type
                </option>
                <option value="Phone">Phone</option>
                <option value="Computer">Computer</option>
                <option value="TV">TV</option>
                <option value="Buds">Buds</option>
                <option value="Camera">Camera</option>
                <option value="Monitor">Monitor</option>
                <option value="Laptop">Laptop</option>
                <option value="Tab">Tab</option>
                <option value="Watch">Watch</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="price" className="text-sm">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Product Price"
                required
                defaultValue={price}
                className="w-full p-3 border border-blue-700 rounded-md focus:ring focus:ri focus:ri "
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="rating" className="text-sm">
                Rating
              </label>
              <input
                id="rating"
                type="text"
                defaultValue={rating}
                name="rating"
                placeholder="Product Rating"
                required
                className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border border-blue-700"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-3 bg-blue-700 text-white my-3 rounded w-full"
          >
            Update Data
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateProduct;
