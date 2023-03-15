import { delRequest } from "./serverRequests.js";
import { createTextArea } from "./editValues.js";

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

  fetch("http://localhost:8080/api/independent")
    .then((res) => res.json())
    .then((contentsArr) => {
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

        let dateCreated = createDataCell(
          item.dateCreated,
          "dateCreated",
          false
        );
        row.appendChild(dateCreated);

        mainContentDiv.appendChild(row);
      });
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
