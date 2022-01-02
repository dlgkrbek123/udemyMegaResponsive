document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item)=> {
    item.classList.toggle("change")
  })
})

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  document.querySelector(".section-1-icons i.change")?.classList.remove('change'); 

  i++;
  if(i >= icons.length) i = 0;
  
  icons[i].classList.add("change")
}, 1000)

