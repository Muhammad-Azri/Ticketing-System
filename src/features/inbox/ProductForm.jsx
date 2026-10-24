import Button from "@/components/Button";
import { useState } from "react";

const ProductForm = () => {
  const [productData, setProductData] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const createProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      }).then((res) => res.json);
      console.log("Response", response);
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteProduct = async () => {
    try {
      const responseDel = await fetch(
        `https://fakestoreapi.com/products/${selectedId}`,
        {
          method: "DELETE",
        },
      ).then((res) => res.json);
      console.log("Respon Delete", responseDel);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(productData);
  return (
    <div className="flex flex-col max-w-100 gap-3 bg-white ">
      <input
        name="title"
        placeholder="Nama"
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
        onChange={onChangeInput}
      />
      <input
        name="price"
        placeholder="Harga"
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
      />
      <input
        name="description"
        placeholder="Deskripsi"
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
      />
      <input
        name="category"
        placeholder="Kategori"
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
      />
      <input
        name="image"
        placeholder="Gambar"
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
      />
      <Button onClick={createProduct}>Submit</Button>
      <input
        name=""
        placeholder=""
        onChange={(e) => setSelectedId(e.target.value)}
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
      />
      <Button onClick={DeleteProduct} variant="destruction">
        Delete
      </Button>
    </div>
  );
};

export default ProductForm;
