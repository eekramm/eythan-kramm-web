// ------------------------ MAIN MENU SECTION ---------------------
// MAIN MENU
// opens and closes main menu
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".fa-pencil-square");
let closeMenu = document.querySelector(".close-menu");
let homeIcon = document.querySelector(".fa-home");
let aboutMeIcon = document.querySelector(".fa-user-circle-o");
let portfolioIcon = document.querySelector(".fa-briefcase");
let contactIcon = document.querySelector(".fa-address-book-o");
let menuIsOpen = document.getElementsByClassName("menu-show");

function toggleMenu() {
  menu.classList.toggle("menu-show");
  menuIcon.classList.toggle("edit-btn-hide");
  homeIcon.classList.toggle("home-btn-hide");
  aboutMeIcon.classList.toggle("about-me-btn-hide");
  portfolioIcon.classList.toggle("portfolio-btn-hide");
  contactIcon.classList.toggle("contact-me-btn-hide");
}


closeMenu.addEventListener("click", toggleMenu);
menuIcon.addEventListener("click", toggleMenu);

// ------------------------ IMG GALLERY SECTION ---------------------
// IMG GALLERY
// opens and closes the img gallery
let gallery = document.querySelector(".img-gallery");
let galleryButton = document.querySelector(".back-ground-img");
let closeGallery = document.querySelector(".close-gallery");
let galleryIsOpen = document.getElementsByClassName(
  "back-ground-img-gallery-show"
  );
  
  function toggleGallery() {
    console.log(galleryIsOpen);
    gallery.classList.toggle("back-ground-img-gallery-show");
  }
  
  function closeGalleryWithMenu() {
    if (galleryIsOpen.length == 1) {
      gallery.classList.toggle("back-ground-img-gallery-show");
    }
  }
  
  function closeGalleryWithFontOpen() {
    if (galleryIsOpen.length == 1) {
      gallery.classList.toggle("back-ground-img-gallery-show");
    }
  }
  
  function closeGalleryWithColorOpen() {
    if (galleryIsOpen.length == 1) {
      gallery.classList.toggle("back-ground-img-gallery-show");
    }
  }
  
  function closeGalleryWithMenuButton() {
    if (galleryIsOpen.length == 1) {
      gallery.classList.toggle("back-ground-img-gallery-show");
    }
  }
  
  galleryButton.addEventListener("click", closeColorWithGalleryOpen);
  galleryButton.addEventListener("click", closeFontWithGalleryOpen);
  galleryButton.addEventListener("click", toggleGallery);
  closeGallery.addEventListener("click", toggleGallery);
  closeMenu.addEventListener("click", closeGalleryWithMenu);
  
  // ------------------------ FONT GALLERY SECTION ---------------------
  // FONT GALLERY
  // opens and closes the font gallery
  let fontGallery = document.querySelector(".font-gallery");
  let fontGalleryButton = document.querySelector(".font");
  let closeFontGallery = document.querySelector(".close-fonts");
  let fontGalleryIsOpen = document.getElementsByClassName("font-gallery-show");
  
  function toggleFontGallery() {
    fontGallery.classList.toggle("font-gallery-show");
  }
  
  function closeFontGalleryWithMenu() {
    if (fontGalleryIsOpen.length == 1) {
      fontGallery.classList.toggle("font-gallery-show");
    }
  }
  
  function closeFontWithGalleryOpen() {
    if (fontGalleryIsOpen.length == 1) {
      fontGallery.classList.toggle("font-gallery-show");
    }
  }
  
  function closeFontWithColorOpen() {
    if (fontGalleryIsOpen.length == 1) {
      fontGallery.classList.toggle("font-gallery-show");
    }
  }
  
  function closeFontWithMenuButton() {
    if (fontGalleryIsOpen.length == 1) {
      fontGallery.classList.toggle("font-gallery-show");
    }
  }
  
  fontGalleryButton.addEventListener("click", closeColorWithFontOpen);
  fontGalleryButton.addEventListener("click", closeGalleryWithFontOpen);
  fontGalleryButton.addEventListener("click", toggleFontGallery);
  closeFontGallery.addEventListener("click", toggleFontGallery);
  closeMenu.addEventListener("click", closeFontGalleryWithMenu);
  
  // ------------------------ COLOR PICKER SECTION ---------------------
  // COLOR PICKER
  // opens and closes the color picker
  let colorPicker = document.querySelector(".color-gallery");
  let colorPickerButton = document.querySelector(".color-scheme");
  let closeColorPicker = document.querySelector(".close-color");
  let colorGalleryIsOpen = document.getElementsByClassName("color-gallery-show");
  
  function toggleColorPicker() {
    colorPicker.classList.toggle("color-gallery-show");
  }
  
  function closeColorPickerWithMenu() {
    if (colorGalleryIsOpen.length == 1) {
      colorPicker.classList.toggle("color-gallery-show");
    }
  }
  
  function closeColorWithFontOpen() {
    if (colorGalleryIsOpen.length == 1) {
      colorPicker.classList.toggle("color-gallery-show");
    }
  }
  
  function closeColorWithGalleryOpen() {
    if (colorGalleryIsOpen.length == 1) {
      colorPicker.classList.toggle("color-gallery-show");
    }
  }
  
  function closeColorWithMenuButton() {
    if (colorGalleryIsOpen.length == 1) {
      colorPicker.classList.toggle("color-gallery-show");
    }
  }
  
  colorPickerButton.addEventListener("click", closeGalleryWithColorOpen);
  colorPickerButton.addEventListener("click", closeFontWithColorOpen);
  colorPickerButton.addEventListener("click", toggleColorPicker);
  closeColorPicker.addEventListener("click", toggleColorPicker);
  closeMenu.addEventListener("click", closeColorPickerWithMenu);
  
  // opens and closes the color picker info
  let colorPickerInfo = document.querySelector(".color-gallery-info");
  let colorPickerInfoTriger = document.querySelector("#color-gallery");
  
  function showColorPickerInfo() {
    colorPickerInfo.classList.toggle("color-gallery-info-show");
  }
  
  colorPickerInfoTriger.addEventListener("mouseenter", showColorPickerInfo);
  colorPickerInfoTriger.addEventListener("mouseleave", showColorPickerInfo);
  
  // ------------------------ SITE MENU SECTION ---------------------
  // SITE MENU
  // opens and closes site-menu CHANGES FROM EDIT MENU TO SITE MENU AND BACK
  let bgiButn = document.querySelector(".back-ground-img");
  let fButn = document.querySelector(".font");
  let csButn = document.querySelector(".color-scheme");
  let menuButn = document.querySelector(".site-menu-dropdown");
  let collapseMenu = document.querySelector(".collapse-site-menu");
  let aboutMe = document.querySelector(".about-me");
  let portfolio = document.querySelector(".portfolio");
  let contactMe = document.querySelector(".contact-me");
  
  function toggleSiteMenu() {
    bgiButn.classList.toggle("back-ground-img-none");
    fButn.classList.toggle("font-none");
    csButn.classList.toggle("color-scheme-none");
    menuButn.classList.toggle("site-menu-dropdown-none");
    collapseMenu.classList.toggle("collapse-site-menu-show");
    aboutMe.classList.toggle("about-me-show");
    portfolio.classList.toggle("portfolio-show");
    contactMe.classList.toggle("contact-me-show");
  }
  
  menuButn.addEventListener("click", closeColorWithMenuButton);
  menuButn.addEventListener("click", closeGalleryWithMenuButton);
  menuButn.addEventListener("click", closeFontWithMenuButton);
  menuButn.addEventListener("click", toggleSiteMenu);
  collapseMenu.addEventListener("click", toggleSiteMenu);
  
  // let color = document.getElementById("color");
  // let defaultVal = color.defaultValue;
  // let currentVal = color.value;
  // let trigger = document.querySelector(".color-picker");
  
  // function getCurrentVal() {
    //   let currentVal = color.value;
    //   console.log(currentVal);
    // }
    
    // trigger.addEventListener("mouseover", getCurrentVal);
    
    // console.log(getCurrentVal.value);
    // console.log(defaultVal);
    // console.log(currentVal);
    
    // changes background image
    let allNewImages = document.querySelectorAll(".image-option");
    
    allNewImages.forEach(element => {
      function changeImage() {
        let newImageArry = element.src.split("0/");
        document.getElementById("hero").style.backgroundImage =
        "url(../" + newImageArry[1] + ")";
      }
      element.addEventListener("click", changeImage);
      element.addEventListener("click", toggleMenu);
      element.addEventListener("click", toggleGallery);
    });

    let allFontOptions = document.querySelectorAll(".font-option");

    allFontOptions.forEach(font => {
      function changeFont() {
        console.log(font.classList[1]);
      }
      font.addEventListener('click', changeFont);
    })
    
    // closes menu when click is outside of the open menu and galleries
    document.addEventListener("click", function(event) {
      let isClickInside = menu.contains(event.target) || gallery.contains(event.target) || fontGallery.contains(event.target) || colorPicker.contains(event.target);
      let menuIconBeingClicked = menuIcon.contains(event.target);
      
    
      if (!isClickInside && menuIsOpen.length == 1 && galleryIsOpen.length == 1) {
        console.log("this is the case")
        toggleGallery();
        toggleMenu();
      } else if (!isClickInside && menuIsOpen.length == 1 && fontGalleryIsOpen.length == 1) {
        toggleFontGallery();
        toggleMenu();
      } else if (!isClickInside && menuIsOpen.length == 1 && colorGalleryIsOpen.length == 1) {
        toggleColorPicker();
        toggleMenu();
      } else if (!isClickInside && menuIsOpen.length == 1 && !menuIconBeingClicked) {
        console.log("is outside");
        toggleMenu();
      } else if (isClickInside && menuIsOpen.length == 1) {
        console.log("is inside");
      }
    });
