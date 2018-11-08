function modal() {
  let body = document.querySelector("body"),
        more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    const modalDisplay = () => {
        overlay.style.display = "block";
        more.classList.add("more-splash");
        document.body.style.overflow = "hidden";

    };

    const modalClose = () => {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        statusMessage.style.display = "none";
        document.body.style.overflow = "";

    };

    body.addEventListener("click", (e) => {
        let target = e.target;

        if (target.classList.contains("description-btn") || target.classList.contains("more")) {
            modalDisplay();
        }
        if (target.classList.contains("overlay") || target.classList.contains("popup-close")) {
            modalClose();
        }
    });
}

module.exports = modal;