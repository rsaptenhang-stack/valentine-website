const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const msg = document.getElementById("msg");

/* POPUP */
function showPopup(text){
  popup.style.display="flex";
  popupText.innerHTML=text;
}

function closePopup(){
  popup.style.display="none";
}

/* YES CLICK → FIREWORKS */
yesBtn.onclick = () => {

  showPopup("Yaaay 😍 I love you sooo much ❤️");

  msg.style.display="block";

  launchFireworks();
};

/* NO CLICK → RUN AWAY */
noBtn.onclick = (e) => {

  e.preventDefault();

  const x = Math.random()*(window.innerWidth-120);
  const y = Math.random()*(window.innerHeight-60);

  noBtn.style.position="fixed";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";

  showPopup("Don’t say NO 😭 Just click YES ❤️");
};

/* FIREWORKS FUNCTION */
function launchFireworks(){

  for(let i=0;i<120;i++){

    let conf=document.createElement("div");
    conf.className="confetti";

    conf.style.left=Math.random()*100+"vw";
    conf.style.background=
      `hsl(${Math.random()*360},100%,50%)`;

    conf.style.animationDuration=
      (2+Math.random()*2)+"s";

    document.body.appendChild(conf);

    setTimeout(()=>conf.remove(),4000);
  }
}
