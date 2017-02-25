import React from "react";

const Form = ({ add, placeholder }) => {
  let inputVar;

  return (
    <form
      onSubmit={ e => {
        e.preventDefault();
        add(inputVar.value)
        inputVar.value = null;
      }}
    >
      <input
        placeholder={placeholder}
        ref={ n => inputVar = n }
        required
      />
    </form>
  )

}

export default Form;
