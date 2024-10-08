const counters = document.querySelectorAll(".count");
const countPlace = document.querySelector(".counter");

document.addEventListener('scroll', offset);

// Kollar om elementet är synligt eller ej
function offset() {
  const rect = countPlace.getBoundingClientRect();
  if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ){
    countAnimals();
  } else{
   
   resetAnimals();
  }
}

// Inkrementerar antalet tills data-target värdet nås
function countAnimals(){
counters.forEach(counter => {
 const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = 2;
  
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 18);
    } else {
      count.innerText = target;
    }
  }
  updateCount();
});
}

// Återställer värdet som syns
function resetAnimals(){
  counters.forEach(counter=>{
    counter.innerText = '0';
  })
}