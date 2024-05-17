let gmail= document.querySelector(".gmail");
let number=document.querySelector(".number");
let btn= document.querySelector(".btn");
let text= document.querySelector(".text")
let con=document.querySelector(".container")

btn.addEventListener("click",()=>{
        if (gmail.value ==="ayemyataung" && number.value ==="23456") {
                con.style.display="none";
        
                text.innerHTML="Aye Myat Aung အရူး"
        }
})