export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input');
    let values: {[prop: string]: string} = {}; //this will create an object with several properties from the form 
  
    inputs.forEach(input => {
      values[input.id] = input.value;
    });
    return values;
  };