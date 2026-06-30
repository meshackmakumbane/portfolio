const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorMessage = document.getElementById("error-message");

    const URL = "http://localhost:8080";

    try {
        const response = await fetch(`${URL}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            errorMessage.textContent = data.message;
            return;
        }

        errorMessage.style.color = "green";
        errorMessage.textContent = data.message;

        contactForm.reset();

    } catch (error) {
        errorMessage.style.color = "red";
        errorMessage.textContent = error.message;
    }
});