function myFirst(){
    myDisplayer("Good bye");
}

function mySecond(callback){
    myDisplayer("Hello");
    callback();
}

function myDisplayer(message){
    console.log(message);
}

mySecond(myFirst);

console.log("Paragraf 1");
setTimeout(() => {
    console.log("Paragraf 2");
}, 5000);
console.log("Paragraf 3");
console.log("Paragraf 4");
console.log("Paragraf 5");
console.log("Paragraf 6");

function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

function pembagian(num1, num2){
    try{
        if (arguments.length < 2){
            throw new Error("input harus 2 angka");
        }
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error("input harus angka")
        }
        if (num2 === 0){
            throw new Error("angka tidak boleh 0")
        }
        const result = num1/num2;
        return result;
    } catch(error){
        console.error("error :", error.message);
        return null;
    }
}

console.log(pembagian(30, 3));