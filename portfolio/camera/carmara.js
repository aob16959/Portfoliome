const scrollAppear1 = () => {
    const inTros1 = document.querySelector('.features .cards .card01')
    const inTroProsition = inTros1.getBoundingClientRect().top
    const screenPrositon = window.innerHeight;  
      if(inTroProsition < screenPrositon){
        inTros1.classList.add('card01-show')
      }
  }
   window.addEventListener('scroll',scrollAppear1)


   const scrollAppear2 = () => {
    const inTros2 = document.querySelector('.features .cards .card02')
    const inTroProsition = inTros2.getBoundingClientRect().top
    const screenPrositon = window.innerHeight;  
      if(inTroProsition < screenPrositon){
        inTros2.classList.add('card02-show')
      }
  }
   window.addEventListener('scroll',scrollAppear2)

   const scrollAppear3 = () => {
    const inTros3 = document.querySelector('.features .cards .card03')
    const inTroProsition = inTros3.getBoundingClientRect().top
    const screenPrositon = window.innerHeight;  
      if(inTroProsition < screenPrositon){
        inTros3.classList.add('card03-show')
      }
  }
   window.addEventListener('scroll',scrollAppear3)



