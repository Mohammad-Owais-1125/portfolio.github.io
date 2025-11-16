const textElement = document.querySelector(".changing-text");

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "PHP & MySQL Developer",
  "API Developer",
  "Frontend UI/UX Designer"
];

let index = 0;

function changeText() {
  textElement.textContent = roles[index];
  index = (index + 1) % roles.length;
}

changeText();
setInterval(changeText, 3000);
