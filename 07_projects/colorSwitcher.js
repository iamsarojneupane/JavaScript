const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {             // arrow function
   console.log(button);

// event listener for each button 
   button.addEventListener('click', function (handleClick) { // (event)
      console.log(handleClick)
      console.log(handleClick.target)                        // (event.target)
      
      switch (handleClick.target.id) {
         case 'grey':
            body.style.backgroundColor = handleClick.target.id;
            break;

         case 'white':
            body.style.backgroundColor = handleClick.target.id;
            break;

         case 'blue':
            body.style.backgroundColor = handleClick.target.id;
            break;

         case 'yellow':
            body.style.backgroundColor = handleClick.target.id;
            break;
            
         case 'black':
            body.style.backgroundColor = handleClick.target.id;
            break;
      
         default:
            break;
      }
   })
});

