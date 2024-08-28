let scriptindex = 1;
showslides(scriptindex);

function plusSlides(n) {
    showslides(scriptindex += n);
}

function currentSlide(n) {
    showslides(scriptindex = n);
}

function showslides(n) {
    let i;
    let slides = document.getElementsByClassName("mySliders");
    let dot = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        scriptindex = 1;
    }
    if (n < 1) {
        scriptindex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }

    slides[scriptindex - 1].style.display = "block";
    dot[scriptindex - 1].className += " active";
}
