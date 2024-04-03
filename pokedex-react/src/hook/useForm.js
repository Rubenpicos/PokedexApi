import { useState } from "react";
// To return the app to an initial state// Para poder devolver todo a un estado inicial. 
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
