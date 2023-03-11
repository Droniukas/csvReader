import { delRequest } from "./serverRequests.js";
import { createTextArea } from "./editValues.js";

export function renderAll() {
  let mainContentDiv = document.getElementById("mainContentDiv");
  let inputBtn = document.getElementById("inputBtn");
  inputBtn.value = "";

  fetch('http://localhost:8080/api/independent')
  .then(res => res.json())
  .then(contentsArr => {
    if (contentsArr.length == 0) {
      mainContentDiv.innerHTML = "";
      mainContentDiv.style.opacity = 0;
      return;
    }
  mainContentDiv.innerHTML = "";
  contentsArr.forEach((item) => {
    mainContentDiv.style.opacity = 1;
    let addedContentDiv = document.createElement("div");
    addedContentDiv.className = "addedContentDiv";
    addedContentDiv.id = "addedContentDiv";
    for (let key in item) {
      if (key == "id") {
        let singleDelBtn = document.createElement("button");
        singleDelBtn.className = "singleDelBtn";
        singleDelBtn.id = "singleDelBtn";
        singleDelBtn.innerHTML = "&#10005";
        singleDelBtn.addEventListener(("click"), () => {
          delRequest(item[key]);
        })
        addedContentDiv.appendChild(singleDelBtn);
        continue;
      }
      if (key == "dateCreated") {
        let columnItem = document.createElement("div");
        columnItem.id = "columnItem" + key;
        columnItem.className = "columnItem" + key;
        columnItem.innerHTML = (item[key]).substr(0,19) + (item[key]).substr(100);
        addedContentDiv.appendChild(columnItem);
        continue;
      }
      let columnItem = document.createElement("div");
      columnItem.id = "columnItem" + key;
      columnItem.className = "columnItem" + key;

      let text = document.createElement("div");
      text.id = "text" + key;
      text.className = "text" + key;
      text.innerHTML = item[key];
      columnItem.appendChild(text);

      let editBtn = document.createElement("button");
      editBtn.className = "edit" + key;
      editBtn.id = "edit" + key;
      editBtn.innerHTML = "&#xE104;";
      editBtn.addEventListener("click", () => {
        createTextArea(columnItem, item, key);
      })
      columnItem.appendChild(editBtn);

      addedContentDiv.appendChild(columnItem);
      mainContentDiv.append(addedContentDiv);
    }
  })
})
}
