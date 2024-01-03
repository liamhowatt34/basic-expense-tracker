const expList = document.getElementById('exp-list');
const incList = document.getElementById('inc-list');
const expHideShowButton = document.getElementById('exp-hide-show');
const incHideShowButton = document.getElementById('inc-hide-show');

function toggleExpList() {
    expList.classList.toggle('expanded');
}

function toggleIncList() {
    incList.classList.toggle('expanded');
}

expHideShowButton.addEventListener('click', toggleExpList);
incHideShowButton.addEventListener('click', toggleIncList);

