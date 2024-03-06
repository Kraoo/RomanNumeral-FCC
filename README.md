# Roman Numeral Converter

This project is a simple web application that converts numbers to Roman numerals. It includes an HTML file for the structure of the web page, a CSS file for styling, and a JavaScript file for functionality.

## Files

- `index.html`: Contains the structure of the web page including input field, button, and result display.
- `styles.css`: Defines the styling for the web page, including dark mode toggle, container styles, input field, button, and result display.
- `script.js`: Implements the conversion logic from numbers to Roman numerals and handles user interactions such as button click and dark mode toggle.

## Features

- Users can input a number in the provided input field.
- Upon clicking the "Convert" button or pressing the Enter key, the input number is converted to its corresponding Roman numeral representation and displayed on the page.
- The web page includes a dark mode toggle button, allowing users to switch between light and dark themes.
- Input validation ensures that the entered number is within the range of 1 to 3999, the limit for Roman numerals.

## How it Works

- The JavaScript file `script.js` contains a function `convertToRoman()` which implements the conversion logic.
- It utilizes an array of objects `romanNumerals` where each object contains a numeric value and its corresponding Roman numeral representation.
- The function iterates through the `romanNumerals` array, subtracting the largest possible value from the input number and appending its corresponding Roman numeral to the result string until the input number is fully converted.
- Dark mode functionality is implemented using local storage to persist the user's preference.

