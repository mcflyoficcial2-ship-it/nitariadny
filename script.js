
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}


AOS.init({
    duration: 900,
    once: true
});


const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    button.disabled = true;
    button.innerText = "Отправка...";

    const data = new FormData(form);

    try {
        const res = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { "Accept": "application/json" }
        });

        if (res.ok) {
            statusText.textContent = "✔ Заявка отправлена!";
            statusText.style.color = "#2E7D32";
            form.reset();
        } else {
            statusText.textContent = "Ошибка отправки";
            statusText.style.color = "red";
        }
    } catch (err) {
        statusText.textContent = "Ошибка сети";
        statusText.style.color = "red";
    }

    button.disabled = false;
    button.innerText = "Отправить заявку";
});
