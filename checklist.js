function generateCheckList() {
  const nameInput = document.getElementById('nameInput').value;
  const lines = nameInput.split('\n').filter((name) => name.trim() !== '');
  const checklist = document.getElementById('checklist');
  const totalCount = document.getElementById('totalCount');
  checklist.innerHTML = '';
  let validCount = 0;

  lines.forEach((line, index) => {
    const [name, studentId] = line.split(/\s+/);
    if (!name || !studentId) {
      return;
    }
    validCount++;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check_' + index;
    checkbox.onchange = () => toggleChecked(listItem);

    const label = document.createElement('label');
    label.htmlFor = 'check_' + index;
    label.textContent = `${name} (${studentId})`;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    checklist.appendChild(listItem);
  });

  totalCount.textContent = `총 인원 수 : ${validCount}`;
}

function toggleChecked(listItem) {
  listItem.classList.toggle('checked');
}
