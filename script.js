
const addInputButton = document.getElementById('add-input');
const changeBgButton = document.getElementById('change-bg');
const inputContainer = document.querySelector('.input-container');
const combinedText = document.getElementById('combined-text');


function updateSum() {
    const inputs = document.querySelectorAll('.dynamic-input');
    let sum = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value) || 0; 
        sum += value;
    });

    combinedText.textContent = `Suma: ${sum}`;
}


document.querySelectorAll('.dynamic-input').forEach(input => {
    input.addEventListener('input', updateSum);
});


addInputButton.addEventListener('click', () => {
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('input-group');

    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.placeholder = 'Enter a number';
    newInput.classList.add('dynamic-input');


    newInput.addEventListener('input', updateSum);

    newInputGroup.appendChild(newInput);
    inputContainer.appendChild(newInputGroup);
});


changeBgButton.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});
