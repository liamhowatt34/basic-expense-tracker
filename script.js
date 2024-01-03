const expList = document.getElementById('exp-list');
const incList = document.getElementById('inc-list');
const expHideShowButton = document.getElementById('exp-hide-show');
const incHideShowButton = document.getElementById('inc-hide-show');
const expInputDesc = document.getElementById('exp-desc');
const expInputAmt = document.getElementById('exp-amt');
const expAddBtn = document.getElementById('exp-add');
const expRemoveBtn = document.getElementById('exp-rmv');


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

    liElement.addEventListener('click', function () {
        liElement.classList.toggle('selected');
    });

    expInputDesc.value = '';
    expInputAmt.value = '';
}

function removeExpList() {
    let selectedItems = expList.querySelectorAll('.selected');

    selectedItems.forEach(function (item) {
        expList.removeChild(item);
    });
}

expRemoveBtn.addEventListener('click', removeExpList);
expAddBtn.addEventListener('click', appendExpList);
