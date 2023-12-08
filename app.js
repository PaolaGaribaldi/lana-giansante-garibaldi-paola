addEventListener('scroll',(function(){
    let pages = Math.round(this.scrollY/this.window.innerHeight)
    this.document.getElementById('pages_indicator').innerText = '0'+pages;
    this.document.getElementById('chbck'+pages).style.opacity = '100%';
    for (let i = 0; i < 4; i++){
      if(i != pages){
        this.document.getElementById('chbck'+i).style.opacity = '30%';
      }
    }
    if(this.scrollY < 300){
        this.document.getElementById('moving').style.transform = 'rotate(180deg) translateX(3vw) translateY('+((this.scrollY/8)-5) +'vh)';
    }
}))
addEventListener('mousemove',(event) => {
    this.document.getElementById('tab').style.transform = 'translate('+((this.event.clientX)-(window.innerWidth/2))/30+'px,'+((this.event.clientY)-(window.innerHeight/2))/30+'px)';
    this.document.getElementById('tab2').style.transform = 'translate('+((this.event.clientX)-(window.innerWidth/2))/30+'px,'+((this.event.clientY)-(window.innerHeight/2))/30+'px)';
    console.log('translate('+((this.event.clientX)-(window.innerWidth/2))/20+'px,'+((this.event.clientY)-(window.innerHeight/2))/20+'px)')
    console.log(((this.event.clientX)-(window.innerWidth/2))/30+'px,'+((this.event.clientY)-(window.innerHeight/2))/30+'px)');
})