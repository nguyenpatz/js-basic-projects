const form = document.querySelector(".form");
const input = document.querySelector("#input");
const btnSubmit = document.querySelector("#submit");
const list = document.querySelector(".list");
const myStatus = document.querySelector(".status");
form.addEventListener("submit", addItem);


function addItem(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  if(input.value !== "") {

    // create li
    const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.setAttribute("data-id", id);
    li.innerHTML = `
        <p class="item-content">${input.value}</p>
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
    displayAlert(btnSubmit.textContent);
    input.value= "";

    const btnDelete = li.querySelector(".btn-delete");
    btnDelete.addEventListener("click", deleteItem);
  }

}

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

  setTimeout(function() {
    myStatus.classList.remove(myClass);
    myStatus.firstElementChild.textContent = "";
  }, 1000);
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const idElement = element.dataset.id;
  displayAlert("delete");
  list.removeChild(element);
  input.value= "";
}