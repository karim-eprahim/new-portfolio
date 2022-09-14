let ptn =document.querySelector(".menu-ptn")
let nav =document.querySelector(".navbar")
let round =document.querySelectorAll('.round a')
let bage =document.querySelector(".bage")
let menu =document.querySelectorAll(".menu-ptn span")

let scrol =document.querySelector(".scroll")
/*********** */
let skills =document.querySelector(".insights")
let circls = document.querySelectorAll(".progress svg circle")
//************* */


// console.log(menu)

ptn.onclick=function(){
    nav.classList.toggle("open")
    ptn.classList.toggle("close")

}
for(let i=0; i<round.length;i++){
    round[i].onclick=()=>{
        nav.classList.toggle("open")
                ptn.classList.remove("close")
    }
}

window.onscroll=()=>{
    if(window.scrollY>=30){
        scrol.style.cssText=`visibility:visible; z-index: 1;`
    }else{
        scrol.style.cssText=`visibility:hidden;`
    }

    // skills animation 

    if(window.scrollY >= skills.offsetTop -420){

        circls.forEach(span => {
            span.style.strokeDashoffset = span.dataset.dashoffset;
        });
    }
}
scrol.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })

}
