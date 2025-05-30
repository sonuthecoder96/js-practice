(function chai(){
    //named ifie
    console.log(`DB CONNECTED`);
})();//explicitly mention semicolon to off this

((name)=>{
    console.log(`DB CONNECTED2 ${name}`);
})('sonu')