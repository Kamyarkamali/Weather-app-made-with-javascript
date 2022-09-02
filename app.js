// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric

const form=document.querySelector(".form");
console.log(form);

const input=document.querySelector("input");

const msg=document.querySelector(".msg");

const ul=document.querySelector("ul");

// api
const apiKey="3e1d1194ea3cf297e78cc150dab88d61";

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let inputValue=input.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
        const {main,name,sys,weather}=data
        const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        const li=document.createElement("li");
        inputValue=""
        li.classList.add("city")
        
        const markp=`
        <div class="fainal">
        <h2 class='ncity-name' data-name=${name},${sys.country}>
        <span>${name}</span>
        <span>${sys.country}</span>
        </h2>
        <div class='city-temp'>${Math.round(main.temp)}</div>
        <figure>
        <img class='city-icon' src='${icon}' alt='city'>
        </figure>
        </div>
        `
        li.innerHTML=markp;
        ul.appendChild(li)
        msg.innerHTML=""
        input.value=""
        })
        .catch(()=>{
            msg.innerHTML="لطفا در وارد کردن نام شهر دقت کنید"
        })
})
