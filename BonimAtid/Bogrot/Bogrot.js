// תקציר
// רינדור הבוגרות לתוך הדף וסידורם בו בהתאם לנתונים ולהרשמה

async function getBogrot() {
  const get = await fetch('https://dummyjson.com/users?limit=50&skip=0');
  const getData = await get.json();
  renderBogrot(getData.users);
  concatarray();
}

  const oldstudent = [];

function renderBogrot(data) {
  let result = document.getElementById("result");
    oldstudent.push(data);

    for (const user of data) {
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      rowDiv.style.maxWidth = "105%";
      rowDiv.style.width = "102%";
      let counter = 0; 

      for (const key in user) {
        if (counter < 8 ) { 
          let colDiv = document.createElement("div");
          colDiv.classList.add("col", "border", "justify-content-center", "align-items-center", "text-center");
          colDiv.innerHTML = `${user[key]}`;
        colDiv.style.wordBreak = "break-all";
          rowDiv.appendChild(colDiv);
          counter++;
        }
      }

      result.appendChild(rowDiv);

    }
  }


///  הבוגרות הנרשמות עצמאית

const NewSingOldstudent = [];
let getOldes1 = localStorage.getItem('oldes');
let getOldes2 = JSON.parse(getOldes1);
if (getOldes2) {
  NewSingOldstudent.push(getOldes2);
}

let newresult = document.getElementById('resultNew');
for (const old of NewSingOldstudent) {
  for (const obj of old) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style.maxWidth = "105%";
    rowDiv.style.width = "102%";
    for (const key in obj) {
      let colDiv = document.createElement('div');
      colDiv.classList.add('col', 'border', 'justify-content-center', 'align-items-center', 'text-center');
      colDiv.innerHTML = `${obj[key]}`;
      colDiv.style.maxWidth = '100%';
      colDiv.style.width = '100%';
      colDiv.style.wordBreak = 'break-all';
      rowDiv.appendChild(colDiv);
    }
    newresult.appendChild(rowDiv);
  }
  for (const dbl of NewSingOldstudent) {
    console.log(dbl);
  }

}
function concatarray() {
  const conact = oldstudent.concat(NewSingOldstudent).flat();
  console.log(conact);
  localStorage.setItem( "fullStudent",JSON.stringify(conact))
  }
  
  getBogrot(); 


