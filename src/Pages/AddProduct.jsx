import { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    rating: "",
    productType: "",
  });
  const handleRatingChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      rating: value,
    });
  };
  const handleProductTypeChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      productType: value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = formData.productType;
    const price = form.price.value;
    const description = form.description.value;
    const rating = formData.rating;

    const productInfo = {
      image,
      productName,
      brandName,
      productType,
      price,
      description,
      rating,
    };
    fetch("http://localhost:5001/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Successfull.");
          form.reset();
        }
      });
  };
  return (
    <div>
      <section className="p-6 h-screen flex items-center dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add Product</p>
              <p className="text-xs">Fill Up the all values</p>
            </div>
            <form
              onSubmit={handleAddProduct}
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
            >
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
                  className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="description" className="text-sm">
                  Short Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  required
                  placeholder="Type Description for product"
                  cols={8}
                  rows={2}
                  className="w-full p-3 textarea resize-none rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full flex items-center gap-3 sm:col-span-2">
                <label htmlFor="rating" className="text-sm mt-2">
                  Rating
                </label>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value="1"
                    checked={formData.rating === "1"}
                    onChange={handleRatingChange}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value="2"
                    checked={formData.rating === "2"}
                    onChange={handleRatingChange}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value="3"
                    checked={formData.rating === "3"}
                    onChange={handleRatingChange}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value="4"
                    checked={formData.rating === "4"} // Check if this radio button is selected
                    onChange={handleRatingChange}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value="5"
                    checked={formData.rating === "5"}
                    onChange={handleRatingChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-700 py-3 rounded-md font-medium"
              >
                Add Product
              </button>
            </form>
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
