const expList = document.getElementById('exp-list');
const incList = document.getElementById('inc-list');
const expHideShowButton = document.getElementById('exp-hide-show');
const incHideShowButton = document.getElementById('inc-hide-show');
const expInputDesc = document.getElementById('exp-desc');
const expInputAmt = document.getElementById('exp-amt');
const expAddBtn = document.getElementById('exp-add');
const expRemoveBtn = document.getElementById('exp-rmv');
const incInputDesc = document.getElementById('inc-desc');
const incInputAmt = document.getElementById('inc-amt');
const incAddBtn = document.getElementById('inc-add');
const incRemoveBtn = document.getElementById('inc-rmv');
const total = document.getElementById('total');
let runningTotal = 0;
let expenses = [];
let incomes = [];


// expanding list
function toggleExpList() {
    expList.classList.toggle('expanded');
}

function toggleIncList() {
    incList.classList.toggle('expanded');
}

expHideShowButton.addEventListener('click', toggleExpList);
incHideShowButton.addEventListener('click', toggleIncList);


// input info
function appendExpList() {
    let liElement = document.createElement("li");
    liElement.textContent = `- ${expInputDesc.value}, $${expInputAmt.value}`;
    expList.appendChild(liElement);

    expenses.push(Number(expInputAmt.value));
    runningTotal -= Number(expInputAmt.value);
    total.textContent = `Total: $${runningTotal}`;

    liElement.addEventListener('click', function () {
        liElement.classList.toggle('selected');
    });

    expInputDesc.value = '';
    expInputAmt.value = '';
}


function removeExpList() {
    let selectedItems = expList.querySelectorAll('.selected');

    for (let i = 0; i < selectedItems.length; i++) {
        let expenseAmount = parseFloat(selectedItems[i].textContent.split('$')[1].trim());
        if (expenses.includes(expenseAmount)) {
            let index = expenses.indexOf(expenseAmount);
            expenses.splice(index, 1);
            runningTotal += expenseAmount;
        }
    }

    total.textContent = `Total: $${runningTotal}`;

    selectedItems.forEach(function (item) {
        expList.removeChild(item);
    });
}

function appendIncList() {
    let liElement = document.createElement("li");
    liElement.textContent = `- ${incInputDesc.value}, $${incInputAmt.value}`;
    incList.appendChild(liElement);

    incomes.push(Number(incInputAmt.value));
    runningTotal += Number(incInputAmt.value);
    total.textContent = `Total: $${runningTotal}`;

    liElement.addEventListener('click', function () {
        liElement.classList.toggle('selected');
    });

    incInputDesc.value = '';
    incInputAmt.value = '';
}


function removeIncList() {
    let selectedItems = incList.querySelectorAll('.selected');

    for (let i = 0; i < selectedItems.length; i++) {
        let incomeAmount = parseFloat(selectedItems[i].textContent.split('$')[1].trim());
        if (incomes.includes(incomeAmount)) {
            let index = incomes.indexOf(incomeAmount);
            incomes.splice(index, 1);
            runningTotal -= incomeAmount;
        }
    }

    total.textContent = `Total: $${runningTotal}`;

    selectedItems.forEach(function (item) {
        incList.removeChild(item);
    });
}

expRemoveBtn.addEventListener('click', removeExpList);
expAddBtn.addEventListener('click', appendExpList);
incRemoveBtn.addEventListener('click', removeIncList);
incAddBtn.addEventListener('click', appendIncList);
