let menu = document.querySelector('#menubar');
let nav = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    nav.classList.toggle('active');
});
// Form Toggle
//  let formLog = document.querySelector('#loginBtn');
//  let formControl = document.querySelector('.login-container');
//  let formClose = document.querySelector('#form-close');

//  formLog.addEventListener('click', () => {
//      formControl.classList.add('active');
//  });

//  formClose.addEventListener('click', () => {
//      formControl.classList.remove('active');
//  });



// Slides
let slideIndex1 = 0;
 showSlides1();

 function showSlides1() {
   let i;
   let slides = document.getElementsByClassName("slides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex1++;
   if (slideIndex1 > slides.length) {slideIndex1 = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex1-1].style.display = "block";  
   dots[slideIndex1-1].className += " active";
   setTimeout(showSlides1, 2000); // Change image every 2 seconds
 };

// Multiple Slide

let slideIndex = [1,1];
let slideId = ["mySlide2", "mySlide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = ""; 
}

// Counter
const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
   const updateCount = () =>{
    const target = counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else{
      counter.innerText = target;
    }
   }

   updateCount();
})
