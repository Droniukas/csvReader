import { renderAll } from "./render.js";
import { savePopUp, discardPopUp } from "./popUps.js";

export function createTextArea(div, item, key) {

  let textarea = document.createElement("textarea");
  textarea.innerHTML = item[key];
  div.innerHTML = "";
  textarea.rows = "2";
  textarea.style = "height:1em;";
  textarea.id = "textarea";
  textarea.className = "textarea";

  function getBodyJson() {
    let bodyJson;
    if(key == "name") {
      bodyJson =
      JSON.stringify({
        name: textarea.value
      });
    }
  
    if(key == "email") {
      bodyJson =
      JSON.stringify({
        email: textarea.value
      });
    }
  
    if (key == "phoneNum") {
      bodyJson =
      JSON.stringify({
        phoneNum: textarea.value
      });
    }
    return bodyJson;
  }

  let saveBtn = document.createElement("button");
  saveBtn.id = "saveText" + key;
  saveBtn.className = "saveText" + key;
  saveBtn.innerHTML = "&#xE10B;";
  saveBtn.addEventListener("click", handleTextareaSave);
  
  let discardBtn = document.createElement("button");
  discardBtn.id = "discardText" + key;
  discardBtn.className = "discardText" + key;
  discardBtn.innerHTML = "&#xE10A;";
  discardBtn.addEventListener("click", handleTextareaDiscard);

  div.appendChild(discardBtn);
  div.appendChild(saveBtn);
  div.appendChild(textarea);
  initTextareaResize();

  async function handleTextareaSave() {
    areaListener.abort();
    await fetch("http://localhost:8080/api/independent/edit/" + item["id"], {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: getBodyJson()
    });
    renderAll();
    savePopUp();
  }

  let areaListener = new AbortController();

  document.addEventListener("click", (e) => {
    bodyEventListenerFunc(e)
  }, { signal: areaListener.signal });
  let counter = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      handleTextareaDiscard();
    }
    if (e.key == "Enter") {
      e.preventDefault();
      handleTextareaSave();
    }
  }, { signal: areaListener.signal })

  function bodyEventListenerFunc(event) {
    if (event.target != div && event.target != textarea) {
      counter += 1;
      if (counter == 2) {
        handleTextareaSave();
      }
    }
  }

  function handleTextareaDiscard() {
    areaListener.abort();
    renderAll();
    discardPopUp();
  }
}



// TEXTAREA AUTORESIZE
let observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

function initTextareaResize() {
  let text = document.getElementById('textarea');
  if (text == null) return;
  function resize () {
      text.style.height = 'auto';
      text.style.height = text.scrollHeight+'px';
  }
  
  function delayedResize () {
      window.setTimeout(resize, 0);
  }
  observe(text, 'change',  resize);
  observe(text, 'cut',     delayedResize);
  observe(text, 'paste',   delayedResize);
  observe(text, 'drop',    delayedResize);
  observe(text, 'keydown', delayedResize);

  text.focus();
  text.select();
  resize();
}