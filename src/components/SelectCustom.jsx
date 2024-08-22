import React from "react";
import { Select } from "antd";
const SelectCustom = ({setProductType}) => {
    function handleChange (id, obj) {
        setProductType(id)
    }
    
  return (
    <Select
      className="w-full"
      onChange={handleChange}
      showSearch
      allowClear
      size="large"
      placeholder="Select a Product Type"
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: "1",
          label: "Fruits",
        },
        {
          value: "2",
          label: "Vegetables",
        },
        {
          value: "3",
          label: "Spices",
        },
      ]}
    />
  );
};
export default SelectCustom;
