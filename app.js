// scripts
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

//window loading reset
window.addEventListener("load", () => {
    degree.value= "";
    celsiusField.innerHTML = "";
})

    convertBtn.addEventListener("click", (e) => {
       e.preventDefault();
       convertToCelsius();
      
    // add loading feature
        
    })

function convertToCelsius() {
   let inputvalue = degree.value;

   if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputvalue -32) * (5/9);
        celsiusField.innerHTML = ${fahrenheitToCelsius.toFixed(3)} &deg;
        c;
   }
   else if(tempType.value === "celsius") {
       const celsiusToCelsius = inputvalue - 273.15;
       celsiusField.innerHTML =  ${celsiusToCelsius .toFixed(3)} &deg;
       c;
   }
   
}
