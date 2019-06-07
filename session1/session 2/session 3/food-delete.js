 let foods =["com","pho","ghe","rau","chao"]
  
    foods.forEach((food, index) => {
        console.log('${index+1}.$(food}');
   })
   let answer = prompt("do you want delete? (Y/N)");

    if (answer.tolowerCase() === 'y') {
        let indexOrvalue = prompt('delete by position or value? (1 or ))
       if (indexOrvale === '1'){
           let position = prompt('Position?');
           let foodNum = prompt('Numbers of food?');
           food.splice(position - 1, foodNum);
       }  else if (indexOrvalue === '2') {
           let value = prompt('value?');
           let foodNUm = prompt('Number of food?');
           let indexOfFood = foods.indexof
       }
    }   else ì (answer.tolowercase())
        console.log("good bye!");
    } else  {
         console.log("get out!");
     }
        
      
            
                 
                 
                 
              