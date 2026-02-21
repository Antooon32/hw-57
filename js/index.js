function logItems(array) {
    for (let i = 1; i <= array.length; i++) {
        console.log(`${i} - ${array[i-1]}`);
    };
};
let arr = ['Mango', 'Poly', 'Ajax'];
logItems(arr);

function calculateEngravingPrice(message, pricePerWord) {
    let messageArr = message.split(" ");
    return messageArr.length * pricePerWord;
}
console.log(calculateEngravingPrice("apple banana kiwi", 100));

function findLongestWord(string) {
    let wordArr = string.split(" ");
    let LongestWordIndex = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[LongestWordIndex] < wordArr[i]) {
            LongestWordIndex = i;
        }
    }

    return wordArr[LongestWordIndex];
}
console.log(findLongestWord("abc abcde abcdef ab"));

function formatString(string) {
    if (string.length <= 40) {
        return string;
    };
    let newstring = string.slice(0, 40);
    return newstring + "...";
};
console.log(formatString("12345678901234567890123456789012345678901234567890"));

function checkForSpam(message) {
    message = message.toLowerCase();
    if (message.includes("sale") || message.includes("spam")) {
        return true;
    };
    return false;
}
console.log(checkForSpam("123SPam"));

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  const numberInput = Number(input);

  if (Number.isNaN(numberInput) || input.trim() === '') {
    alert('Було введено не число, спробуйте ще раз');
    continue;
  }
  numbers.push(numberInput);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Масив порожній, сума не розрахована.');
}

const logins = ['user1', 'admin', 'moderator'];

function isLoginValid(login) {
  const length = login.length;
  return length >= 4 && length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}

console.log(addLogin(logins, 'cat'));        
console.log(addLogin(logins, 'admin'));      
console.log(addLogin(logins, 'new_user_1'));
console.log(logins);