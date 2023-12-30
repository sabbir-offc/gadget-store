import { useQuery } from "@tanstack/react-query";
import { deleteProduct, getAllProducts } from "../../../../api/admin";
import ProductsTable from "../../../../components/Table/ProductsTable";
import { useEffect, useState } from "react";
import DeleteModal from "../../../../components/Modal/ProductDeleteModal";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../../../components/Loader";
import { axiosSecure } from "../../../../hook/useAxios";

const AllProducts = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [count, setCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 10;
  useEffect(() => {
    axiosSecure("/productsCount").then((res) => setCount(res.data.count));
  }, []);

  // const numberOfPages = [Array]
  const totalPage = Math.ceil(count / itemPerPage);
  const pages = [...Array(totalPage).keys()];

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", currentPage, itemPerPage],
    queryFn: async () => {
      const data = await getAllProducts(currentPage, itemPerPage);
      return await data;
    },
  });
  if (isLoading) return <Loader />;

  const handleDelete = (id) => {
    setSelectedProductId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const data = await deleteProduct(selectedProductId);
      console.log(data);
      if (data.deletedCount > 0) {
        refetch();
        toast.success("Product deleted successfully");
      }
      setIsDeleteModalOpen(false);
    } catch (error) {
      toast.error("Error deleting product:", error);
    }
  };

  const handleCancelDelete = () => {
    setSelectedProductId(null);
    setIsDeleteModalOpen(false);
  };

  const handleRight = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">All Products</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all products. You can add new product, edit or
              delete existing ones.
            </p>
          </div>
          <div>
            <Link to={"/dashboard/add-product"}>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new Product
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Product</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Brand</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Rating
                      </th>
                      <th
                        scope="col"
                        className="relative text-center px-4 py-3.5 font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {products.map((item) => (
                      <ProductsTable
                        handleDelete={handleDelete}
                        key={item._id}
                        item={item}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <button
            onClick={handleLeft}
            className={`mx-1 ${
              currentPage === 0 ? "cursor-not-allowed" : "cursor-pointer"
            } text-sm font-semibold text-gray-900`}
          >
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </button>
          {pages?.map((item, idx) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${
                item === currentPage
                  ? "bg-blue-600 text-white font-semibold"
                  : ""
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={handleRight}
            className={`mx-2 ${
              currentPage === pages.length - 1 ? "cursor-not-allowed" : ""
            } text-sm font-semibold text-gray-900`}
          >
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </button>
        </div>
      </section>
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          setIsOpen={setIsDeleteModalOpen}
          handleConfirm={handleConfirmDelete}
          handleCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default AllProducts;
