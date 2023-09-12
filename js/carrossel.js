function clicked(num) {
  let btn = document.getElementById("b" + num);
  let active = "active";
  let a = document.querySelector(".active");
  let aT = document.querySelectorAll(".paragraph");
  let title = document.getElementById("language");
  let schedule = [document.getElementById("mor"), document.getElementById("eve"), document.getElementById("ngt")] //horários especificos
  let hours = [document.getElementById("morning"), document.getElementById("evening"), document.getElementById("night")] //manhã/tarde/noite


  switch (num) {
    case 0:
        title.innerText = "Japonês";
      a.classList.toggle("menuItem");
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
        }
      });
      for(let i = 0; i < hours.length; i++) {
        if(i == 1){
            hours[i].style.display = "none";
        } 
        else hours[i].style.display = "flex";

        if(i == 0) schedule[i].innerHTML = "8h - 9h<br><br>10h - 11h";
        if(i == 2) schedule[i].innerHTML = "20h - 21h<br><br>21h - 22h"
      }
      break;
    case 1:
      title.innerText = "Inglês";
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");

          item.style.display = "block";
        }
      });
      for(let i = 0; i < hours.length; i++) {
        hours[i].style.display = "flex";
        if(i == 0) schedule[i].innerHTML = "8h - 9h<br><br>10h - 11h";
        if(i == 1) schedule[i].innerHTML = "13h - 14h<br><br>15h - 16h"
        if(i == 2) schedule[i].innerHTML = "20h - 21h<br><br>21h - 22h"
      }
      break;
    case 2:
      console.log(num);
      title.innerText = "Espanhol";
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
          item.style.display = "block";
        }
      });
      for(let i = 0; i < hours.length; i++) {
        if(i == 0 || i == 2) hours[i].style.display = "none";
        else hours[i].style.display = "flex";
        if(i == 1) schedule[i].innerHTML = "13h - 14h<br><br>14h - 15h<br><br>15h - 16h"
      }
      break;
    case 3:
        title.innerText = "Alemão";
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
          item.style.display = "block";
        }
      });
      for(let i = 0; i < hours.length; i++) {
        if(i == 1) hours[i].style.display = "none";
        else hours[i].style.display = "flex";

        if(i == 0) schedule[i].innerHTML = "8h - 9h<br><br>10h - 11h";
        if(i == 2) schedule[i].innerHTML = "20h - 21h<br><br>21h - 22h"
      }
      break;
    case 4:
      a.classList.remove(active);
      btn.classList.toggle(active);
      aT.forEach((item, i) => {
        item.style.opacity = 0;
        item.style.display = "none";
        if (i === num) {
          setTimeout(() => {
            item.style.opacity = 1;
          }, "100");
          item.style.display = "block";
        }
      });
      for(let i = 0; i < hours.length; i++) {
        if(i == 0) hours[i].style.display = "none";
        else hours[i].style.display = "flex";

        if(i == 1) schedule[i].innerHTML = "15h - 16h<br><br>18h - 19h";
        if(i == 2) schedule[i].innerHTML = "20h - 21h<br><br>21h - 22h"
      }
      
      break;
  }
}
