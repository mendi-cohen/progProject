// תקציר
// הקובץ מכיל מערך ריק בשם "school" ורשימת הרשאות לצוות המורים.

// ישנם פונקציות שמאפשרות לפתוח את הכניסה לאתר לצוות המורים ולהרשמה לבוגרות.

// ישנם מערכי כיתות (classZ, classCH, classT, classY, classYA, classYB) שנמצמצמות ממשתנים שמכילים פרטי תלמידות.

// פונקציה בשם "students" מביאה נתונים משרת חיצוני ומחלקת אותם לכיתות בהתאם לטווחי תעודות זהות.

// פונקציה בשם "conection" מאפשרת לבוגרות להתחבר לאתר על ידי הזנת שם, משפחה, מחזור, תעודת זהות וטלפון, ובודקת האם הפרטים תקינים וקיימים במערך.

// ישנה גם אפשרות להרשמה לבוגרות באמצעות הקליקה על כפתור "הרשמה לבוגרות", שמאפשרת הוספת פרטי בוגרות חדשות למערך.

// ישנה גם אפשרות לכניסת בוגרות רשומות לאתר על ידי הזנת האימייל שלהם ואימות הפרטים בהתאם למערך.

// זהו קובץ מורכב המבצע הרבה פעולות שונות באמצעות קוד JavaScript, ומשמש לבניית אתר לבית ספר עם גישה מוגבלת לצוות המורים וכניסה לבוגרות שמאושרות מראש.


// מערך בית הספר
let school = [];

// רשימת הההרשאות של הצוות
let adminButton = {key:"administer"};
let teacherZ = {key:"z"};
let teacherCH = {key:"ch"};
let teacherT = {key:"t"};
let teacherY = {key:"y"};
let teacherYA = {key:"ya"};
let teacherYB = {key:"yb"};

function openForSchoolTeem(key) {
  localStorage.setItem("entry", JSON.stringify(key));
}
function opengate (){
  let openn = document.querySelectorAll(".disable")
  for (const key of openn) {
    key.classList.remove('disable');
  }
}
// כניסת צוות 
const admin = document.querySelector('#admin');
admin.addEventListener("click", function (e) {
e.preventDefault();
  const resultChek = document.createElement("div");
  document.body.appendChild(resultChek);
  resultChek.innerHTML = " כניסת הנהלה ";
  const closeButton =document.createElement("button");
  resultChek.appendChild(closeButton);
  let passwordareha = document.createElement("form");
  resultChek.appendChild(passwordareha)
  let password = document.createElement("input");
  password.type = "password";
  passwordareha.appendChild(password);
  resultChek.style.cssText = `
    position: absolute;
    left: 40%;
    top: 45%;
    width: 400px;
    height: 150px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    align-items: center;
  `;

  const confirmButton = document.createElement("button");
  confirmButton.style.cssText = `
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    
  `;
  resultChek.appendChild(confirmButton);
  isDivCreated = false;
  confirmButton.innerHTML = "אישור";
  confirmButton.addEventListener("mouseover",()=>{
    confirmButton.style.backgroundColor ="grey";
  })
  confirmButton.addEventListener("mouseleave",()=>{
    confirmButton.style.backgroundColor =" #f0f0f0";
  })
  confirmButton.addEventListener("click", function(e) {
   
  e.preventDefault();
    let chekAdmin = Number (password.value)
    switch (chekAdmin) {
      case 1:
      openForSchoolTeem(adminButton)
       resultChek.remove();
      opengate (); 
      break;
      case 2:
      openForSchoolTeem(teacherZ) 
       resultChek.remove();
      opengate ();
      break;
      case 3:
      openForSchoolTeem(teacherCH)
       resultChek.remove(); 
      opengate ();
      break;
      case 4:
      openForSchoolTeem(teacherT)
       resultChek.remove(); 
      opengate ();
      break;
      case 5:
      openForSchoolTeem(teacherY)
       resultChek.remove(); 
      opengate ();
      break;
      case 6:
      openForSchoolTeem(teacherYA)
       resultChek.remove(); 
      opengate ();
      break;
      case 7:
      openForSchoolTeem(teacherYB)
       resultChek.remove();
      opengate (); 
      break;
      
         default:
          notStudent();   
    }
  });
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
  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    resultChek.remove();
  });
}
);



//מערכי הכיתות

let classZ = [];
let classCH = [];
let classT = [];
let classY = [];
let classYA = [];
let classYB = [];

// הבאת הנתונים של התלמידות וחילוקם לכיתות ולהכניס את הכיתות בצורה *מסודרת* לתוך הבית ספר

const students = async (num1, num2) => {
  const data = await fetch(
    `https://dummyjson.com/users?skip=${num1}&limit=${num2}`
  );
  const expordata = await data.json();
  usedata(expordata.users);
};

 students(0, 100);

function splitstudent(array, student) {
  array.push(student);
}

function usedata(data) {
  for (const key of data) {
    if (key.id > 0 && key.id <= 15) {
      splitstudent(classZ, key);
    } else if (key.id >= 15 && key.id <= 30) {
      splitstudent(classCH, key);
    } else if (key.id >= 30 && key.id <= 45) {
      splitstudent(classT, key);
    } else if (key.id >= 45 && key.id <= 60) {
      splitstudent(classY, key);
    } else if (key.id > 60 && key.id <= 75) {
      splitstudent(classYA, key);
    } else {
      splitstudent(classYB, key);
    }
  }

  school.push(classZ, classCH, classT, classY, classYA, classYB);
}

console.log(school);



// קבלת הנתונים משדות הטקסט גם להתחברות וגם להרשמה

const contect = document.getElementById("contect");
contect.addEventListener("click", conection);

const isClassZ = {key:"z"};
const isClassCH = {key:"ch"};
const isClassT = {key:"t"};
const isClassY = {key:"y"};
const isClassYA = {key:"ya"};
const isClassYB = {key:"yb"};




function conection(e) {
  e.preventDefault();
  let cllog = document.getElementById("cllog").value;
  let fnlog = document.getElementById("fnlog").value;
  let lnlog = document.getElementById("lnlog").value;
  let numlog = document.getElementById("numlog").value;
  let number = Number(numlog);
  

  
  switch (cllog) {
    case "ז":
     
      for (const student of classZ) {
        if (student.firstName === fnlog && student.lastName === lnlog && student.id === number){
          okStudent(isClassZ);
        }
      }
      break;
    case "ח":
      for (const student of classCH) {
        if (student.firstName === fnlog && student.lastName === lnlog && student.id === number){
          okStudent(isClassCH);
        }
      }
      break;
    case "ט":
      for (const student of classT) {
        if (student.firstName === fnlog && student.lastName === lnlog && student.id === number){
          okStudent(isClassT);
        }
      }
      break;
    case "י":
      for (const student of classY) {
        if (student.firstName === fnlog && student.lastName === lnlog && student.id === number){
          okStudent(isClassY);
        }
      }
      break;
    case "יא":
      for (const student of classYA) {
        if (student.firstName === fnlog && student.lastName === lnlog && student.id === number){
          okStudent(isClassYA);
        }
      }
      break;
    case "יב":
      for (const student of classYB) {
        if (student.firstName === fnlog && student.lastName === lnlog && student.id === number){
          okStudent(isClassYB);
        }
      }
      break;
      default :
        notStudent();
  }

  document.getElementById("cllog").value = "";
  document.getElementById("fnlog").value = "";
  document.getElementById("lnlog").value = "";
  document.getElementById("numlog").value = "";
}




// יצירת דיב תגובה במקרה שההרשמה עברה

let isDivCreated = true;
function okStudent( upclass) {
  if (isDivCreated) {
    const resultChek = document.createElement("div");
    document.body.appendChild(resultChek);
    resultChek.innerHTML =`! התחברת בהצלחה ${fnlog.value} ${lnlog.value} שלום לך `
    resultChek.style.cssText = `
      position: absolute;
      left: 40%;
      top: 80%;
      width: 400px;
      height: 100px;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      align-items: center;
    `;

    const confirmButton = document.createElement("button");
    confirmButton.style.cssText = `
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      font-size: 16px;
      padding: 8px 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f0f0f0;
      
    `;
    confirmButton.innerHTML = "אישור";
    confirmButton.addEventListener("mouseover",()=>{
      confirmButton.style.backgroundColor ="grey";
    })
    confirmButton.addEventListener("mouseleave",()=>{
      confirmButton.style.backgroundColor =" #f0f0f0";
    })
    confirmButton.addEventListener("click", function() {
      document.body.removeChild(resultChek);
      isDivCreated = true;
    });
    resultChek.appendChild(confirmButton);
    isDivCreated = false;
  }
    // מבטל את הקלאס שנועל את הכניסה לאתר
    opengate ();
    // שמירה בלוקלסטורז' של כיתה שנכנסו אליה
    localStorage.setItem("studentEnter", JSON.stringify(upclass))
    // שומר את שם התלמידה שנכנסה
    let SN =  `${fnlog.value} ${lnlog.value}`;
    localStorage.setItem("SN",SN )
   
  }
  

// אם נכשל החיבור 

function notStudent() {
  if (isDivCreated) {
    const notChek = document.createElement("div");
    document.body.appendChild(notChek);
    notChek.innerHTML = "! החיבור נכשל"
    notChek.style.cssText = `
      position: absolute;
      left: 40%;
      top: 50%;
      width: 300px;
      height: 100px;
      background-color: red;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      align-items: center;
    `;

    const confirmButton = document.createElement("button");
    confirmButton.style.cssText = `
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      font-size: 16px;
      padding: 8px 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f0f0f0;
      
    `;
    confirmButton.innerHTML = "נסי שוב";
    confirmButton.addEventListener("mouseover",()=>{
      confirmButton.style.backgroundColor ="grey";
    })
    confirmButton.addEventListener("mouseleave",()=>{
      confirmButton.style.backgroundColor =" #f0f0f0";
    })
    confirmButton.addEventListener("click", function() {
      document.body.removeChild(notChek);
      isDivCreated = true;
    });
    notChek.appendChild(confirmButton);
    isDivCreated = false;
  }
}




// בניית דיב הרשמה איכותי

let sing = document.querySelector("#sing");
sing.addEventListener("click", singup);
let active = true;

function singup(e) {
  if (active) {
    active = false;
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const form = document.createElement("form");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const input4 = document.createElement("input");
    const input5 = document.createElement("input");
    const button = document.createElement("button");
    const closeButton = document.createElement("button");

    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(form);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4);
    form.appendChild(input5);
    form.appendChild(button);
    div.appendChild(closeButton);

    h1.innerHTML = "הרשמה לבוגרות";
    h1.style.textAlign = "center";
    h1.style.color = "#333";
    h1.style.marginTop = "20px";
    h1.style.marginBottom = "40px";

    div.style.position = "absolute";
    div.style.width = "400px";
    div.style.height = "520px";
    div.style.backgroundColor = "pink";
    div.style.borderRadius = "20px";
    div.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    div.style.top = "45%";
    div.style.left = "40%";
    div.style.transform = "translate(-50%, -50%)";

    form.style.textAlign = "center";
    form.style.marginTop = "40px";
    form.dir = "rtl";

    let arr = [];
    arr.push(input1);
    arr.push(input2);
    arr.push(input3);
    arr.push(input4);
    arr.push(input5);
    for (const key of arr) {
      key.type = "text";
      arr[0].placeholder = "שם פרטי";
      arr[1].placeholder = "שם משפחה";
      arr[2].placeholder = "מחזור";
      arr[3].placeholder = "אימייל";
      arr[4].placeholder = "טלפון";
      key.style.width = "80%";
      key.style.padding = "10px";
      key.style.marginBottom = "20px";
    }

    button.innerHTML = "Sign Up";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "12px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";

    button.addEventListener("mouseenter", function () {
      button.style.backgroundColor = "#0056b3";
    });

    button.addEventListener("mouseleave", function () {
      button.style.backgroundColor = "#007bff";
    });
    
    button.addEventListener("click", function singToOldes(e) {
      e.preventDefault();
      if (
        input1.value !== "" &&
        input2.value !== "" &&
        input3.value >= "א" &&
        input3.value <= "ל" &&
        input4.value.includes("@") &&
        !isNaN(Number(input5.value)) &&
        input5.value.length >= 7
      ) {
        let check = localStorage.getItem("oldes");
        let chengForm = JSON.parse(check) || [];
        let notProblem = true;
    
        for (const obj of chengForm) {
          if (input4.value === obj.email && input5.value === obj.phone) {  
            notProblem = false;
            break;
          }
        }
    
        if (notProblem) {
          const singToOldStudent = {
            firstName: `${input1.value}`,
            lastName: `${input2.value}`,
            Machzor: `${input3.value}`,
            email: `${input4.value}`,
            phone: `${input5.value}`,
          };
    
          saveInLS(singToOldStudent);
          okOldStudent(input1.value, input2.value);
        } else {
          console.log("בוגרת כבר קיימת במערך");
          okOldStudent(input1.value, input2.value);

        }
    
        // סוגר את הדיב רק אם התנאי מתקיים
        closed();
      } else {
        notStudent();
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
      }
    });
    

    


    // פונקציית אישור להרשמה

    function okOldStudent(firstName , lastName) {
        const resultChek = document.createElement("div");
        document.body.appendChild(resultChek);
        resultChek.innerHTML =`!שלום לך ${firstName} ${lastName } נרשמת בהצלחה`
        resultChek.style.cssText = `
          position: absolute;
          left: 40%;
          top: 45%;
          width: 400px;
          height: 100px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          align-items: center;
        `;
    
        const confirmButton = document.createElement("button");
        confirmButton.style.cssText = `
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          font-size: 16px;
          padding: 8px 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f0f0f0;
          
        `;
        confirmButton.innerHTML = "אישור";
        confirmButton.addEventListener("mouseover",()=>{
          confirmButton.style.backgroundColor ="grey";
        })
        confirmButton.addEventListener("mouseleave",()=>{
          confirmButton.style.backgroundColor =" #f0f0f0";
        })
        confirmButton.addEventListener("click", function() {
          document.body.removeChild(resultChek);
          
        });
        resultChek.appendChild(confirmButton);
        isDivCreated = false;
      }

    // סגירת הדיב
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

    function closed(){
      div.remove();
      active = true;
    }
  }
}

// פונקציית השמירה של הבוגרות

function saveInLS(save) {
  let oldesData = JSON.parse(localStorage.getItem("oldes")) || [];
  if (!Array.isArray(oldesData)) {
    oldesData = [];
  }
  oldesData.push(save);
  localStorage.setItem("oldes", JSON.stringify(oldesData));
  console.log("נרשמה בהצלחה");
  console.log(oldesData);

    // פותח את הכניסה
    opengate ();
}


// יצירת דיב כניסת בוגרות רשומות

let oldLog = document.getElementById("log-in")
oldLog.addEventListener("click",function logOld(e) {
  e.preventDefault();
  const resultChek2 = document.createElement("div");
  document.body.appendChild(resultChek2);
  resultChek2.innerHTML = " כניסת בוגרות הכניסי אימייל ";
  const closeButton2 =document.createElement("button");
  resultChek2.appendChild(closeButton2);
  let emailareha = document.createElement("form");
  resultChek2.appendChild(emailareha)
  let email = document.createElement("input");
  email.type = "email";
  emailareha.appendChild(email);
  resultChek2.style.cssText = `
    position: absolute;
    left: 40%;
    top: 45%;
    width: 400px;
    height: 150px;
    background-color: pink;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    align-items: center;
  `;

  const confirmButton2 = document.createElement("button");
  confirmButton2.style.cssText = `
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    
  `;
  resultChek2.appendChild(confirmButton2);
  isDivCreated = false;
  confirmButton2.innerHTML = "אישור";
  confirmButton2.addEventListener("mouseover",()=>{
    confirmButton2.style.backgroundColor ="yellow";
  })
  confirmButton2.addEventListener("mouseleave",()=>{
    confirmButton2.style.backgroundColor =" #f0f0f0";
  })
  // פעולת חיבור המערכים השמורים ובדיקתם בהתאם להרשמה
  
  confirmButton2.addEventListener("click",()=>{
    let oldStu = false;
    let chekBogrot1 = localStorage.getItem("fullStudent");
   let chekBogrot2 = JSON.parse(chekBogrot1)
    let chekBogrot3 = localStorage.getItem("oldes");
   let chekBogrot4 = JSON.parse(chekBogrot3)
   let resultcheck = chekBogrot2.concat(chekBogrot4).flat();
   console.log(resultcheck);

   for (const key of resultcheck) {
    if (email.value === key.email) {
      resultChek2.remove();
    opengate ();
    oldStu = true;
    break;
    }
    else 
    oldStu = false;
   }
   if (oldStu === false) {
    resultChek2.remove();
    notOldes()
   }



  });

  closeButton2.innerHTML = "&#10006;";
  closeButton2.style.position = "absolute";
  closeButton2.style.top = "10px";
  closeButton2.style.right = "10px";
  closeButton2.style.fontSize = "25px";
  closeButton2.style.backgroundColor = "transparent";
  closeButton2.style.border = "none";
  closeButton2.style.color = "black";
  closeButton2.style.cursor = "pointer";
  closeButton2.style.outline = "none";
  closeButton2.addEventListener("click", function (e) {
    e.preventDefault();
    resultChek2.remove();
  });
})


    function notOldes() {
      const notChek = document.createElement("div");
      document.body.appendChild(notChek);
      notChek.innerHTML = "! החיבור נכשל"
      notChek.style.cssText = `
        position: absolute;
        left: 40%;
        top: 50%;
        width: 300px;
        height: 100px;
        background-color: red;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        align-items: center;
      `;
  
      const confirmButton = document.createElement("button");
      confirmButton.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        font-size: 16px;
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f0f0f0;
        
      `;
      confirmButton.innerHTML = "נסי שוב";
      confirmButton.addEventListener("mouseover",()=>{
        confirmButton.style.backgroundColor ="grey";
      })
      confirmButton.addEventListener("mouseleave",()=>{
        confirmButton.style.backgroundColor =" #f0f0f0";
      })
      confirmButton.addEventListener("click", function() {
        document.body.removeChild(notChek);
        isDivCreated = true;
      });
      notChek.appendChild(confirmButton);
     }
    