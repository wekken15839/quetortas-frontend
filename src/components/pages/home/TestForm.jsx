import { Controller, useForm } from "react-hook-form";
// import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import { MenuItem, Option, Select } from "@material-tailwind/react";

export default function TestForm() {
  const { register, setData, handleSubmit, watch, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleSelectChange = (e) => {
    // console.log(e.target.value);
    console.log(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <Select
        label="Select Version"
        name="library"
        onChange={handleSelectChange}
      >
        <Option value="1">Material Tailwind HTML</Option>
        <Option value="2">Material Tailwind React</Option>
        <Option value="3">Material Tailwind Vue</Option>
        <Option value="4">Material Tailwind Angular</Option>
        <Option value="5">Material Tailwind Svelte</Option>
      </Select>
      <button>Enviar</button>
    </form>
  );
}
