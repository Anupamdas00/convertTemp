const calculateTemp = () => {
  const enteredVal = document.getElementById("number").value;

  const selectedTemp = document.getElementById("tempType");
  const selectedTempValue = tempType.options[selectedTemp.selectedIndex].value;

  const celToFer = (celsius) => {
    let fer = Math.round((9 / 5) * celsius + 32);
    return fer;
  };

  const ferToCel = (ferhenheit) => {
    let cel = Math.round(((ferhenheit - 32) * 5) / 9);
    return cel;
  };

  let result;

  if (selectedTempValue == "cel") {
    result = celToFer(enteredVal);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result} °Farenheit`;
  } else {
    result = ferToCel(enteredVal);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result} °Celsius`;
  }
}

