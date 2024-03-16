
const colors = ["#fff","red","green","violet","blue","#eee"," #c94a4a","#61c23e"
,"rgb(95, 218, 208)","rgb(217, 255, 0)"]

const btn = document.getElementById("btn")
const colorCode = document.getElementById("code")
const page = document.getElementById("page")

btn.addEventListener("click",function(){
    const num = getRandomNumber();
  

    page.style.backgroundColor = colors[num];

    colorCode.textContent = colors[num];
    colorCode.style.color = colors[num]
    

});
const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length)
}







