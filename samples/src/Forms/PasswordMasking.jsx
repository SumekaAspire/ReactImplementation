import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function PasswordMasking() {
  const { handleSubmit, control, reset, formState:{errors} } = useForm();
  const [realPassword, setRealPassword] = useState("");
  const [showPassword, setShowPassword]=useState(false);
  const maskCharacter = "*";

  const onSubmit = (data) => {
    console.log("Real Password:", realPassword);
    console.log("Data:", data);

    reset(setRealPassword(""));//clearing React form and masking state
  };

  const handleChange =(e,field)=>{
     const inputValue = e.target.value;
     const oldMasked = maskCharacter.repeat(realPassword.length);

                if (inputValue.length > oldMasked.length) {
                  const newChar = inputValue[inputValue.length - 1];
                  setRealPassword((prev) => prev + newChar);
                  field.onChange(realPassword + newChar); // send raw password to react form
                } else {
                  const updated = realPassword.slice(0, -1);
                  setRealPassword(updated);
                  field.onChange(updated);
                }
  }

  return (
    <div style={{
        display: "flex",           
        justifyContent: "center",    // center horizontally
        alignItems: "center",        // center vertically
        height: "300px",  
        width:"700px",
        backgroundColor: "#f4f4f4",
        padding:'50px'
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ position: "relative", width: "250px"}}>
         <Controller
          name="password"
          control={control}
          rules={{  
            required: "Required Field",
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s)[A-Za-z\d!@#$%^&*]{8}$/,
              message:
                "Must have 8 chars - 1 number, 1 special char & no spaces"
            }

          }}
          render={({ field }) => (
        <input
                  type="text"
                  value={showPassword ? realPassword : maskCharacter.repeat(realPassword.length)}
                  onChange={(e) => handleChange(e, field)}
                  placeholder="Enter password.."
                  autoComplete="off"
                  maxLength={8}
                  style={{width:'100%', height:'40px'}}
                  />
        

            
          )}
        />
         
         <span onClick={() => setShowPassword((prev) => !prev)} style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}>
            {showPassword ? <FaEye /> : <FaEyeSlash/>}
            </span>
            
        </div>
         {errors.password &&(
            <span
             style={{
                color: "red",
                fontSize: "12px",
                overflow:'hidden',
             }}>{errors.password.message}</span>) }

      
        {/* <br/><input></input>    */}
        <p>realPassword: {realPassword}</p>
        <button
          type="submit"
          onMouseEnter={(e) => (e.target.style.border = "#813d9f")}
          onMouseLeave={(e) => (e.target.style.border = "#c98fe2ff")}
        >
          Submit
        </button>
           

      </form>
    </div>
  );
}

export default PasswordMasking;