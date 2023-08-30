const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
console.log("inputBox:", inputBox);
console.log("listContainer: ", listContainer);

function addTask () {
  if (inputBox.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "you must right something",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    console.log("li: ", li);
    console.log("span: ", span);
  }

  inputBox.value = "";
  saveData()
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData()

    } 
    
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData()
    }
  },

  false
);

let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

let showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()

