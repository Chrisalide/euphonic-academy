AOS.init({
  offset: "0",
  anchorPlacement: "top-center",
  delay: "100"
});

const x = window.matchMedia("(max-width: 1199px)");

if (x.matches) {
  document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("finestraMenuMob").classList.add("openMenu");
    document.querySelector(".close").classList.add("openClose");
    document.querySelector(".close").classList.add("on");
	document.querySelector(".close").style.width="50px";
	document.querySelector(".close").style.height="50px";
    document.getElementById("itemsMenu").style.display = "none";
    document.body.style.overflow = "hidden";
    document.querySelector("header").classList.add("openMenu");
  });
  document.querySelectorAll(".linkMobMenu").forEach(function (apriSottomenu) {
    apriSottomenu.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".close").classList.remove("on");
      document.querySelector(this.getAttribute("href")).classList.add("openMenu");
      document.querySelector(".logo").classList.add("openMenu");
      document.querySelectorAll(".close svg path, .close circle").forEach(function (coloraSvg) {
      coloraSvg.style.stroke="#0A0A0B";
	  coloraSvg.style.transitionDelay="0s"
      });
      document.getElementById("itemsMenu").style.display = "none";
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelector(".close").addEventListener("click", function () {
    if (this.classList.contains("on")) {
      this.classList.remove("on");
      document.getElementById("finestraMenuMob").classList.remove("openMenu");
      document.querySelector(".close").classList.remove("openClose");
      document.getElementById("itemsMenu").style.display = "flex";
      document.body.style.overflow = "inherit";
      document.querySelector(".logo, header").classList.remove("openMenu");

    } else {
      this.classList.add("on");
      document.querySelectorAll(".finestraMenuSecondaria").forEach(function (chiudiMenuSecondario) {
        chiudiMenuSecondario.classList.remove("openMenu");
        document.getElementById("finestraMenuMob").classList.add("openMenu");
        document.querySelectorAll(".close svg path, .close circle").forEach(function (coloraSvg) {
          coloraSvg.style.stroke = "#FDFDFD",
		coloraSvg.style.transitionDelay=".4s"
        });
        document.querySelector(".logo").classList.remove("openMenu");
      });
    }
  });

} else {
  document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("finestraMenuDesk").classList.add("openMenu");
	document.querySelector(".close").classList.add("openClose");
	document.querySelector(".close").style.width="65px";
	document.querySelector(".close").style.height="65px";
	document.querySelector(".close").style.right="80px";
    document.getElementById("itemsMenu").style.display = "none";
    document.body.style.overflow = "hidden";
  });
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("finestraMenuDesk").classList.remove("openMenu");
	document.querySelector(".close").classList.remove("openClose");
    document.getElementById("itemsMenu").style.display = "flex";
    document.body.style.overflow = "inherit";
  });
}


document.querySelectorAll(".docentiCard").forEach(function (apriCardDocenti) {
  apriCardDocenti.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).classList.add("show");
    document.getElementById("backgroundBlack").classList.add("show");
  });
});
document.querySelectorAll(".closeDocenti, #backgroundBlack").forEach(function (chiudiCardDocenti) {
  chiudiCardDocenti.addEventListener("click", function () {
    document.querySelectorAll(".cardDocenti").forEach(function (chiudi) {
      chiudi.classList.remove("show");
      document.getElementById("backgroundBlack").classList.remove("show");
    });
  });
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").classList.add("animaHeader");
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
};


function updateSlides(swiper, swiper2) {
  const totalSlides = swiper.slides.length;
  const activeIndex = swiper.activeIndex;

  // Calcola gli indici del primo e dell'ultimo slide visibile
  const firstVisibleIndex = activeIndex;
  const lastVisibleIndex = (activeIndex + swiper.params.slidesPerView - 1) % totalSlides;

  // Ripristina tutti gli slide
  swiper.slides.forEach((slide) => {
    slide.classList.remove("firstRadius");
	 slide.classList.remove("lastRadius")// Ripristina il colore originale
  });

  // Modifica il primo e l'ultimo slide visibile
  if (swiper.slides[firstVisibleIndex]) {
    swiper.slides[firstVisibleIndex].classList.add("firstRadius"); // Modifica il primo
  }
  if (swiper.slides[lastVisibleIndex]) {
    swiper.slides[lastVisibleIndex].classList.add("lastRadius"); // Modifica l'ultimo
  }
}

const swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
	breakpoints:{
    768: {
      slidesPerView: 2,
    },
	992: {
    slidesPerView: 3,
	navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    }},
	  on: {
    slideChange: function () {
      updateSlides(this);
    }
  }, 
});


const swiper2 = new Swiper(".mySwiper2", {
   slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
	breakpoints:{
		768:{
			slidesPerView: 2,
		},
		992:{
			slidesPerView: 3,
			navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
		}
	},
on: {
    slideChange: function () {
      updateSlides(this);
    }
  }, 
});

const swiper3 = new Swiper(".mySwiper3", {
   slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
	breakpoints:{
	992:{
		slidesPerView: 3
		}
}
});

const swiperHero = new Swiper(".mySwiperHero", {
slidesPerView: 1,
autoplay: true,
speed:1000,
loop:true,
freeMode: true
/* effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },*/
 });

Fancybox.bind("[data-fancybox]");



const nome = document.querySelectorAll(".artista");

document.querySelectorAll("#filtroArtisti button").forEach(function(filtraArtisti){
	filtraArtisti.addEventListener("click", function(){
		document.querySelectorAll("#filtroArtisti button").forEach(function(rimuovi){
			rimuovi.classList.remove("activeBtn");
		});
		this.classList.add("activeBtn");
		const targetArtist = this.getAttribute("data-artista");
		nome.forEach(function(item){
			if(targetArtist === "tutti" || item.classList.contains(targetArtist)){
			   item.style.display="block";
			   }
			   else{
			     item.style.display="none";
			   }
		});
	});
});


const foto = document.getElementById("immagine");

nome.forEach(function(mostraFoto){
	mostraFoto.addEventListener("mouseover", function(){
		const attributo = this.getAttribute("data-immagine");
		foto.src=attributo;
		foto.classList.add("mostraFoto")
	});
	mostraFoto.addEventListener("mouseleave", function(){
		foto.src="";
		foto.classList.remove("mostraFoto")
	})
	
});


document.querySelectorAll(".domanda").forEach(function(accordion){
	accordion.addEventListener("click", function(){
		if(this.classList.contains("off")){
			this.classList.remove("off");
			document.querySelectorAll(".risposta").forEach(function(mostraRisposta){
				accordion.classList.add("show")
			})
		}
		else{
			this.classList.add("off");
			document.querySelectorAll(".risposta").forEach(function(mostraRisposta){
				accordion.classList.remove("show")
			})
		}
	})
})