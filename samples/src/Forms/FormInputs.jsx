import React from "react";
import {useForm} from 'react-hook-form'
import {ToastContainer} from 'react-toastify';
import '../Css/form.css'

const FormInputs = () => {

    const{register, handleSubmit,formState:{errors}, reset}= useForm();

    const onSubmit =(data)=>{
        console.log(data);
        alert('Submitted Successfully!!');
    }
  return (
    <div className="formContainer"> 
      <h2 className="headingStyle">FormInputs</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
        <label>Name: 
            <input type='text' className="inputStyle"/></label><br/>

        <label>Password:
            <input type='password' className="inputStyle"/></label><br/>
        
        <label>Date:
            <input type='date' className="inputStyle"/>
        </label><br/>

        <label>Email:
            <input type='email' className="inputStyle"/>
        </label><br/>

        <label>Age:
             <input type='number' className="inputStyle"/>
        </label><br/>

        <label>Select the items:
           <select className="inputStyle">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
           </select>
           
        </label><br/>

        <label>Gender:<br/>
             <label><input type='radio' value='Male'></input>Male</label><br/>
             <label><input type='radio' value='Female'></input>Female</label><br/>
             <label><input type='radio' value='Others'></input>Others</label><br/>

        </label>

          <label>Favourite color:<br/>
             <label><input type='checkbox' value='Yellow'></input>Yellow</label><br/>
             <label><input type='checkbox' value='Red'></input>Red</label><br/>
             <label><input type='checkbox' value='Green'></input>Green</label><br/>

        </label><br/>

        <label>Feedback:</label>
         <textarea name="FeedBack" defaultValue="Write Here.."rows={4} columns={40}/><br/>


         <label>Progress:</label>
         <progress value={0.5}/><br/>
         <progress value={10} max={100}/><br/>
         <progress value={null}/><br/>


        <input type="button" value="Submit" className="buttonStyle"/>

    
      </form>
      <ToastContainer position='top-center' autoClose={3000}/>
    </div>
  );
};



export default FormInputs;

