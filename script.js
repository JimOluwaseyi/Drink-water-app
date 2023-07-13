const waterDranked = document.querySelectorAll(".waterDranked");
const glassContainer = document.querySelector(".glass-container");
const addWater = document.querySelector(".addWater");
const removeWater = document.querySelector(".removeWater");
const liter = document.querySelector(".liter1");
const text = document.querySelector(".liter2");
const position = document.querySelector(".position");
const percentage = document.querySelector("#percentage");

console.log(waterDranked);
let display = false;
waterDranked.forEach((water, index) => {
  water.addEventListener("click", (e) => {

    // precious
    // percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // removeWater.style.height = `${(100 / 8) * (index + 1)}%`;
    // if (e.target.id === "water8") {
    //     addWater.style.visibility = 'hidden';
    //     addWater.style.height = '0';
    // } else {
    //     addWater.style.visibility = '';
    //     addWater.style.height = '';
    // }


    // Jim
    position.style.display = '';

    if (e.target.id === "water1" && display === false) {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "16%";
      addWater.style.width = "100%";
      addWater.style.color = "#fff";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
      glassContainer.style.justifyContent = "end";
      display = true;
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
     water.style.backgroundColor ="#6ab3f8";
     water.style.color ="#fff";

    } else {
      addWater.style.backgroundColor = "#fff";
      display = false;
      water.style.backgroundColor ='#fff'
     water.style.color ="rgba(0, 0, 255, 0.658)";




    }

    if (e.target.id === "water2") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "24%";
      addWater.style.width = "100%";
      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";

      
    }
    if (e.target.id === "water3") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "36%";
      addWater.style.width = "100%";
      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";

    }
    if (e.target.id === "water4") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "48%";
      addWater.style.width = "100%";
      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";

    }
    if (e.target.id === "water5") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "60%";
      addWater.style.width = "100%";

      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";

    }
    if (e.target.id === "water6") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "72%";
      addWater.style.width = "100%";

      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";

    }
    if (e.target.id === "water7") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "84%";
      addWater.style.width = "100%";
      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";


    }
    if (e.target.id === "water8") {
      addWater.style.backgroundColor = "#6ab3f8";
      addWater.style.height = "100%";
      addWater.style.width = "100%";
      glassContainer.style.justifyContent = "end";
      addWater.style.borderBottomLeftRadius = "25px";
      addWater.style.borderBottomRightRadius = "25px";
    percentage.innerText = `${(100 / 8) * (index + 1)}%`;
    // water.style.backgroundColor ="#6ab3f8";
    //  water.style.color ="#fff";

      position.style.display = 'none';
    }

    waterDranked.forEach((w) => {
        w.style.backgroundColor ="";
        w.style.color ="";
    })

    for (let i = 0; i <= index; i++) {
        waterDranked[i].style.backgroundColor ="#6ab3f8";
        waterDranked[i].style.color ="#fff";
    }



  });
});
