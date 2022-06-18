const names = ["Guadalupe","Ollie","Aki"];
const events = "wedding";
function writeCards(names,events){
    let thankYourCards = []
    for (let i = 0; i < names.length;i++)
{
    thankYourCards.push(`Thank you,& {names[i]}, for the wonderful & {events} gift!`)
}
return thankYourCards

};
function countDown(p){
    let count = p 
    while (count>=0){
        console.log(count);
        count -= 1
    }


}


