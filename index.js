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

function toggleGallery() {
  gallery.classList.toggle("back-ground-img-gallery-show");
}

galleryButton.addEventListener("click", toggleGallery);
closeGallery.addEventListener("click", toggleGallery);

// opens and closes the img gallery
let fontGallery = document.querySelector(".font-gallery");
let fontGalleryButton = document.querySelector(".font");
let closeFontGallery = document.querySelector(".close-fonts");

function toggleFontGallery() {
  fontGallery.classList.toggle("font-gallery-show");
}

fontGalleryButton.addEventListener("click", toggleFontGallery);
closeFontGallery.addEventListener("click", toggleFontGallery);

// opens and closes the color picker
let colorPicker = document.querySelector(".color-gallery");
let colorPickerButton = document.querySelector(".color-scheme");
let closeColorPicker = document.querySelector(".close-color");

function toggleColorPicker() {
  colorPicker.classList.toggle("color-gallery-show");
}

colorPickerButton.addEventListener("click", toggleColorPicker);
closeColorPicker.addEventListener("click", toggleColorPicker);
