/* empty css                      */import{f as y}from"./assets/vendor-2b44ac2e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.getElementById("datetime-picker"),i=document.querySelector("button[data-start]"),h=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");let d=null,u=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){const o=n[0];o<=new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),i.disabled=!0):(d=o,i.disabled=!1)}};y(l,v);i.addEventListener("click",()=>{d&&(w(d),l.disabled=!0,i.disabled=!0)});function w(n){clearInterval(u),u=setInterval(()=>{const o=new Date().getTime(),r=n-o;if(r<=0)clearInterval(u),l.disabled=!1,f(0,0,0,0);else{const{days:s,hours:e,minutes:t,seconds:c}=I(r);f(s,e,t,c)}},1e3)}function I(n){const t=Math.floor(n/864e5),c=Math.floor(n%864e5/36e5),m=Math.floor(n%36e5/6e4),p=Math.floor(n%6e4/1e3);return{days:t,hours:c,minutes:m,seconds:p}}function f(n,o,r,s){h.textContent=a(n),g.textContent=a(o),S.textContent=a(r),b.textContent=a(s)}function a(n){return String(n).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map