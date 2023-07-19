function addItem() {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
  
    if (inputValue === '') {
      return;
    }
  
    const listItem = document.createElement('li');
    listItem.innerHTML = inputValue;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'ลบ';
    deleteButton.onclick = function () {
      listItem.remove();
    };
  
    listItem.appendChild(deleteButton);
  
    document.getElementById('list').appendChild(listItem);
  
    inputField.value = '';
  }