document.getElementById('check-btn').addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        return;
    }

    const normalizedInput = input
        .toLowerCase()
        .replace(/[\W_]/g, ''); // Remove all non-alphanumeric characters and underscores

    const reversedInput = normalizedInput.split('').reverse().join('');

    const isPalindrome = normalizedInput === reversedInput;

    if (isPalindrome) {
        resultElement.textContent = `${input} is a palindrome`;
    } else {
        resultElement.textContent = `${input} is not a palindrome`;
    }
});
