import { delRequest } from "./serverRequests.js";
import { createTextArea } from "./editValues.js";

var values = [
  {
    id: 1,
    name: "domas",
    email: "fdfd",
    phoneNum: "fsdfsd",
    dateCreated: "2023-03-12 17:59:26.74447",
  },
  {
    id: 2,
    name: "fsdfsd",
    email: "fdfsd",
    phoneNum: "fdfd",
    dateCreated: "2023-03-12 17:59:26.824217",
  },
  {
    id: 3,
    name: "fsdfsd",
    email: "fdfsd",
    phoneNum: "fdfd",
    dateCreated: "2023-03-12 17:59:26.827181",
  },
  {
    id: 4,
    name: "fsdfsd",
    email: "fdfsd",
    phoneNum: "fdfd",
    dateCreated: "2023-03-12 17:59:26.829182",
  },
  {
    id: 5,
    name: "fsdfsd",
    email: "fdfsd",
    phoneNum: "fdfd",
    dateCreated: "2023-03-12 17:59:26.832182",
  },
  {
    id: 6,
    name: "domasdomasdomasdomasdomas",
    email: "fdfd@gmail.com",
    phoneNum: "1234",
    dateCreated: "2023-03-12 17:59:26.851166",
  },
  {
    id: 7,
    name: "petras",
    email: "fdfd@gmail.com",
    phoneNum: "1234",
    dateCreated: "2023-03-12 17:59:26.855167",
  },
  {
    id: 8,
    name: "kelmis",
    email: "fdfd@gmail.com",
    phoneNum: "1234",
    dateCreated: "2023-03-12 17:59:26.858168",
  },
  {
    id: 9,
    name: "vritis",
    email: "fdfd@gmail.com",
    phoneNum: "1234",
    dateCreated: "2023-03-12 17:59:26.861168",
  },
  {
    id: 10,
    name: "joze",
    email: "fdfd@gmail.com",
    phoneNum: "1234",
    dateCreated: "2023-03-12 17:59:26.865168",
  },
];

function createDataCell(cellText, key, hasEditButton = false) {
  let columnItem = document.createElement("div");
  // columnItem.id = "columnItem" + key;
  columnItem.className = "columnItem";

  let text = document.createElement("div");
  // text.id = "text" + key;
  text.className = "text";
  text.innerHTML = cellText;
  columnItem.appendChild(text);

  if (hasEditButton) {
    let editBtn = document.createElement("button");
    editBtn.className = "edit";
    // editBtn.id = "edit" + key;
    editBtn.innerHTML = "&#xE104;";

    editBtn.addEventListener("click", () => {
      createTextArea(columnItem, item, key);
    });
    columnItem.appendChild(editBtn);
  }

  return columnItem;
}

export function renderAll() {
  let mainContentDiv = document.getElementById("mainContentDiv");
  let inputBtn = document.getElementById("inputBtn");
  inputBtn.value = "";

  // fetch("http://localhost:8080/api/independent")
  // .then((res) => res.json())
  // .then((contentsArr) => {
  let contentsArr = values;
  if (contentsArr.length == 0) {
    mainContentDiv.innerHTML = "";
    mainContentDiv.style.opacity = 0;
    return;
  }
  mainContentDiv.innerHTML = "";
  contentsArr.forEach((item) => {
    mainContentDiv.style.opacity = 1;
    let row = document.createElement("div");
    row.className = "addedContentDiv";

    let singleDelBtn = createDeleteButton(item);
    row.appendChild(singleDelBtn);

    let name = createDataCell(item.name, "name", true);
    row.appendChild(name);

    let email = createDataCell(item.email, "email", true);
    row.appendChild(email);

    let phoneNum = createDataCell(item.phoneNum, "phoneNum", true);
    row.appendChild(phoneNum);

    let dateCreated = createDataCell(item.dateCreated, "dateCreated", false);
    row.appendChild(dateCreated);

    mainContentDiv.appendChild(row);
  });
}
function createDeleteButton(item) {
  let singleDelBtn = document.createElement("button");
  singleDelBtn.className = "singleDelBtn";
  singleDelBtn.innerHTML = "&#10005";
  singleDelBtn.addEventListener("click", () => {
    delRequest(item.id);
  });
  return singleDelBtn;
}
