/* mistakes:
    ☼ code is too procedural
    ☼ untrue button definitions ex.: File is stored in the db when you 
    click "choose file" and a file has been chosen, not when you click 
    the button "Store file"
    ☼ "renderAll" function too long
    ☼ there are repeating initilizations of variables, mostly of html 
    elements like "document.getElementById.."
    ☼ maybe 
*/

/* takeaways:
    ☼ promises can solve alot of bugs
*/

/* toDo:
    ☼ modify the backend so that after executing the put request 
    the id stays the same
    ☼ fix importing so when importing a csv file it renders the contents in order
*/

// function readFile() {
//   let resArr = [];
//   let newFileReader = new FileReader();
//   newFileReader.readAsBinaryString(inputBtn.files[0])
//   newFileReader.onload = () => {
//     let csvLines = (newFileReader.result).split("\n");
//     csvLines.forEach((arr) => {
//       resArr.push(arr.split(","))
//     })
//     resArr.forEach((arrLine) => {
//       postCsv(arrLine[0], arrLine[1], arrLine[2])
//     })
//   }
// }

// function postCsv(name, email, phoneNum) {
//   // console.log(name + "postCsv");
//   let obj1 = new ContentObj(name, email, phoneNum);
//   obj1.postRequest();
    
// }

// class ContentObj {
//   constructor(name, email, phoneNum) {
//     this.name = name;
//     this.email = email;
//     this.phoneNum = phoneNum;
//     this.res;
//   }

//   postRequest() {
//     console.log(this.name + " postRequest");
//     setTimeout(() => {
//       fetch('http://localhost:8080/api/independent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: this.name,
//           email: this.email,
//           phoneNum: this.phoneNum
//         })
//       }).then(res => {
//         return res.json();
//       })
//     //  .then(data => console.log(data))
//     //  .catch(error => console.log(error))
//     }, 300)
//  }
// }





// function delRequest(id) {
//   fetch("http://localhost:8080/api/independent/delete/" + id, {
//     method: "DELETE"
//   }).then(() => renderAll());
// }

// function delAll() {
//   fetch('http://localhost:8080/api/independent')
//   .then(res => res.json())
//   .then(contentsArr => {
//     if (contentsArr.length == 0) {
//       renderAll();
//       return;
//     }
//     contentsArr.forEach((obj) => {
//       delRequest(obj.id);
//     })
//   })
// }



// function renderAll() {
//   let mainContentDiv = document.getElementById("mainContentDiv");
//   let inputBtn = document.getElementById("inputBtn");
//   inputBtn.value = "";

//   fetch('http://localhost:8080/api/independent')
//   .then(res => res.json())
//   .then(contentsArr => {
//     if (contentsArr.length == 0) {
//       mainContentDiv.innerHTML = "";
//       mainContentDiv.style.opacity = 0;
//       return;
//     }
//   mainContentDiv.innerHTML = "";
//   contentsArr.forEach((item) => {
//     mainContentDiv.style.opacity = 1;
//     let addedContentDiv = document.createElement("div");
//     addedContentDiv.className = "addedContentDiv";
//     addedContentDiv.id = "addedContentDiv";
//     for (let key in item) {
//       if (key == "id") {
//         let singleDelBtn = document.createElement("button");
//         singleDelBtn.className = "singleDelBtn";
//         singleDelBtn.id = "singleDelBtn";
//         singleDelBtn.innerHTML = "&#10005";
//         singleDelBtn.addEventListener(("click"), () => {
//           delRequest(item[key]);
//         })
//         addedContentDiv.appendChild(singleDelBtn);
//         continue;
//       }
//       if (key == "dateCreated") {
//         let columnItem = document.createElement("div");
//         columnItem.id = "columnItem";
//         columnItem.className = "columnItem"
//         columnItem.innerHTML = (item[key]).substr(0,19) + (item[key]).substr(100);
//         columnItem.innerHTML = item[key];
//         addedContentDiv.appendChild(columnItem);
//         continue;
//       }
//       let columnItem = document.createElement("div");
//       columnItem.id = "columnItem";
//       columnItem.className = "columnItem"
//       columnItem.innerHTML = item[key];
//       addedContentDiv.appendChild(columnItem);
//       mainContentDiv.append(addedContentDiv);
//     }
//   })
// })
// }


// // on launch
// document.addEventListener('DOMContentLoaded', function() {
//   renderAll();
//   let storeFileBtn = document.getElementById("storeFileBtn");
//   storeFileBtn.addEventListener(("click"), (event) => {
//     event.stopPropagation();
//     renderAll();
//   })
//   let inputBtn = document.getElementById("inputBtn");
//   inputBtn.addEventListener("change", readFile);
//   let delBtn = document.getElementById("delBtn");
//   delBtn.addEventListener(("click"), (event) => {
//     event.stopPropagation();
//     delAll();
// })
// }, false);





// function readFile() {
//   let resArr = [];
//   let newFileReader = new FileReader();
//   newFileReader.readAsBinaryString(inputBtn.files[0])
//   newFileReader.onload = () => {
//     let csvLines = (newFileReader.result).split("\n");
//     csvLines.forEach((arr) => {
//       resArr.push(arr.split(","))
//     })
//     resArr.forEach((arrLine) => {
//       postCsv(arrLine[0], arrLine[1], arrLine[2])
//     })
//   }
// }



// class ContentObj {
//   constructor(name, email, phoneNum) {
//     this.name = name;
//     this.email = email;
//     this.phoneNum = phoneNum;
//     this.res;
//   }

//   postRequest() {
//     const formData = new FormData();
//     formData.append("file", file);
//     fetch('http://localhost:8080/api/independent/upload', {
//       method: 'POST',
//       body: formData
//     }).then(res => {
//       return res.json();
//     });
//  }
// }

// function postCsv(name, email, phoneNum) {
//   let obj1 = new ContentObj(name, email, phoneNum);
//   obj1.postRequest();
    
// }


function postRequest() {
  const formData = new FormData();
  formData.append("file", "filfe");
  fetch('http://localhost:8080/api/independent/upload', {
    method: 'POST',
    body: formData
  })
}

postRequest();
