let count = 0;

const showMore = document.querySelector('.show-more');
const moreLinks = document.querySelector('.more-links');

showMore.addEventListener('click', () => {
  moreLinks.classList.toggle('show-more-links');
});

const generateTable = () => {
  const lowerLimit = +document.querySelector('.lowerLimitInput').value;
  const upperLimit = +document.querySelector('.upperLimitInput').value;

  if (upperLimit > lowerLimit) {
    const tableDiv = document.querySelector('.t-cont');
    tableDiv.innerHTML =
      "<div class='table-cont'><table class='table'></table></div>";

    const table = document.querySelector('.table');

    var header = table.createTHead();

    var hRow = header.insertRow(0);

    var hCell0 = hRow.insertCell(0);
    var hCell1 = hRow.insertCell(1);
    var hCell2 = hRow.insertCell(2);

    hCell0.innerHTML = '<b>Number</b>';
    hCell1.innerHTML = '<b>Square</b>';
    hCell2.innerHTML = '<b>Cube</b>';

    for (let i = lowerLimit; i <= upperLimit; i++) {
      const row = table.insertRow(i - lowerLimit + 1);

      const cell0 = row.insertCell(0);
      const cell1 = row.insertCell(1);
      const cell2 = row.insertCell(2);
      cell0.innerHTML = i;
      cell1.innerHTML = i * i;
      cell2.innerHTML = i * i * i;
    }
  } else {
    alert('Upper limit has to be greater than Lower limit...Try again!');
  }

  // document.querySelector(".lowerLimitInput").value = "";
  // document.querySelector(".upperLimitInput").value = "";
};

const largestOf3 = () => {
  const firstNumber = +document.querySelector('.firstNumberInput').value;
  const secondNumber = +document.querySelector('.secondNumberInput').value;
  const thirdNumber = +document.querySelector('.thirdNumberInput').value;

  const largest =
    firstNumber > secondNumber
      ? firstNumber > thirdNumber
        ? firstNumber
        : thirdNumber
      : secondNumber > thirdNumber
      ? secondNumber
      : thirdNumber;

  const tableDiv = document.querySelector('.t-cont');
  tableDiv.innerHTML = `<div class='answer-cont'>Largest of <b>${firstNumber}</b>, <b>${secondNumber}</b> & <b>${thirdNumber}</b> : <span>${largest}</span></div>`;

  // document.querySelector('.firstNumberInput').value = '';
  // document.querySelector('.secondNumberInput').value = '';
  // document.querySelector('.thirdNumberInput').value = '';
};

const findFactorial = () => {
  const factorial = (num) => {
    return num === 0 ? 1 : num * factorial(num - 1);
  };

  const number = +document.querySelector('.numberInput').value;

  if (number >= 0) {
    const answer = factorial(number);

    const tableDiv = document.querySelector('.t-cont');
    tableDiv.innerHTML = `<div class='answer-cont'>Factorial of <b>${number}</b> : <span>${answer}</span></div>`;
  } else {
    alert(
      'Factorial is defined only for non-negative integer numbers...Try again!'
    );
  }

  // document.querySelector('.numberInput').value = '';
};

const addParagraph = () => {
  const tableDiv = document.querySelector('.t-cont');
  if (count === 0) tableDiv.innerHTML = '';

  const pDiv = document.createElement('div');
  pDiv.classList.add('p-div', `p-div-${count + 1}`);

  const countP = document.createElement('p');
  countP.innerText = count + 1;
  countP.classList.add('count-p');

  const paraText = document.querySelector('.paragraphText').value;
  const formattedText =
    paraText.length > 60 ? `${paraText.substring(0, 58)}...` : paraText;
  const paragraph = document.createElement('p');
  paragraph.innerText = formattedText || 'Hello World!';
  paragraph.classList.add('result-p');

  const crossIcon = document.createElement('i');
  crossIcon.classList.add('fas', 'fa-times', `cross-${count + 1}`);
  crossIcon.addEventListener('click', removeParagraph);

  const editIcon = document.createElement('i');
  editIcon.classList.add('fas', 'fa-edit', `edit-${count + 1}`);
  editIcon.addEventListener('click', editParagraph);

  pDiv.appendChild(countP);
  pDiv.appendChild(paragraph);
  pDiv.appendChild(editIcon);
  pDiv.appendChild(crossIcon);

  tableDiv.appendChild(pDiv);

  // document.querySelector('.paragraphText').value = '';
  count++;
};

const editParagraph = (e) => {
  const targetClass = e.target.classList[e.target.classList.length - 1];
  const divNumber = targetClass.split('-')[1];

  const divToUpdate = document.querySelector(`.p-div-${divNumber}`);

  const newText = prompt(
    'Edit paragraph text',
    divToUpdate.children[1].innerText
  );

  if (newText !== null) {
    newText === ''
      ? alert('Please enter valid text!')
      : (divToUpdate.children[1].innerText = newText);
  }
};

const removeParagraph = (e) => {
  const targetClass = e.target.classList[e.target.classList.length - 1];
  const divNumber = targetClass.split('-')[1];

  const divToRemove = document.querySelector(`.p-div-${divNumber}`);
  divToRemove.remove();

  if (!document.querySelector('.t-cont').innerHTML) removeAllParagraphs();
};

const removeAllParagraphs = () => {
  const tableDiv = document.querySelector('.t-cont');
  tableDiv.innerHTML = 'Paragraphs will appear here...';
  count = 0;
};
