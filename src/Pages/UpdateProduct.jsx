import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    productType: "",
  });
  const [productTypes, setProductTypes] = useState([]);

  // Fetch product types from the `useLoaderData` hook
  const product = useLoaderData();

  useEffect(() => {
    if (product) {
      // Extract product types from the 'product' data
      const types = product.map((item) => item.productType);

      // Set the default value and product types in the state
      setFormData({
        ...formData,
        productType: types[0], // Set the default value to the first item
      });

      setProductTypes(types);
    }
  }, [product]);

  const handleProductTypeChange = (e) => {
    setFormData({
      ...formData,
      productType: e.target.value,
    });
  };
  const { image, productName, brandName, productType, price, rating } = product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = formData.productType;
    const price = form.price.value;
    const rating = formData.rating;
    const updateProduct = {
      image,
      productName,
      brandName,
      productType,
      price,
      rating,
    };
  };
  return (
    <div className="my-20">
      <section className="max-w-4xl p-6 mx-auto bg-gray-800  rounded-md shadow-md">
        <h2 className="text-lg mb-5 font-semibold  text-gray-50 capitalize ">
          Update Product Details
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-6 text-gray-50 gap-4 col-span-full lg:col-span-3">
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
                className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
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
                className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
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
                className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <select
                value={formData.productType}
                onChange={handleProductTypeChange}
                className="select select-ghost w-full max-w-xs"
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
                className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
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
                className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
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
