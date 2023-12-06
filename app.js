addEventListener('scroll',(function(){
    let pages = Math.round(this.scrollY/this.window.innerHeight)
    this.document.getElementById('pages_indicator').innerText = '0'+pages;
    this.document.getElementById('chbck'+pages).style.opacity = '100%';
    for (let i = 0; i < 3; i++){
      if(i != pages){
        this.document.getElementById('chbck'+i).style.opacity = '30%';
      }
    }
    if(this.scrollY < 300){
        this.document.getElementById('moving').style.transform = 'rotate(180deg) translateX(3vw) translateY('+((this.scrollY/8)-5) +'vh)';
    }
}))