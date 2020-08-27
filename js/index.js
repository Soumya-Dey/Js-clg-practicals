const generateTable = () => {
    const lowerLimit = +document.querySelector(".lowerLimitInput").value;
    const upperLimit = +document.querySelector(".upperLimitInput").value;

    if (upperLimit > lowerLimit) {
        const tableDiv = document.querySelector(".t-cont");
        tableDiv.innerHTML =
            "<div class='table-cont'><table class='table'></table></div>";

        const table = document.querySelector(".table");

        var header = table.createTHead();

        var hRow = header.insertRow(0);

        var hCell0 = hRow.insertCell(0);
        var hCell1 = hRow.insertCell(1);
        var hCell2 = hRow.insertCell(2);

        hCell0.innerHTML = "<b>Number</b>";
        hCell1.innerHTML = "<b>Square</b>";
        hCell2.innerHTML = "<b>Cube</b>";

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
        alert("Upper limit has to be greater than Lower limit...Try again!");
    }

    document.querySelector(".lowerLimitInput").value = "";
    document.querySelector(".upperLimitInput").value = "";
};

const largestOf3 = () => {
    const firstNumber = +document.querySelector(".firstNumberInput").value;
    const secondNumber = +document.querySelector(".secondNumberInput").value;
    const thirdNumber = +document.querySelector(".thirdNumberInput").value;

    const largest =
        firstNumber > secondNumber
            ? firstNumber > thirdNumber
                ? firstNumber
                : thirdNumber
            : secondNumber > thirdNumber
            ? secondNumber
            : thirdNumber;

    const tableDiv = document.querySelector(".t-cont");
    tableDiv.innerHTML = `<div class='answer-cont'>Largest of <b>${firstNumber}</b>, <b>${secondNumber}</b> & <b>${thirdNumber}</b> : <span>${largest}</span></div>`;

    document.querySelector(".firstNumberInput").value = "";
    document.querySelector(".secondNumberInput").value = "";
    document.querySelector(".thirdNumberInput").value = "";
};

const findFactorial = () => {
    const factorial = (num) => {
        return num === 0 ? 1 : num * factorial(num - 1);
    };

    const number = +document.querySelector(".numberInput").value;

    if (number >= 0) {
        const answer = factorial(number);

        const tableDiv = document.querySelector(".t-cont");
        tableDiv.innerHTML = `<div class='answer-cont'>Factorial of <b>${number}</b> : <span>${answer}</span></div>`;
    } else {
        alert(
            "Factorial is defined only for non-negative integer numbers...Try again!"
        );
    }

    document.querySelector(".numberInput").value = "";
};
