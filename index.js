let buttons = document.querySelector(".buttons")
let btn = document.querySelectorAll("span")
let display = document.getElementById("display")


for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function() {
        if(this.innerHTML=="="){
            display.innerHTML=eval(display.innerHTML)
        }else if(this.innerHTML=="AC"){
            display.innerHTML= ""
        }
        else if(this.innerHTML=="Del"){
            display.innerHTML=display.innerHTML.slice(0, -1)
        }
        else{
            var calc = this.innerHTML

            if (["+", "-", "*", "/"].includes(calc)) {
                display.style.direction = "ltr";
            } 
            else {
                display.style.direction = "rtl";
            }

            display.innerHTML+=calc

            display.scrollLeft = display.scrollWidth;
        }
    })
}
