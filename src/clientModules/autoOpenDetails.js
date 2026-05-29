function animateOpen(details) {
    const content = details.querySelector(".details-inner");
    if (!content) return;
    content.style.height = "0px";
    details.open = true;
    const target = content.scrollHeight + "px";
    content.style.transition = "height 0.35s ease";
    requestAnimationFrame(() => {
        content.style.height = target;
    });
    content.addEventListener(
        "transitionend",
        () => { content.style.height = "auto"; },
        { once: true }
    );
}

function animateClose(details) {
    const content = details.querySelector(".details-inner");
    if (!content) return;
    content.style.height = content.scrollHeight + "px";
    content.style.transition = "height 0.35s ease";
    requestAnimationFrame(() => {
        content.style.height = "0px";
    });
    content.addEventListener(
        "transitionend",
        () => { details.open = false; content.style.height = ""; },
        { once: true }
    );
}

function setupDetails() {
    document.querySelectorAll("details").forEach((details) => {
        if (details.dataset.animated) return;
        if (details.classList.contains("section-details")) return;
        details.dataset.animated = "true";

        const summary = details.querySelector("summary");
        const children = Array.from(details.childNodes).filter(
            (n) => n !== summary
        );
        if (children.length === 0) return;

        const inner = document.createElement("div");
        inner.className = "details-inner";
        children.forEach((c) => inner.appendChild(c));
        details.appendChild(inner);

        summary.addEventListener("click", (e) => {
            e.preventDefault();
            if (details.open) {
                animateClose(details);
            } else {
                animateOpen(details);
            }
        });
    });

    const TRIGGER_LINE = 0.65;

    function checkTables() {
        const triggerY = window.innerHeight * TRIGGER_LINE;
        document.querySelectorAll("details").forEach((details) => {
            if (details.open) return;
            if (details.classList.contains("section-details")) return;
            const summary = details.querySelector("summary");
            if (!summary) return;
            const summaryTop = summary.getBoundingClientRect().top;
            if (summaryTop <= triggerY) {
                animateOpen(details);
            }
        });
    }

    function isAtBottom() {
        return window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    }

    function openRemaining() {
        if (!isAtBottom()) return;
        document.querySelectorAll("details").forEach((details) => {
            if (details.classList.contains("section-details")) return;
            if (!details.open) {
                animateOpen(details);
            }
        });
    }

    window.addEventListener("scroll", checkTables, { passive: true });
    window.addEventListener("scroll", openRemaining, { passive: true });
}

export function onRouteDidUpdate() {
    setTimeout(setupDetails, 100);
}