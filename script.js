document.addEventListener("DOMContentLoaded", function() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    document.querySelector(".dark-mode-toggle").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
    });

    document.getElementById('numberInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            convertToRoman();
        }
    });
});

function convertToRoman() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';
    let num = parseInt(numberInput);

    if (num < 1 || num > 3999) {
        result = 'Please enter a number between 1 and 3999.';
    } else {
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }
    }

    resultElement.textContent = result;
}
