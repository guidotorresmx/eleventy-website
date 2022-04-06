const getRandomColorChannel = function(options = 256) {
    return Math.floor(Math.random() * options);
};

const getRandomRGB = function() {
    let r = getRandomColorChannel();
    let g = getRandomColorChannel();
    let b = getRandomColorChannel();
    return [r, g, b];
};

const getRGBString = function() {
    rawRGB = getRandomRGB();
    return `rgb(${rawRGB[0]},${rawRGB[1]},${rawRGB[2]})`;
};

const updateColor = function() {
    const body = document.querySelector(`body`);
    const output = document.querySelector(`#output`);

    let color = getRGBString();
    body.style.backgroundColor = color;
    output.textContent = color;
};

updateColor();