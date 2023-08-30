//תקציר 
// תמונות בלוח המתחלף: הקובץ יוצר עבור לוח מתחלף שבו תמונות משתנות על פי זמן. התמונות משמורות בלוקאל סטוראג' באמצעות LocalStorage ומשתנות משנייה לשנייה באמצעות setInterval.

// עריכת הלוח המתחלף: פותחת חלון עריכה להוספת תמונות ללוח המתחלף, כאשר התמונות משמרות גם בלוקאל סטוראג' ומתעדכנות בלוח.

// פתיחת קבצי PDF: מתנווט לדף עם קובץ PDF בלחיצה על אלמנט מסוים.

// ניווט לכיתות: מתנווט לדפים שונים בהתאם לכיתה שנבחרה.

// פתיחת כיתות בהתאם לתלמידה: מתנווט לדפים שונים בהתאם לתלמידה שנכנסה.

// כניסת צוות ומנהלת: מציין אילו אלמנטים יוצגו בהתאם להרשאות של המשתמש.

// שינוי המודעות על ידי המנהלת: מאפשר שינוי תמונות המודעות בעמוד באמצעות חלון נפרד.

// בקצרה, הקובץ מבצע מגוון פעולות ופונקציות באתר, כולל שמירת מידע בלוקאל סטוראג' וניווט בין דפים באמצעות קוד JavaScript.



let imgesArr = [

];


const BordImg1 = localStorage.getItem("bordImg");
const BordImgFJ1 = JSON.parse(BordImg1);
if (BordImgFJ1 !== null) {
let imgi = document.getElementById("img");
let currentImageIndex = 0;
const imgElement = document.createElement("img");
imgElement.src = BordImgFJ1[currentImageIndex];
imgi.appendChild(imgElement);
imgElement.style.width = "600px";
imgElement.style.height = "200px";

setInterval(() => {
  const imgElement = document.createElement("img");
  imgElement.src = imgesArr[currentImageIndex];
  imgElement.style.width = "600px";
  imgElement.style.height = "200px";
  imgi.innerHTML = "";
  imgi.appendChild(imgElement);
  currentImageIndex = (currentImageIndex + 1) % imgesArr.length;
}, 2000);

}

// פונקציית עריכת הלוח המתחלף 
const Bord = document.getElementById("AB1-Bord")
Bord.addEventListener("click",BordDzined )

function BordDzined (){
  // העיצוב 
const bordDiv = document.createElement("div")
const chengBordH1 = document.createElement("h1")
const BordForm = document.createElement("form")
const BordInput = document.createElement("input")
const buttonCenge = document.createElement("button");
const closeButton = document.createElement("button")
document.body.appendChild(bordDiv)
bordDiv.appendChild(chengBordH1)
bordDiv.appendChild(BordForm)
BordForm.appendChild(BordInput)
BordForm.appendChild(buttonCenge)
BordForm.appendChild(closeButton)
chengBordH1.innerHTML = " הכניסי תמונות ללוח המתחלף"
bordDiv.classList.add("dezined-control-2")
buttonCenge.innerHTML = "לשנות"
buttonCenge.style.backgroundColor = "#007bff";
buttonCenge.style.color = "white";
buttonCenge.style.border = "none";
buttonCenge.style.height = "50px";
buttonCenge.style.padding = "15px 30px";
buttonCenge.style.borderRadius = "5px";
buttonCenge.style.cursor = "pointer";
buttonCenge.style.transition = "background-color 0.3s";
buttonCenge.addEventListener("mouseenter", function () {
  buttonCenge.style.backgroundColor = "#0056b3";
});
buttonCenge.addEventListener("mouseleave", function () {
  buttonCenge.style.backgroundColor = "#007bff";
});

// פעולת הפונקצייה
    
    function saveImagesToLocalStorage(imagesArray) {
      localStorage.setItem("bordImg", JSON.stringify(imagesArray));
    }
    
    buttonCenge.addEventListener("click", function (e) {
      if (BordInput.value !== null ) {
        e.preventDefault();
          imgesArr.push(BordInput.value);
        saveImagesToLocalStorage(imgesArr); 
        BordInput.value = "";
      }
 
    });
    

// סגרת הדיב 

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
  bordDiv.remove();
}
};

window.addEventListener("load", function () {
  const BordImg = localStorage.getItem("bordImg");
  const BordImgFJ = JSON.parse(BordImg);
  if (BordImgFJ !== null) {
  if (BordImgFJ && BordImgFJ.length > 10) {
    imgesArr = BordImgFJ.slice(-10);
  } else {
    imgesArr = BordImgFJ ;
  }
}
  console.log(imgesArr);
})


// עיתון בית הספר


let book = document.getElementById("book");
book.addEventListener("click", () => {
window.location.assign("../img/עיתון אייר סיון.pdf")
});



// ניתוב לכיתות
const moveTo = document.querySelectorAll(".classes");
for (const key of moveTo) {
  key.addEventListener("click", () => {
    switch (key.id) {
      case "z":
        window.location.href = "./classes/studentZ.html";
        break;
      case "ch":
        window.location.href = "./classes/studentCH.html";
        break;
      case "t":
        window.location.href = "./classes/studentT.html";
        break;
      case "y":
        window.location.href = "./classes/studentY.html";
        break;
      case "ya":
        window.location.href = "./classes/studentYA.html";
        break;
      case "yb":
        window.location.href = "./classes/studentYB.html";
        break;
    }
  });
}



// פתיחת הכיתות לפי התלמידה שנכנסה


let getStudent = localStorage.getItem("studentEnter");
// localStorage.removeItem("studentEnter");
let reskey = JSON.parse(getStudent);
if (getStudent !== null) {
console.log(reskey.key);
for (const key of moveTo) {
if (reskey.key === key.id) {
  key.classList.remove("disable");
}
}
}
else 
console.log(reskey);


// כניסת צוות 


const adminEnterjson = localStorage.getItem("entry")
const adminEnter =  JSON.parse(adminEnterjson)
console.log(adminEnter);

if (adminEnter !== null) {
for (const key of moveTo) {
if (adminEnter.key === "administer") {
    key.classList.remove("disable");
  }
 else if (adminEnter.key === key.id) {
  key.classList.remove("disable");
 }
}
}

// כניסת מנהלת
if ( (adminEnter === null) || adminEnter.key !== "administer") {
  let buttons = document.querySelectorAll(".admin-control");
  for (const key of buttons) {
    key.style.display = "none";
  }
}


// פונקציית שינוי המודעות על ידי  המנהלת

const Ads = document.getElementById("AB2-Ads")
Ads.addEventListener("click",ChengAds)

function ChengAds(e){
  const chengDiv = document.createElement("div")
  const chengDivH1 = document.createElement("h1")
  const AdsCheng = document.createElement("form")
  const AdsElement1  = document.createElement("input")
  const AdsElement2  = document.createElement("input")
  const AdsElement3  = document.createElement("input")
  const AdsElement4  = document.createElement("input")
  const AdsElement5  = document.createElement("input")
  const AdsElement6  = document.createElement("input")
  const AdsElement7  = document.createElement("input")
  const AdsElement8  = document.createElement("input")
  const AdsElement9  = document.createElement("input")
  const button = document.createElement("button");
  const closeButton = document.createElement("button")

  document.body.appendChild(chengDiv)
  chengDiv.appendChild(chengDivH1)
  chengDiv.appendChild(AdsCheng)
  AdsCheng.appendChild(AdsElement1)
  AdsCheng.appendChild(AdsElement2)
  AdsCheng.appendChild(AdsElement3)
  AdsCheng.appendChild(AdsElement4)
  AdsCheng.appendChild(AdsElement5)
  AdsCheng.appendChild(AdsElement6)
  AdsCheng.appendChild(AdsElement7)
  AdsCheng.appendChild(AdsElement8)
  AdsCheng.appendChild(AdsElement9)
  AdsCheng.appendChild(button);
  AdsCheng.appendChild(closeButton)

chengDivH1.innerHTML = "שני את הפירסומים "

chengDiv.classList.add("dezined-control")
AdsCheng.classList.add("dezined-controlSon")

for (const input of AdsCheng) {
  input.style.lineHeight = "25px";
  input.placeholder = "מודעה";
  input.dir = "rtl";
  input.type = "text";
}

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

    let ADS1 = document.getElementById("ads1"); 
    let ADS2 = document.getElementById("ads2");  
    let ADS3 = document.getElementById("ads3");  
    let ADS4 = document.getElementById("ads4"); 
    let ADS5 = document.getElementById("ads5"); 
    let ADS6 = document.getElementById("ads6"); 
    let ADS7 = document.getElementById("ads7"); 
    let ADS8 = document.getElementById("ads8"); 
    let ADS9 = document.getElementById("ads9");

    const storedAdsUrls = localStorage.getItem("ads");
    const storedUrls = JSON.parse(storedAdsUrls) || {};

    if (AdsElement1.value) {
      storedUrls.adsElement1 = AdsElement1.value;
      ADS1.style.backgroundImage = `url('${AdsElement1.value}')`
    }
    if (AdsElement2.value) {
      storedUrls.adsElement2 = AdsElement2.value;
      ADS2.style.backgroundImage = `url('${AdsElement2.value}')`
    }
    if (AdsElement3.value) {
      storedUrls.adsElement3 = AdsElement3.value;
      ADS3.style.backgroundImage = `url('${AdsElement3.value}')`
    }
    if (AdsElement4.value) {
      storedUrls.adsElement4 = AdsElement4.value;
      ADS4.style.backgroundImage = `url('${AdsElement4.value}')`
    }
    if (AdsElement5.value) {
      storedUrls.adsElement5 = AdsElement5.value;
      ADS5.style.backgroundImage = `url('${AdsElement5.value}')`
    }
    if (AdsElement6.value) {
      storedUrls.adsElement6 = AdsElement6.value;
      ADS6.style.backgroundImage = `url('${AdsElement6.value}')`
    }
    if (AdsElement7.value) {
      storedUrls.adsElement7 = AdsElement7.value;
      ADS7.style.backgroundImage = `url('${AdsElement7.value}')`
    }
    if (AdsElement8.value) {
      storedUrls.adsElement8 = AdsElement8.value;
      ADS8.style.backgroundImage = `url('${AdsElement8.value}')`
    }
    if (AdsElement9.value) {
      storedUrls.adsElement9 = AdsElement9.value;
      ADS9.style.backgroundImage = `url('${AdsElement9.value}')`
    }

    localStorage.setItem("ads", JSON.stringify(storedUrls));
    AdsElement1.value = "";
    AdsElement2.value = "";
    AdsElement3.value = "";
    AdsElement4.value = "";
    AdsElement5.value = "";
    AdsElement6.value = "";
    AdsElement7.value = "";
    AdsElement8.value = "";
    AdsElement9.value = "";

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
};
window.addEventListener("load", function () {
  const storedImageUrls = localStorage.getItem("ads");
  if (storedImageUrls) {
    const imageUrls = JSON.parse(storedImageUrls);
    let ADS1 = document.getElementById("ads1"); 
    let ADS2 = document.getElementById("ads2");  
    let ADS3 = document.getElementById("ads3");  
    let ADS4 = document.getElementById("ads4"); 
    let ADS5 = document.getElementById("ads5"); 
    let ADS6 = document.getElementById("ads6"); 
    let ADS7 = document.getElementById("ads7"); 
    let ADS8 = document.getElementById("ads8"); 
    let ADS9 = document.getElementById("ads9"); 
 
    ADS1.style.backgroundImage = `url('${imageUrls.adsElement1}')` ;
    ADS2.style.backgroundImage =  `url('${imageUrls.adsElement2}')` ;
    ADS3.style.backgroundImage =  `url('${imageUrls.adsElement3}')` ;
    ADS4.style.backgroundImage =   `url('${imageUrls.adsElement4}')` ;
    ADS5.style.backgroundImage =   `url('${imageUrls.adsElement5}')` ;
    ADS6.style.backgroundImage =   `url('${imageUrls.adsElement6}')` ;
    ADS7.style.backgroundImage =   `url('${imageUrls.adsElement7}')` ;
    ADS8.style.backgroundImage =   `url('${imageUrls.adsElement8}')` ;
    ADS9.style.backgroundImage =   `url('${imageUrls.adsElement9}')` ;
  }
});







