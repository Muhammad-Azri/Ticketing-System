import Button from "@/components/Button";
import { useState } from "react";

const DummyForm = () => {
  const [productData, setProductData] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const createProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      }).then((res) => res.json());
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col max-w-80 gap-3 bg-white ">
      <input
        type="text"
        name="title"
        placeholder="Nama"
        onChange={onChangeInput}
        className="rounded-lg border border-gray-500 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 min-h-8"
      />
      <Button onClick={createProduct}>Submit</Button>
    </div>
  );
};

export default DummyForm;
