// const slides = document.querySelectorAll(".slide")
// var counter = 0;
// slides.forEach(
//     (slide , index) =>{
//         slide.style.left = `${index*100}%`
//     }
// )
// const goNext = () => {
//     counter++
//     slideImage()
// }
// const goPrev = () => {
//     counter--
//     slideImage()
// }
// const slideImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter * 167}%)`
//         }
//     )
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("div1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

