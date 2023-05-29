const ratings1=document.querySelectorAll(".rating1")
const ratings2=document.querySelectorAll(".rating2")
const ratings3=document.querySelectorAll(".rating3")
const btn=document.getElementById("btn1")
const container=document.getElementById("container")

let selectedRating= " ";

ratings1.forEach((ratings1)=>{
    ratings1.addEventListener("click",(event)=>{
        removeAction();
        selectedRating=event.target.innerText||event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })

})
ratings2.forEach((ratings2)=>{
    ratings2.addEventListener("click",(event)=>{
        removeAction()
        selectedRating=event.target.innerText||event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })

})
ratings3.forEach((ratings3)=>{
    ratings3.addEventListener("click",(event)=>{
        removeAction()
        selectedRating=event.target.innerText||event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })

})

btn.addEventListener("click",()=>{
    if(selectedRating !==" "){
      container.innerHTML=`<strong>Thankyou!</strong>
      <br><br>
      <strong>FEEDBACK:${selectedRating}</strong>
      <p>we will use your feedback to improve our customer support.`
    }
})

function removeAction(){
    ratings1.forEach((rating1)=>
    {
        rating1.classList.remove("active")

    })
}
function removeAction(){

    ratings2.forEach((rating2)=>
    {
        rating2.classList.remove("active")

    })
}

function removeAction(){
    ratings3.forEach((rating3)=>
    {
        rating3.classList.remove("active")

    })
    
}




