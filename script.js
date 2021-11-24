const lightbox = document.createElement('div')
lightbox.id = 'lightbox'


const images = document.querySelectorAll('.bagr')
images.forEach(image => {
    image.addEventListener('click', e => {
        document.body.appendChild(lightbox);
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        lightbox.style.display = 'flex'
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    document.body.removeChild(lightbox)
})

var stred = SMap.Coords.fromWGS84(77.0132889,38.8683603);
        var mapa = new SMap(JAK.gel("mapa"), stred, 10);
        mapa.addDefaultLayer(SMap.DEF_BASE).enable();
        mapa.addDefaultControls();

        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }