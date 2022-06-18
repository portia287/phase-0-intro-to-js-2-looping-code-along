function writeCards(names, event) {
   
    const messages = [];
    
    for(let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        
    }
    return messages;
}
console.log(writeCards(["Guadlupe", "Ollie", "Aki"], "surprise"));

function countDown(){
    for (let i = 0; i <=10; i++){
        console.log(i)
    }
    

 }