"use strict";

//  navigation
const navMenu = document.querySelector("nav");
const btnShop = document.getElementById("header_left");
//  serch bar
const searchMenu = document.getElementById("search_overlay");
const openSearch = document.getElementById("header_right_icon");
const closeSearch = document.getElementById("close_search");
//  shoping cart
const cartMenu = document.getElementById("shop_cart");
const openCart = document.getElementById("cart");
const closeCart = document.getElementById("close_cart");

btnShop.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("appear");
});

openSearch.addEventListener("click", () => {
  searchMenu.classList.add("visible");
});

closeSearch.addEventListener("click", () => {
  searchMenu.classList.remove("visible");
});

openCart.addEventListener("click", () => {
  cartMenu.classList.add("sight");
});

closeCart.addEventListener("click", () => {
  cartMenu.classList.remove("sight");
});
