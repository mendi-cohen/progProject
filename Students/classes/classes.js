// תקציר הקובץ: 
// בקצרה, הקובץ מתמקד במגוון אפשרויות שונות,
//  כולל מערכת עריכה למורים, יכולות שימור והצגת תמונות בקוביות, תכנון של שיחת צ'אט עם שמירת הודעות, ועוד.

//כניסת צוות 
let admin = false;
let enterteam = localStorage.getItem("entry") 
let enterteamjson = JSON.parse(enterteam)
if (enterteamjson !== null) {
if (enterteamjson.key !== null && enterteamjson.key !== "administer") {
 admin = true;
}
console.log(enterteamjson);

// לא נותן למנהל לכתוב בצ'אט
if (enterteamjson.key === "administer") {
  let closeInput1 = document.getElementById("myInput");
  let closeInput2 = document.getElementById("sendbutton");
  closeInput1.classList.add("disable");
  closeInput2.classList.add("disable");
}
}
localStorage.cl

// עריכת הקובייה 

function shiftCube(id, frontId, backId, rightId, leftId) {
  const shiftTheCube = document.getElementById(id);
  

  if (shiftTheCube) {
    shiftTheCube.addEventListener("click", function () {

  const chengDiv = document.createElement("div")
  const chengDivH1 = document.createElement("h1")
  const formCheng = document.createElement("form")
  const front  = document.createElement("input")
  const back = document.createElement("input")
  const right = document.createElement("input")
  const left = document.createElement("input")
  const button = document.createElement("button");
  const closeButton = document.createElement("button")

  document.body.appendChild(chengDiv)
  chengDiv.appendChild(chengDivH1)
  chengDiv.appendChild(formCheng)
  formCheng.appendChild(front)
  formCheng.appendChild(back)
  formCheng.appendChild(right)
  formCheng.appendChild(left)
  formCheng.appendChild(button);
  formCheng.appendChild(closeButton)

chengDivH1.innerHTML = "שני את הקוביה"

chengDiv.style.cssText = `
position: absolute;
left: 40%;
top: 50%;
width: 400px;
height: 350px;
background-color: white;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding: 20px;
text-align: center;
align-items: center;
`;

formCheng.style.cssText = `
display: flex;
align-items: center;
flex-direction: column;
`;
for (const side of formCheng) {
  side.type = "text";
  side.style.cssText = `
  height: 30px;
  `;
}
front.placeholder = "צג 1";
back.placeholder = "צג 2";
right.placeholder = "צג 3";
left.placeholder = "צג 4";



// מאשר ושומר את השינוי

button.innerHTML = "לשנות"
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.height = "50px";
button.style.padding = "15px 30px";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.transition = "background-color 0.3s";
button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = "#0056b3";
});

button.addEventListener("mouseleave", function () {
  button.style.backgroundColor = "#007bff";
});

button.addEventListener("click", function (e) {
  e.preventDefault();

  let frontImageURL = document.getElementById(frontId);
  let backImageURL = document.getElementById(backId);
  let rightImageURL = document.getElementById(rightId);
  let leftImageURL = document.getElementById(leftId);

  const storedImageUrls = localStorage.getItem(`cubeImageUrls_${id}`);
  const storedUrls = JSON.parse(storedImageUrls) || {};

  if (front.value.includes("https") && front.value.endsWith(".jpg") || front.value.endsWith(".png")) {
    storedUrls.front = front.value;
    frontImageURL.style.backgroundImage = `url('${front.value}')`;
    
  }
  else 
  frontImageURL.style.backgroundImage = "none"; 
  storedUrls.front = front.value;
  frontImageURL.innerHTML = front.value

  if (back.value) {
    storedUrls.back = back.value;
    backImageURL.style.backgroundImage = `url('${back.value}')`;
  }

  if (right.value) {
    storedUrls.right = right.value;
    rightImageURL.style.backgroundImage = `url('${right.value}')`;
  }

  if (left.value) {
    storedUrls.left = left.value;
    leftImageURL.style.backgroundImage = `url('${left.value}')`;
  }

  localStorage.setItem(`cubeImageUrls_${id}`, JSON.stringify(storedUrls));

  chengDiv.remove();
});




// סוגר הדיב
closeButton.innerHTML = "&#10006;";
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";
closeButton.style.fontSize = "25px";
closeButton.style.backgroundColor = "transparent";
closeButton.style.border = "none";
closeButton.style.color = "black";
closeButton.style.cursor = "pointer";
closeButton.style.outline = "none";

closeButton.addEventListener("click",closed)

function closed(e){
  e.preventDefault();
  chengDiv.remove();

}
})
}
}


const pathPage = window.location.pathname;
if(pathPage.includes("Z")){
shiftCube("shiftCube_Z", "frontImageURL_Z", "backImageURL_Z", "rightImageURL_Z", "leftImageURL_Z");
}
else if (pathPage.includes("CH")){
shiftCube("shiftCube_CH", "frontImageURL_CH", "backImageURL_CH", "rightImageURL_CH", "leftImageURL_CH");
}
else if (pathPage.includes("T")){
shiftCube("shiftCube_T", "frontImageURL_T", "backImageURL_T", "rightImageURL_T", "leftImageURL_T");
}
else if (pathPage.includes("YA")){
shiftCube("shiftCube_YA", "frontImageURL_YA", "backImageURL_YA", "rightImageURL_YA", "leftImageURL_YA");
}
else if (pathPage.includes("YB")){
shiftCube("shiftCube_YB", "frontImageURL_YB", "backImageURL_YB", "rightImageURL_YB", "leftImageURL_YB");
}
else 
shiftCube("shiftCube_Y", "frontImageURL_Y", "backImageURL_Y", "rightImageURL_Y", "leftImageURL_Y");



function loadImage(id,front,back,right,left) {
  const storedImageUrls = localStorage.getItem(`cubeImageUrls_${id}`);
 
  if (storedImageUrls) {
    const imageUrls = JSON.parse(storedImageUrls);
    console.log(imageUrls);

  let frontImageURL = document.getElementById(front)
  let backImageURL = document.getElementById(back)
  let rightImageURL = document.getElementById(right)
  let leftImageURL = document.getElementById(left)

  if (frontImageURL) {
    frontImageURL.style.backgroundImage = `url('${imageUrls.front}')`;
  }
  if (backImageURL) {
    backImageURL.style.backgroundImage = `url('${imageUrls.back}')`;
  }
  if (rightImageURL) {
    rightImageURL.style.backgroundImage = `url('${imageUrls.right}')`;
  }
  if (leftImageURL) {
    leftImageURL.style.backgroundImage = `url('${imageUrls.left}')`;
  }
  }
}

window.addEventListener("load", function () {
  if (pathPage.includes("Z")) {
    loadImage("shiftCube_Z", "frontImageURL_Z", "backImageURL_Z", "rightImageURL_Z", "leftImageURL_Z");
  } else if (pathPage.includes("CH")) {
    loadImage("shiftCube_CH", "frontImageURL_CH", "backImageURL_CH", "rightImageURL_CH", "leftImageURL_CH");
  } else if (pathPage.includes("T")) {
    loadImage("shiftCube_T", "frontImageURL_T", "backImageURL_T", "rightImageURL_T", "leftImageURL_T");
  }
  else if (pathPage.includes("YA")) {
    loadImage("shiftCube_YA", "frontImageURL_YA", "backImageURL_YA", "rightImageURL_YA", "leftImageURL_YA");
  } else if (pathPage.includes("YB")) {
    loadImage("shiftCube_YB", "frontImageURL_YB", "backImageURL_YB", "rightImageURL_YB", "leftImageURL_YB");
  }
  else 
  loadImage("shiftCube_Y", "frontImageURL_Y", "backImageURL_Y", "rightImageURL_Y", "leftImageURL_Y");

});



// עריכת המערכת על ידי המורה בלבד


if (!admin) {
  let adminactive = document.querySelectorAll(".chengTable")
  for (const check of adminactive) { 
    check.style.display = "none";
  }
}


let grid = document.getElementsByClassName("hours");
let chenges = document.getElementById("admin");

chenges.addEventListener("click", function chengGrid(e) {
  for (const iterator of grid) {
    iterator.addEventListener("click", function () {
      iterator.innerHTML = "";
      iterator.contentEditable = true;
    });
  }
});
addEventListener("keydown", function (e) {
  for (const iterator of grid) {
    iterator.innerHTML = iterator.innerText;
  }
});

//loclstorge שמירת השינויים
const currentPage = window.location.pathname; 

const saveButton = document.querySelector("#saveCheng");
saveButton.addEventListener("click", function () {
  const data = [];
  for (const iterator of grid) {
    iterator.contentEditable = false;
    data.push(iterator.innerHTML);
  }
  localStorage.setItem(currentPage, JSON.stringify(data));
});

window.addEventListener("load", function () {
  const getItems = localStorage.getItem(currentPage);
  if (getItems !== null) {
    const getData = JSON.parse(getItems);
    for (let i = 0; i < grid.length; i++) {
      grid[i].textContent = getData[i];
    }
  }
});



//ביטול ריענון הדף כאשר לוחצים על לחצנים בדף
let cencleRefresh = document.getElementsByClassName("mybutton");
for (const key of cencleRefresh) {
  key.addEventListener("click", function (e) {
    e.preventDefault();
  });
}


// הצ'אט!!!!!



// שם משתנה בהתאמה לשיחה בצ'אט
let userName = '';
const storedStudentName = localStorage.getItem("SN");
localStorage.removeItem("SN");
console.log(storedStudentName);
if (storedStudentName !== null) {
 userName = storedStudentName;
}
else 
userName = "המורה"

const input = document.getElementById("myInput");
input.style.display = "inline-block";
input.addEventListener("input", function size() {
  this.style.width = (this.value.length + 1) * 8 + "px";
});




// הפונקציה של הצ'אט
function chet() {
  const footer = document.querySelector("footer");
  const enswer = document.createElement("div");
  footer.appendChild(enswer);
  enswer.innerHTML = `${userName} : ${input.value}`;
  enswer.style.fontSize = "16px";
  enswer.style.padding = "10px";
  enswer.style.border = "1px solid #ccc";
  enswer.style.borderRadius = "5px";
  enswer.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
  enswer.style.backgroundColor = "pink";
  enswer.style.width = "100%";
  enswer.style.textAlign = "start";

  const pathPage1 = window.location.pathname;
  const pageKey = `chatData_${pathPage1}`;
  footer.insertBefore(enswer, footer.firstChild);
  const chetData = JSON.parse(localStorage.getItem(pageKey)) || [];
  chetData.push(`${userName} : ${input.value}  `);
  localStorage.setItem(pageKey, JSON.stringify(chetData));

  document.getElementById("myInput").value = "";
}

// לחצן השליחה והשמירה של הצ'אט וגם שימוש בהנטר
const button = document.querySelector("#sendbutton");
button.addEventListener("click", function () {
  chet();
});

let enter = document.getElementById("myInput");
enter.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    chet();
  }
});

// הבאת הנתונים מלוקל סטורז' בעת טעינת הדף
window.addEventListener("load", function () {
  const pathPage2 = window.location.pathname;
  const pageKey = `chatData_${pathPage2}`;
  const chetData = JSON.parse(localStorage.getItem(pageKey)) || [];

  const footer = document.querySelector("footer");
  for (const message of chetData) {
    const enswer = document.createElement("div");
    enswer.innerHTML = `${message}`;
    enswer.style.fontSize = "16px";
    enswer.style.padding = "10px";
    enswer.style.border = "1px solid #ccc";
    enswer.style.borderRadius = "5px";
    enswer.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
    enswer.style.backgroundColor = "pink";
    enswer.style.width = "100%";
    enswer.style.textAlign = "start";
    
    if (footer.firstChild) {
      footer.insertBefore(enswer, footer.firstChild);
    } else {
      footer.appendChild(enswer);
    }
  }
});

// מחיקת הצ'אט
const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", function () {
  const footer = document.querySelector("footer");
  footer.innerHTML = "";

  const pathPage3 = window.location.pathname;
  const pageKey = `chatData_${pathPage3}`;
  localStorage.removeItem(pageKey);
});
