import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const CommonTextField = (props) => {
  const {
    label,
    name,
    placeholder,
    required,
    minLength,
    maxLength,
    pattern,
    register,
    id,
    onChange,
  } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <TextField
        id={name}
        name={name}
        {...register(name, {
          required: required,
          minLength: 5,
          maxLength: 7,
          pattern: pattern,
        })}
        onChange={onChange}
        placeholder={placeholder}
        size="small"
        minLength={minLength}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
};

export default CommonTextField;