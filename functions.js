//give a name to a step- like TOC or book outline

function begin() {
    console.log("IN THE BEGINNING...") ;
}
function middle(){
    console.log("INTO THE HEART OF CODING...")
}
function end(){
    console.log("WRAPPING IT UP.Fini.")
}
//invoke or call
begin()
middle()
end()

/////////////////////////////////////////
function greet(who,age){
     console.log('Hey Hey #{who}!!!')
      if(age>40){
        console.log("O man you're 30!");
      }else{
        console.log("All the time in the world.")
      }
      }
greet("Myrvelte",30)
greet("Class",30)

console.log(new Date(0));