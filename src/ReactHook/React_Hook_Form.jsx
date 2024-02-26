import React, { useState } from "react";
import CommonTextField from "../CommonComponent/CommonTextField";
import { useForm } from "react-hook-form";

const React_Hook_Form = () => {
  const [submitValue, setSubmitValue] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    setSubmitValue(JSON.stringify(data, null, 2));
    reset();
  };

  const password = watch("password", "");
  const handleUserNameChange = (e) => {
    setValue("confirmUsername", e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            required
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <CommonTextField
          name={"name"}
          label={"Your Name"}
          placeholder={"Enter Name Here"}
          register={register}
          required={true}
          minLength={3}
          maxLength={7}
        />
        <div>
          <label htmlFor="username">Username:</label>
          <input
            {...register("username", { required: true, minLength: 3 })}
            required
            minLength={3}
            maxLength={7}
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={handleUserNameChange}
          />
        </div>

        <div>
          <label htmlFor="confirmUsername">Confirm Username:</label>
          <input
            {...register("confirmUsername", {
              required: true,
            })}
            readOnly
            disabled
            type="text"
            required
            id="confirmUsername"
            placeholder="Confirm your username"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            {...register("password", {
              required: true,
            })}
            type="password"
            minLength={3}
            maxLength={7}
            required
            id="password"
            placeholder="Enter your password"
          />{" "}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            {...register("confirmPassword", {
              required: true,
            })}
            required
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit">Sign Up</button>

        {submitValue && (
          <pre>
            Submitted data:{"\n"}
            {submitValue}
          </pre>
        )}
      </form>
    </div>
  );
};

export default React_Hook_Form;
