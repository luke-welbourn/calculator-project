(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();function m(){const e=document.querySelector(".light__bright"),t=document.querySelector(".light__dark"),r=document.querySelector("body");if(!e||!t||!r)throw new Error("issue with a query selector");e.addEventListener("click",()=>{r.classList.add("light-mode"),r.classList.remove("dark-mode")}),t.addEventListener("click",()=>{r.classList.add("dark-mode"),r.classList.remove("light-mode")})}const f=document.querySelectorAll(".input__button"),l=document.querySelector(".screen__display"),d=document.querySelector(".screen__sum"),s=[];let u="";if(!f||!l||!d)throw new Error("issue with a query selector");const h=e=>{if(e==="0"||e==="."||e==="1"||e==="2"||e==="3"||e==="4"||e==="5"||e==="6"||e==="7"||e==="8"||e==="9")return!0},a=e=>{const t=s[s.length-1];t&&t.includes(".")&&!isNaN(Number(e))||h(e)===!0&&t&&!isNaN(Number(t))?s[s.length-1]+=e:s.push(e),d.innerText=s.join(" ")},p=()=>{s.length=0,d.innerText="",u=""},g=()=>{const e=s.join(" "),t=e.match(/[+\-*/]/g),r=e.split(/[+\-*/]/g).map(Number);let o=r[0];if(!t||!r)throw new Error("problem with calculate sum array generation");for(let n=0;n<t.length;n++){const i=t[n],c=r[n+1];switch(i){case"+":o+=c;break;case"-":o-=c;break;case"*":o*=c;break;case"/":o/=c;break}}return o},y=e=>{const t=["+","-","*","/"],r=["1","2","3","4","5","6","7","8","9","0","."];e==="."&&u.includes(".")||(t.includes(e)?(l.innerText=e,u=""):r.includes(e)&&(u+=e,l.innerText=u))},b=()=>{const e=s[s.length-1],r=parseInt(e)*-1;isNaN(Number(e))||(s[s.length-1]=r.toString(),d.innerText=s.join(" "),l.innerText=r.toString())};f.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.value;if(t=="ac")l.innerText="",p();else if(t==="+-")b();else if(t==="%")l.innerHTML="&#x1F341;",a("This feature is currently being developed");else if(t==="reverse")l.innerHTML="&#x1F341;",a("This feature is currently being developed");else if(t==="="){const r=g();l.innerText=`${r}`,s.length=0,d.innerText=`${r}`,s.push(`${r}`),u=""}else y(`${t}`),a(`${t}`)})});m();