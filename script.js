const color = document.getElementById("color");
const colorCodeInput = document.getElementById("color-code");
const copyButton = document.getElementById("copy-button");

function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function updateColor() {
    const randomColor = generateRandomColor();
    color.style.backgroundColor = randomColor;
    colorCodeInput.value = randomColor;
}

color.addEventListener("click", updateColor);

copyButton.addEventListener("click", function() {
    colorCodeInput.select();
    document.execCommand("copy");
    alert("Color code copied to clipboard: " + colorCodeInput.value);
});
updateColor();
