const form = document.querySelector(".form");
const input = document.querySelector("#input");
const btnSubmit = document.querySelector("#submit");
const btnClear = document.querySelector(".btn-clear");
const list = document.querySelector(".list");
const myStatus = document.querySelector(".status");
// 
let editFlag = "submit";
let editId = "";
// 
// key access local storage
const key = "listData";
form.addEventListener("submit", addItem);
btnClear.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupDataLocalStorage);

// adds an item
function addItem(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  if (input.value !== "" && editFlag == "submit") {
    // create li
    // const li = document.createElement("li");
    // li.setAttribute("class", "list-item");
    // li.setAttribute("data-id", id);
    // li.innerHTML = `
    //     <p class="item-content">${input.value}</p>
    //     <div class="btn-container">
    //         <button class="btn btn-edit">
    //             <i class="fa-regular fa-pen-to-square"></i>
    //         </button>
    //         <button class="btn btn-delete">
    //             <i class="fa-solid fa-delete-left"></i>
    //         </button>
    //     </div>
    // `;

    // list.appendChild(li);
    createContent(id, input.value);
    addDataLocalStorage(id, input.value);
    displayAlert(btnSubmit.textContent);
    setDefaultEverything();

    // const btnDelete = li.querySelector(".btn-delete");
    // btnDelete.addEventListener("click", deleteItem);

    // const btnEdit = li.querySelector(".btn-edit");
    // btnEdit.addEventListener("click", getId);
  } else if (input.value !== "" && editFlag == "edit") {
    editItem();
  }
}

// alert status
function displayAlert(content) {
  const submitAlert = "submit";
  const editAlert = "edit";
  const deleteAlert = "delete";
  const clearItems = "clear items";

  let myAlert = "";
  let myClass = "";
  switch (content) {
    case submitAlert:
      myAlert = "The item was added success";
      myClass = "status-1";
      break;
    case editAlert:
      myAlert = "The value was changed";
      myClass = "status-1";
      break;
    case deleteAlert:
      myAlert = "The item was deleted";
      myClass = "status-2";
      break;
    case clearItems:
      myAlert = "The items were deleted";
      myClass = "status-2";
      break;
  }

  myStatus.classList.add(myClass);
  myStatus.firstElementChild.textContent = myAlert;
  setDefaultEverything();
  setTimeout(function () {
    myStatus.classList.remove(myClass);
    myStatus.firstElementChild.textContent = "";
  }, 1000);
}

function setDefaultEverything() {
  input.value = "";
  editFlag = "submit";
  btnSubmit.textContent = "submit";
}

// deletes an item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const idElement = element.dataset.id;
  removeDataLocalStorage(idElement);
  displayAlert("delete");
  list.removeChild(element);
  input.value = "";
}

// gets id of item
function getId(e) {
  btnSubmit.textContent = "edit";
  input.value = e.currentTarget.parentElement.parentElement.textContent
    .toString()
    .trim();
  editFlag = "edit";
  editId = e.currentTarget.parentElement.parentElement.dataset.id;
}

// edit an item
function editItem() {
  const editElement = list.querySelector(`[data-id='${editId}']`);
  editElement.firstElementChild.textContent = input.value;
  editDataLocalStorage(editId, input.value);
  displayAlert("edit");
  setDefaultEverything();
}

//clear items 
function clearItems() {
  const items = document.querySelectorAll(".list-item");
  // console.log(items);
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      displayAlert("clear items");
    });
    clearLocalStorage();
  } 
  setDefaultEverything();
}

// add data into local storage
function addDataLocalStorage(id, value) {
  const data = {
    id, 
    value
  };
  // get existing the data
  let items = getDataLocalStorage();
  items.push(data);
  localStorage.setItem(key, JSON.stringify(items));
}
// gets data from local storage
function getDataLocalStorage() {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}
// removes data from
function removeDataLocalStorage(id) {
  let items = getDataLocalStorage();
  items = items.filter(function(elem) {
    if(elem.id !== id) {
        return elem;
    }
  });
  localStorage.setItem(key, JSON.stringify(items));
}
// modifies data from local storage
function editDataLocalStorage(id, value) {
  let items = getDataLocalStorage();
  items = items.map(function(elem) {
    if(elem.id == id) {
      elem.value = value;
    }
    return elem;
  });

  localStorage.setItem(key, JSON.stringify(items));
}
// clear data local storage
function clearLocalStorage() {
  localStorage.clear();
}
// setups local storage
function setupDataLocalStorage() {
  let items = getDataLocalStorage();
  if(items.length > 0) {
    items.forEach(function(elem) {
      createContent(elem.id, elem.value);
    })
  }
}
// create element li
function createContent(id, value) {
  const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.setAttribute("data-id", id);
    li.innerHTML = `
        <p class="item-content">${value}</p>
        <div class="btn-container">
            <button class="btn btn-edit">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="btn btn-delete">
                <i class="fa-solid fa-delete-left"></i>
            </button>
        </div>
    `;

    list.appendChild(li);
    const btnDelete = li.querySelector(".btn-delete");
    btnDelete.addEventListener("click", deleteItem);

    const btnEdit = li.querySelector(".btn-edit");
    btnEdit.addEventListener("click", getId);
}