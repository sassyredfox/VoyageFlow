/* ------------------ PAGE SWITCHING ------------------ */

function showPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.add("hidden"));
    document.getElementById("page" + num).classList.remove("hidden");
}


/* ------------------ PAGE 1: REGISTRATION ------------------ */

const form = document.getElementById("registrationForm");
const modal1 = document.getElementById("modal1");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let pin = document.getElementById("pin").value.trim();

    let valid = true;

    // Reset errors
    errorEmail.innerText = "";
    errorPhone.innerText = "";
    errorPin.innerText = "";

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorEmail.innerText = "Enter a valid email";
        valid = false;
    }

    // Phone Validation
    if (phone.length !== 10 || isNaN(phone)) {
        errorPhone.innerText = "Phone must be 10 digits";
        valid = false;
    }

    // PIN Validation
    if (pin.length !== 6 || isNaN(pin)) {
        errorPin.innerText = "PIN must be 6 digits";
        valid = false;
    }

    if (valid) {
        modal1.classList.remove("hidden");
    }
});


/* Correct Page 1 → Page 2 Navigation Logic */

document.getElementById("goToPage2").addEventListener("click", () => {
    console.log("GO TO PAGE 2 CLICKED");
    modal1.classList.add("hidden");
    showPage(2);
});



/* ------------------ PAGE 2: TRAVEL BLOG ------------------ */

// FIXED SELECTOR HERE ↓↓↓
document.querySelectorAll('.travel-nav button').forEach(btn => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Next page
document.getElementById("goToPage3").addEventListener("click", () => {
    showPage(3);
});


/* ------------------ PAGE 3: PRICE CALCULATOR ------------------ */

let total = 0;

function updateTotal() {
    total = 0;
    document.querySelectorAll(".cost:checked").forEach(item => {
        total += Number(item.value);
    });
    document.getElementById("totalPrice").textContent = total;
}

document.querySelectorAll(".cost").forEach(box => {
    box.addEventListener("change", updateTotal);
});

document.getElementById("confirmCalc").addEventListener("click", () => {
    document.getElementById("modal3").classList.remove("hidden");
});

document.getElementById("goToPage4").addEventListener("click", () => {
    document.getElementById("modal3").classList.add("hidden");
    showPage(4);
});


/* ------------------ PAGE 4 ------------------ */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

document.querySelectorAll(".destination").forEach(sec => observer.observe(sec));