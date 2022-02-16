export class FlippingCells{
  constructor(el){
    this.sells = el.querySelectorAll('.colls__item')
    this.button = el.querySelector('.button')
    this.list = el.querySelector('.informer')
    this.game = false;
   this.installListeners();

  }


  initInterval(){
    const iterator = 0;
   const interval = setInterval(()=>{
      if( iterator ===  this.sells.length){
        this.button.innerText = 'clear sells'
       clearInterval(interval) 
       alert('completed')
     }else{
      this.sells[iterator].style.transform = 'scale(1,-1)'
      iterator +1
     }
     },500)
  }

  startTransform(){
    this.game = true;
    this.button.innerText = 'in progress'
    this.initInterval()
  }

  clearField(){
    this.game = false;
    this.button.innerText = 'Start'
    this.sells.forEach((element)=>{
      element.style.transform = 'scale(1,1)'
     })
     this.iterator = 0;

 }

 installListeners(){
    this.button.addEventListener('click', ()=> {
      this.game === false ? this.startTransform() : this.clearField()
    })
    this.sells.forEach((el, index)=>{

    el.addEventListener('transitionend',()=>{
        this.list.innerHTML += `
        <li class="informe__item">Cell-${index+1} animation end</li>
        `
        this.list.scrollTop = this.list.scrollHeight
      })
    el.addEventListener('transitionstart',()=>{
      this.list.innerHTML +=  `
      <li class="informe__item">Cell-${index+1} animation start</li>
      `
      this.list.scrollTop = this.list.scrollHeight
    })
    })
    
  } 
  }


  
