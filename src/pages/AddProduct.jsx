import { Button, Input, DatePicker } from "antd";
import React, { useState } from "react";
import SelectCustom from "./../components/SelectCustom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate()
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [productDate, setProductDate] = useState("");

  const changeDate = (date, dateString) => {
    setProductDate(dateString);
  };

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    const data = {
      productName,
      productPrice,
      productType,
      productDate,
    };

    axios
      .post("http://localhost:3000/products", data)
      .then((res) => {
        toast.success("Product added successfully!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate('/')
        }, 1400)
      })
      .catch((err) => {
        toast.error("Error adding product. Please try again.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddProductSubmit}>
        <div className="p-5 flex items-center justify-between">
          <h2 className="text-[25px] font-bold">Add Product</h2>
          <Button
            className="!bg-[#75757d] hover:opacity-65 active:shadow-2xl"
            type="primary"
            htmlType="submit"
            size="large"
          >
            Save Product
          </Button>
        </div>
        <div className="w-[450px] space-y-4 p-5">
          <Input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            allowClear
            className="p-2"
            size="large"
            name="productName"
            type="text"
            placeholder="Enter product name"
            required
          />
          <Input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            allowClear
            className="p-2"
            size="large"
            name="productPrice"
            type="text"
            placeholder="Enter product price"
            required
          />
          <SelectCustom setProductType={setProductType} />
          <DatePicker
            className="p-2 w-full"
            size="large"
            onChange={changeDate}
            required
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
