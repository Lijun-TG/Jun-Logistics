// Slider
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;
function showSlide(i){ slides.style.transform = `translateX(${-i*100}%)`; }
document.querySelector('.prev').addEventListener('click',()=>{ index=(index-1+slideCount)%slideCount; showSlide(index); });
document.querySelector('.next').addEventListener('click',()=>{ index=(index+1)%slideCount; showSlide(index); });
setInterval(()=>{ index=(index+1)%slideCount; showSlide(index); },5000);

// Fade-in khi cuộn
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs)=>{
entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); }});
},{threshold:0.2});
fadeElements.forEach(el=>observer.observe(el));
