import React from 'react';
import { useForm } from "react-hook-form";
const AddTask = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true})} />
      <input {...register("lastName", { required: true})} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddTask;