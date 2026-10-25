import Card from "@/components/Card";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import DummyForm from "./DummyForm";
import Button from "@/components/Button";
import { Loader } from "lucide-react";

const GetDataDummy = () => {
  const [productList, setProductList] = useState([]);
  const [isLoadingDelete, setIsLoadingDelete] = useState(null);

  const getAllProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductList(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (id) => {
    setIsLoadingDelete(id);
    try {
      const responseDel = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      }).then((res) => res.json());
      console.log(responseDel);
      if (responseDel.id) {
        setProductList((prev) => {
          const hasil = prev.filter((product) => {
            if (product.id !== id) {
              return true;
            } else {
              return false;
            }
          });
          return hasil;
        });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingDelete(null);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const columns = [
    {
      key: "id",
      header: "ID",
      Cell: (value) => value,
    },
    {
      key: "title",
      header: "Nama",
      Cell: (value) => value,
    },
    {
      key: "description",
      header: "Deskripsi",
      Cell: (value) => value,
    },
    {
      key: "category",
      header: "Kategori",
      Cell: (value) => value,
    },
    {
      key: "discountPercentage",
      header: "Diskon",
      Cell: (value) => value,
    },
    {
      key: "rating",
      header: "Rating",
      Cell: (value) => value,
    },
    {
      key: "stock",
      header: "Stok",
      Cell: (value) => value,
    },
    {
      key: "tags",
      header: "Tags",
      Cell: (value) => value,
    },
    {
      key: "id",
      header: "Action",
      cell: (id) => (
        <div>
          <Button
            variant="destruction"
            onClick={() => onDelete(id)}
            icon={
              isLoadingDelete == id ? (
                <Loader className="animate-spin text-xs" />
              ) : null
            }
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <DummyForm />
      <Card>
        <Table columns={columns} data={productList}></Table>
      </Card>
    </div>
  );
};

export default GetDataDummy;
