function typedH({element, speed, reversed = false}) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    if (reversed == false) {
        const typing = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    }
    else {
        let i = text.length;
        const reverse = setInterval(() => {
            if (i > 0) {
                element.innerHTML = text.substring(0, i);
                i--;
            } else {
                clearInterval(reverse);
            }
        }, speed);
    }
};
