const validation = () => {
    const calcSquareInput = document.querySelector(".calc-square");
    const calcCountInput = document.querySelector(".calc-count");
    const calcDayInput = document.querySelector(".calc-day");
    const calcBlock = document.querySelector(".calc-block");
    const textForms = document.querySelectorAll("form");
    const yourMessage = document.querySelector(".mess");
    textForms.forEach((item) => {
        const yourName = item.querySelector("input[type=text]");
        const yourEmail = item.querySelector("input[type=email]");
        const yourPhone = item.querySelector("input[type=tel]");
        yourName.addEventListener("input", (event) => {
            event.preventDefault();

            event.target.value = event.target.value.replace(/[^а-я ]/gi, "");
            if (event.target.value.length >= 2) {
                event.target.classList.add("success");
            } else {
                event.target.classList.remove("success");
            }
        });
        yourEmail.addEventListener("input", (event) => {
            const testEmail = /[\-\.\w]+@([\w]+\.)+[\w]+/gi;
            event.preventDefault();
            yourEmail.type = "text";

            event.target.value = event.target.value.replace(/[^a-z0-9_.~*'!@-]/giu, "");

            if (testEmail.test(event.target.value)) {
                event.target.classList.add("success");
            } else {
                event.target.classList.remove("success");
            }
        });
        yourPhone.addEventListener("input", (event) => {
            event.preventDefault();

            event.target.value = event.target.value.replace(/[^0-9\+]/g, "");
            if (event.target.value.length >= 11) {
                event.target.classList.add("success");
            } else {
                event.target.classList.remove("success");
            }
        });
    });
    yourMessage.addEventListener("input", (event) => {
        event.preventDefault();
        event.target.value = e.target.value.replace(/[^а-я0-9 \,\.\?\!]/gi, "");
        if (event.target.value) {
            event.target.classList.add("success");
        } else {
            event.target.classList.remove("success");
        }
    });
    calcBlock.addEventListener("input", (event) => {
        event.preventDefault();
        calcSquareInput.value = calcSquareInput.value.replace(/\D+/, "");
        calcCountInput.value = calcCountInput.value.replace(/\D+/, "");
        calcDayInput.value = calcDayInput.value.replace(/\D+/, "");
    });
};
export default validation;