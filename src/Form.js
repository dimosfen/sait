import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import "./styles.css";
const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

export function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <div id="back_form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" class="firstName" name="firstName" ref={register} />
      <p id="error"> {errors.firstName?.message}</p>
      <input type="text" class="age" name="age" ref={register} />
      <p id="error">{errors.age?.message}</p>
      <input class="submit" type="submit" />
    </form>
    </div>
  );
}
export default Form;