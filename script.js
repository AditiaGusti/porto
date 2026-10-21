const menu = document.querySelector("#menu");
const links = document.querySelector("#links");

menu.addEventListener("click", () => {
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
  });
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const recipient = "gustiaditia8@gmail.com";
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `${message}\n\nFrom: ${name}\nReply email: ${email}`
  );

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}` +
    `&su=${subject}&body=${body}`;

  document.querySelector("#formNote").textContent =
    "Opening Gmail with a prepared draft…";

  window.open(gmailUrl, "_blank", "noopener,noreferrer");
});
