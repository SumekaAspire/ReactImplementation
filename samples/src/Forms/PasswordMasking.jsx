import React,{useState} from 'react'
import { useForm } from 'react-hook-form';

function PasswordMasking() {
  const [realPassword, setRealPassword] = useState("");
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Real Password:", realPassword); 
    alert("Form submitted successfully!");
  };

  const handleChange = (e) => {
    const val = e.target.value.replace(/\s+/g, ""); //removes space immediately

    if (val.length < realPassword.length) {
      // If backspace/delete, remove last char
      setRealPassword(realPassword.slice(0, -1));
    } else {
      setRealPassword(realPassword + val.slice(-1));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text" // using text so we can show * instead of dots, browser allows dots using type password
        value={"*".repeat(realPassword.length)}
        onChange={handleChange}
        placeholder="Password"
        maxLength={8}
        {...register("password", {
          validate: () =>
            /^(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8}$/.test(realPassword) ||
            "Password must be 8 chars, include 1 number, 1 special char, and no spaces",
        })}
      />
      {errors.password && (
        <span style={errorStyle}>{errors.password.message}</span>
      )}

      <br />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#686a5c",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default PasswordMasking;

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "5px",
};