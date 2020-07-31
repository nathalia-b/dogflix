import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, etc;
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }/*End_of_setValue*/

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  } /*End_of_handleChange*/

  function clearForm() {
    setValues(valoresIniciais);
  }/*End_of_clearForm*/

  return {
    values,
    handleChange,
    clearForm,
  };/*End_of_Return*/

}/*End_of_useForm*/

export default useForm;