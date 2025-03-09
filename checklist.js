function generateCheckList() {
  const nameInput = document.getElementById('nameInput').value;
  const names = nameInput.split('\n').filter((name) => name.trim() !== '');
  const checkList = document.getElementById('checkList');
  checkList.innerHTML = '';

  names.forEach((name, index) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check_' + index;
    checkbox.onchange = () => toggleCheckd(listItem);

    const label = document.createElement('label');
    label.htmlFor = 'check_' + index;
    label.textContent = name;
    label.style.marginLeft = '8px';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    checkList.appendChild(listItem);
  });
}

function toggleCheckd(listItem) {
  listItem.classList.toggle('checked');
}
