const message =
  "Thank you for sending a message to the Royal palace. Our senechal will answer you as soon as possible";

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert(message);
});