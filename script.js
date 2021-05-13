const btn = document.querySelectorAll(".btn");
const testimonial = document.querySelectorAll(".testimonial");

let j = 0;
testimonial[1].style.display = "none";

for (let i of btn) {
  i.addEventListener("click", (e) => {
    if (j === 0) {
      testimonial[0].style.display = "none";
      testimonial[1].style.display = "flex";
      j = 1;
    } else {
      testimonial[1].style.display = "none";
      testimonial[0].style.display = "flex";
      j = 0;
    }
  });
}
