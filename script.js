const log = console.log.bind(document)
const body = document.body
const button = document.getElementById('btn')
const button1 = document.getElementById('btn2')
const output = document.querySelector('.count')
let counter = 0



    button.addEventListener('click', () =>{
    
    counter++
     output.textContent = counter
     if (counter > 0) {
        document.getElementById('btn2').removeAttribute('disabled')
     }
})




button1.addEventListener('click', () =>{
    
    

     if(counter === 0){
        document.getElementById('btn2').disabled=true
    }
    else{

        document.getElementById('btn2').removeAttribute('disabled')
        counter--
    output.textContent = counter;

         

          

    }

   
})

    