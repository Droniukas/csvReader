import { renderAll } from "./js/render.js";
import { postRequestCsv, delAllRequest } from "./js/serverRequests.js";
// import { displayRowsAddedPopUp } from "./js/popUps.js";

// ONLOAD
document.addEventListener(
  "DOMContentLoaded",
  function () {
    renderAll();
    let storeFileBtn = document.getElementById("storeFileBtn");
    storeFileBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      await postRequestCsv();
      // displayRowsAddedPopUp();
      renderAll();
    });
    let delBtn = document.getElementById("delBtn");
    delBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      delAllRequest();
    });
  },
  false
);
