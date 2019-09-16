// opens and closes main menu
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".fa-pencil-square");
let closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu-show");
  menuIcon.classList.toggle("edit-btn-hide");
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
