
const m=document.querySelector(".menu"),l=document.querySelector(".links");
if(m)m.onclick=()=>l.classList.toggle("open");
document.querySelectorAll(".links a").forEach(a=>a.onclick=()=>l.classList.remove("open"));
const b=document.getElementById("copyPix"),msg=document.getElementById("copyMessage"),keyEl=document.getElementById("pixKey");
if(b && msg && keyEl){const key=keyEl.textContent.trim();b.onclick=async()=>{try{await navigator.clipboard.writeText(key)}catch(e){let i=document.createElement("input");i.value=key;document.body.appendChild(i);i.select();document.execCommand("copy");i.remove()}msg.textContent="Chave PIX copiada";b.textContent="PIX copiado";setTimeout(()=>{msg.textContent="";b.textContent="Copiar chave PIX"},3000)}};