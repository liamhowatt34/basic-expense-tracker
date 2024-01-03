const expList = document.getElementById('exp-list');
const incList = document.getElementById('inc-list');
const expHideShowButton = document.getElementById('exp-hide-show');
const incHideShowButton = document.getElementById('inc-hide-show');
let expDisplay = 0;
let incDisplay = 0;

function toggleExpList() {
    if (expDisplay == 1) {
        expList.style.display = 'block';
        expDisplay = 0;
    } else {
        expList.style.display = 'none';
        expDisplay = 1;
    }
}

function toggleIncList() {
    if (incDisplay == 1) {
        incList.style.display = 'block';
        incDisplay = 0;
    } else {
        incList.style.display = 'none';
        incDisplay = 1;
    }
}

expHideShowButton.addEventListener('click', toggleExpList);
incHideShowButton.addEventListener('click', toggleIncList);
