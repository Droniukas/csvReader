import { renderAll } from "./render.js";

export function delRequest(id) {
  fetch("http://localhost:8080/api/independent/delete/" + id, {
    method: "DELETE"
  }).then(() => renderAll());
}

export function delAllRequest() {
  fetch("http://localhost:8080/api/independent/deleteAll", {
    method: "DELETE"
  }).then(() => renderAll())
}

export async function postRequestCsv() {
  let inputBtn = document.getElementById("inputBtn");

  for (let file of inputBtn.files) {
    let formData = new FormData();
    formData.append("file", file);
    await fetch('http://localhost:8080/api/independent/uploadFile', {
      method: 'POST',
      body: formData
    })
  }
  // const reader = new FileReader();
  // reader.addEventListener("onload", function (e) {
  //   let text = e.target.result;
  //   console.log(text.split("\n").length);  
  // });
  // reader.readAsText(inputBtn.files[0]);
};

