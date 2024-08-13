let scriptindex = 1;
showSlides(scriptindex);

function plusSlides(n) {
    showSlides(scriptindex += n);
}

function currentSlide(n) {
    showSlides(scriptindex = n);  // Reset the scriptindex to the current slide
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySliders");  // Correct class name
    let dots = document.getElementsByClassName("dot");  // Fixed variable name

    if (n > slides.length) {
        scriptindex = 1;
    }
    if (n < 1) {
        scriptindex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[scriptindex - 1].style.display = "block";
    dots[scriptindex - 1].className += " active";
}
