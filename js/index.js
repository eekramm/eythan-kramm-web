// opens and closes main menu
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".fa-pencil-square");
let closeMenu = document.querySelector(".close-menu");
let aboutMeIcon = document.querySelector(".fa-user-circle-o");
let portfolioIcon = document.querySelector(".fa-briefcase");
let contactIcon = document.querySelector(".fa-address-book-o");

function toggleMenu() {
  menu.classList.toggle("menu-show");
  menuIcon.classList.toggle("edit-btn-hide");
  aboutMeIcon.classList.toggle("about-me-btn-hide");
  portfolioIcon.classList.toggle("portfolio-btn-hide");
  contactIcon.classList.toggle("contact-me-btn-hide");
  console.log("Clicked");
}

closeMenu.addEventListener("click", toggleMenu);
menuIcon.addEventListener("click", toggleMenu);

// opens and closes the img gallery
let gallery = document.querySelector(".img-gallery");
let galleryButton = document.querySelector(".back-ground-img");
let closeGallery = document.querySelector(".close-gallery");
let galleryIsOpen = document.getElementsByClassName(
  "back-ground-img-gallery-show"
);

function toggleGallery() {
  gallery.classList.toggle("back-ground-img-gallery-show");
  console.log(`test equals ${test.length}`);
}

function closeGalleryWithMenu() {
  if (galleryIsOpen.length == 1) {
    gallery.classList.toggle("back-ground-img-gallery-show");
  }
}

galleryButton.addEventListener("click", toggleGallery);
closeGallery.addEventListener("click", toggleGallery);
closeMenu.addEventListener("click", closeGalleryWithMenu);

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

fontGalleryButton.addEventListener("click", toggleFontGallery);
closeFontGallery.addEventListener("click", toggleFontGallery);
closeMenu.addEventListener("click", closeFontGalleryWithMenu);

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

// opens and closes site-menu
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
