import{n as f,g}from"./getcartProductFromLs-CAO1KsUO.js";typeof process<"u"&&process.platform;const u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=new Uint8Array(64),E=new Uint8Array(128);for(let e=0;e<u.length;e++){const t=u.charCodeAt(e);p[e]=t,E[t]=e}f();g();let m=document.getElementById("name"),o=document.getElementById("email"),c=document.getElementById("subject"),i=document.getElementById("message");function a(e,t){let l=e.parentElement;l.classList.add("error");let r=l.querySelector("span");r.innerText=t}function s(e){e.parentElement.classList.add("success")}function y(){let e=document.querySelectorAll(".input"),t=0;for(let l=0;l<e.length;l++)e[l].classList.contains("success")&&t++;b(e.length-1,t)}function b(e,t){return e===t?(h(),!0):!1}function h(){Email.send({Host:"smtp.elasticemail.com",Username:"rajputru690@gmail.com",Password:"25642E26EF72B801FAD9F318D4A103E1894B",To:"rajputru690@gmail.com",From:"rajputru690@gmail.com",Subject:"Contact form",Body:"Name: "+document.getElementById("name").value+"<br> Email: "+document.getElementById("email").value+"<br> Subject: "+document.getElementById("subject").value+"<br> Message: "+document.getElementById("message").value}).then(t=>{t==="OK"?Swal.fire({title:"Great Job!",text:"Your form has been submitted!",icon:"success"}):Swal.fire({title:"Something went wrong",text:"Your form has not been submitted!",icon:"error"})}),document.querySelectorAll("input").forEach(t=>{t.value=""}),document.querySelector("textarea").value=""}let B=e=>{let t=document.getElementById("name").value.trim(),l=document.getElementById("email").value.trim(),r=document.getElementById("subject").value.trim(),d=document.getElementById("message").value.trim(),n=!0;return t===""?(a(m,"please enter your full name"),n=!1):t.length<4?(a(m,"name should be minimum 4 char"),n=!1):s(m),l===""?(a(o,"please enter your email address"),n=!1):s(o),r===""?(a(c,"please enter a title of your message"),n=!1):s(c),d===""?(a(i,"please enter a message"),n=!1):s(i),n?(y(),!0):!1};document.querySelector("form").addEventListener("submit",e=>{e.preventDefault(),B()});
