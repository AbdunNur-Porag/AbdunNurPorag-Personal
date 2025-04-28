
function animation(selector) {
    const element = document.querySelector(selector);

    const animate = (type, direction, duration = 400, easing = "cubic-bezier(0.4, 0, 0.2, 1)", callback = null) => {
        if (!element) return;

        element.style.transition = "none";
        element.style.willChange = "transform, opacity, scale";

        const resetStyles = () => {
            element.style.transform = "none";
            element.style.opacity = "1";
        };

        if (type === "open") {
            element.style.display = "block";

            if (["slideUp", "slideUpFromBottom"].includes(direction)) {
                element.style.transform = "translateY(100%)";
                element.style.opacity = "0";
            } else if (direction === "slideUpFromTop") {
                element.style.transform = "translateY(-100%)";
                element.style.opacity = "0";
            } else if (direction === "slideLeft") {
                element.style.transform = "translateX(100%)";
                element.style.opacity = "0";
            } else if (direction === "slideRight") {
                element.style.transform = "translateX(-100%)";
                element.style.opacity = "0";
            } else if (direction === "fadeIn") {
                element.style.opacity = "0";
            } else if (direction === "scaleUp") {
                element.style.transform = "scale(0.7)";
                element.style.opacity = "0";
            }

            requestAnimationFrame(() => {
                element.style.transition = `all ${duration}ms ${easing}`;
                element.style.transform = "translate(0, 0) scale(1)";
                element.style.opacity = "1";
            });
        }

        if (type === "close") {
            if (direction === "slideDown") {
                element.style.transform = "translateY(0)";
                element.style.opacity = "1";
                requestAnimationFrame(() => {
                    element.style.transition = `all ${duration}ms ${easing}`;
                    element.style.transform = "translateY(100%)";
                    element.style.opacity = "0";
                });
            } else if (direction === "slideDownFromTop") {
                element.style.transform = "translateY(0)";
                element.style.opacity = "1";
                requestAnimationFrame(() => {
                    element.style.transition = `all ${duration}ms ${easing}`;
                    element.style.transform = "translateY(-100%)";
                    element.style.opacity = "0";
                });
            } else if (direction === "slideOutLeft") {
                element.style.transform = "translateX(0)";
                element.style.opacity = "1";
                requestAnimationFrame(() => {
                    element.style.transition = `all ${duration}ms ${easing}`;
                    element.style.transform = "translateX(-100%)";
                    element.style.opacity = "0";
                });
            } else if (direction === "slideOutRight") {
                element.style.transform = "translateX(0)";
                element.style.opacity = "1";
                requestAnimationFrame(() => {
                    element.style.transition = `all ${duration}ms ${easing}`;
                    element.style.transform = "translateX(100%)";
                    element.style.opacity = "0";
                });
            } else if (direction === "fadeOut") {
                element.style.opacity = "1";
                requestAnimationFrame(() => {
                    element.style.transition = `opacity ${duration}ms ${easing}`;
                    element.style.opacity = "0";
                });
            } else if (direction === "scaleDown") {
                element.style.transform = "scale(1)";
                element.style.opacity = "1";
                requestAnimationFrame(() => {
                    element.style.transition = `all ${duration}ms ${easing}`;
                    element.style.transform = "scale(0.7)";
                    element.style.opacity = "0";
                });
            }

            setTimeout(() => {
                element.style.display = "none";
                resetStyles();
                if (callback) callback();
            }, duration);
        } else {
            setTimeout(() => {
                if (callback) callback();
            }, duration);
        }
    };

    return {
        openAnimation: {
            slideUp(duration = 400, easing, callback) {
                animate("open", "slideUp", duration, easing, callback);
            },
            slideUpFromBottom(duration = 400, easing, callback) {
                animate("open", "slideUpFromBottom", duration, easing, callback);
            },
            slideUpFromTop(duration = 400, easing, callback) {
                animate("open", "slideUpFromTop", duration, easing, callback);
            },
            slideLeft(duration = 400, easing, callback) {
                animate("open", "slideLeft", duration, easing, callback);
            },
            slideRight(duration = 400, easing, callback) {
                animate("open", "slideRight", duration, easing, callback);
            },
            fadeIn(duration = 400, easing, callback) {
                animate("open", "fadeIn", duration, easing, callback);
            },
            scaleUp(duration = 400, easing, callback) {
                animate("open", "scaleUp", duration, easing, callback);
            }
        },
        closeAnimation: {
            slideDown(duration = 400, easing, callback) {
                animate("close", "slideDown", duration, easing, callback);
            },
            slideDownFromTop(duration = 400, easing, callback) {
                animate("close", "slideDownFromTop", duration, easing, callback);
            },
            slideOutLeft(duration = 400, easing, callback) {
                animate("close", "slideOutLeft", duration, easing, callback);
            },
            slideOutRight(duration = 400, easing, callback) {
                animate("close", "slideOutRight", duration, easing, callback);
            },
            fadeOut(duration = 400, easing, callback) {
                animate("close", "fadeOut", duration, easing, callback);
            },
            scaleDown(duration = 400, easing, callback) {
                animate("close", "scaleDown", duration, easing, callback);
            }
        }
    };
}