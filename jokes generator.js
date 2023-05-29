
const btn1=document.getElementById("btn")
const joke=document.getElementById("joke")
const spinner=document.getElementById("spinner")
const apikey="rWtpI9jHmFI2PB/RRyc1Rg==Hc50J5eeocSRR06u"
const options={
    method:"GET",
    headers:{
        "X-Api-key":apikey,
    },
}
const apiurl="https://api.api-ninjas.com/v1/jokes?limit=1";


async function getjoke(){

    try {
        joke.innerText="loading..."
        btn1.disabled=true
        btn1.innerText="🔃"
        const response=await fetch(apiurl,options)
        const data=await response.json()
       
        btn1.disabled=false
        btn1.innerText="GENERATE JOKE"
        joke.innerText=data[0].joke
        
    } catch (error) {
        joke.innerText="OOPS!something went wrong...check your internet connectivity"

        
        
    }

  
}
btn1.addEventListener("click",getjoke)





