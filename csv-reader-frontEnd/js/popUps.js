export function savePopUp() {
  let popup = document.getElementById("savePopUp");
  popup.style.right = "-30px";
  setTimeout(() => {
    popup.style.right = "-200px";
  }, 1000)
}

export function discardPopUp() {
  let popup = document.getElementById("discardPopUp");
  popup.style.right = "-30px";
  setTimeout(() => {
    popup.style.right = "-200px";
  }, 1000)
}

// export async function displayRowsAddedPopUp() {

//   let inputBtn = document.getElementById("inputBtn");

//   if (inputBtn.files.length != 0) {
//     let count = 0;
//     await fetch('http://localhost:8080/api/independent')
//     .then(res => res.json())
//     .then(contentsArr => {
//       contentsArr.forEach(() => {
//         count += 1;
//       })
//     })
//     showPopUp(count);
//   }
// }

// function showPopUp(count) {
//   let popup = document.getElementById("storeFilePopUp");
//   popup.innerHTML = `<b>${count}</b> rows succesfully uploaded!`;
//   popup.style.left = "100px";
//   setTimeout(() => {
//     popup.style.left = "-200px";
//   }, 5000)  
// }
