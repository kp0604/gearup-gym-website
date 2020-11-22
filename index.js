burger= document.querySelector(".burger")
nav= document.querySelector(".nav")
navlist = document.querySelector(".navlist")
rightnav= document.querySelector(".rightnav")


burger.addEventListener('click',()=>{


nav.classList.toggle('v-heightresp');
rightnav.classList.toggle('v-visibleresp');
navlist.classList.toggle('v-visibleresp');





})