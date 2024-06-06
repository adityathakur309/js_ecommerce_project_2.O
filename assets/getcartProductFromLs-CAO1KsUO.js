(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let i=`<header>
<nav class="container flex space-between">
  <div class="logo">
    <h3>ADITYA STORE</h3>
    <h5>ORGANIC VILLAGE STORE</h5>
  </div>
  <div class="right">
    <a href="/">home</a>
    <a href="product.html">products</a>
    <a href="contact.html">contact</a>
    <a href="addToCart.html">
      <div class="cart">
        <img src="images/icons/new cart.png" alt="cart image">
        <p class="cart-value">0</p>
      </div>
    </a>
  </div>
  <div class="bar">
    <img src="images/icons/bar.png" alt="menu image" class="menu">
    <img src="images/icons/close.png" alt="close image" class="close">
  </div>
</nav>
</header>`,l=document.querySelector(".header-nav");l.insertAdjacentHTML("afterbegin",i);let n=`<footer class="section-footer">
  <div class="flex space-between container footer-sec">
    <div class="foot-item">
      <div class="logo">
        <h3>ADITYA STORE</h3>
        <h5>ORGANIC VILLAAGE STORE</h5>
      </div>
      <p>Welcome to Aditya EcomStore, Explore Our Range of Organic Village Products for a Healthier, Eco-Friendly Lifestyle. Fresh, Sustainable, and Locally Sourced for Your Well-Being.</p>
      <div class="icons">
        <img src="public/images/icons/logo1.png" alt="">
      </div>
    </div>
    <div class="foot-item">
      <h2>shopping</h2>
      <div class="line"></div>
      <a href="product.html">beans store</a>
      <a href="product.html">pahari cap</a>
      <a href="product.html">sales product</a>
      <a href="product.html">gaddi cap</a>
      <a href="product.html">organic store</a>
    </div>
    <div class="foot-item">
      <h2>Our links</h2>
      <div class="line"></div>
      <a href="index.html">home</a>
      <a href="product.html">products</a>
      <a href="product.html">About us</a>
      <a href="contact.html">contact us</a>
      <a href="addToCart.html">Cart</a>
    </div>
  </div>
</footer>`,d=document.querySelector(".section-footer");d.insertAdjacentHTML("afterbegin",n);const h=()=>{document.querySelector(".bar").addEventListener("click",()=>{document.querySelector("header").classList.toggle("show-nav")})},u=r=>{let a=document.querySelector(".cart-value");a.innerText=r.length},f=()=>{let r=JSON.parse(localStorage.getItem("cartProduct"))||[];return u(r),r};export{f as g,h as n};
