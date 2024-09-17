function convertTemperature() {
    const tempInput = document.getElementById("temperature-input").value;
    const scale = document.getElementById("scale").value;
    let result = '';

    if (tempInput === "") {
        alert("Please enter a valid temperature");
        return;
    }

    const temp = parseFloat(tempInput);
    
    switch(scale) {
        case 'Celsius':
            result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F`;
            result += `<br>Kelvin: ${(temp + 273.15).toFixed(2)}K`;
            break;
        case 'Fahrenheit':
            result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C`;
            result += `<br>Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'Kelvin':
            result = `Celsius: ${(temp - 273.15).toFixed(2)}°C`;
            result += `<br>Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.display = "block";
}
