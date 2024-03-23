function getInputFieldValueBytById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    if (inputFieldValue < 0) {
      document.getElementById("alart").innerText = "Value never been negative";
      inputField.value = "";
      return false;
    }else{
      document.getElementById("alart").innerText = "";
      inputField.value = "";
    }
    inputField.value = "";
    return inputFieldValue;
  }
  
  function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementvalue = parseFloat(textElementValueString);
    return textElementvalue;
  }
  function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
  }