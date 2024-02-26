import { TextField } from "@mui/material";
import React from "react";

const CommonTextField = (props) => {
  const {
    label,
    name,
    placeholder,
    register,
    required,
    minLength,
    maxLength,
    id,
    onChange,
  } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <TextField
        id={id}
        name={name}
        {...register(name, { required: required, minLength: minLength })}
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

CommonTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
};
