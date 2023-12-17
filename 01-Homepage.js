let list = [{
    id: "1",
    Image: "/Assets/Profile_1.jpg",
    name: "AJINKYA SAHU",
    info: "Its name itself defines the variety of food available here. Everything was good. Food, service, ambience was nice. I only tried Idli here. Staff was also good."
},
{
    id: "2",
    Image: "/Assets/Profile_2.jpg",
    name: "SANKET JANAI",
    info: "Uttar dakshin is currently my favourite place for south indian food. Its pure veg restaurant !! Ambience is superb, food is awesome, value for money. Its all over a package of good food and good mood."
},
{
    id: "3",
    Image: "/Assets/Profile_3.jpg",
    name: "SHRIRAM PADHYE",
    info: "The thing which has made this place so popular is of course the FOOD. They have combos for North Indian food but their south Indian menu is more vast with lots of options."
},
{
    id: "4",
    Image: "/Assets/Profile_4.jpg",
    name: " RAJDEEP BASU ",
    info: "Fantastic service, amazing combinations of tastes and garnishing for regular items. Other than one all were uniquely good.. and fresh. Best likes – Open Dosa, Thatte Idlli, Mixed Uttapam… want to go again.."
},
{
    id: "5",
    Image: "/Assets/Profile_5.jpg",
    name: "PANKAJ JAIN",
    info: "Had dosa, idli and utapum. The taste was very good and prices are competitive. Service was also good. Best part they have bigger place and sitting available."
},
{
    id: "6",
    Image: "/Assets/Profile_6.jpg",
    name: "RIYA RUCHANDANI",
    info: "Nice place for breakfast and a South Indian lover I had most of the dosa here they have a different variety and awesome taste."
}]


// // list.forEach((e)=>{
// //     console.log(e)

// //     let box = document.querySelector(".Card_4")

// //     let data = document.createElement("div")
// //     data.className="Data"

// //     data.innerHTML = `
// //     <img src="${e.Image}">
// //     <h1>${e.name}</h1>
// //     <p>${e.info}</p>
// //     <h2>,,</h2>
// //     `
// //     box.append(data)



// // })


let im = document.querySelector("#IMGE")
let Nam = document.querySelector("#NAM")
let info = document.querySelector("#cInfo")
let i = 0;

function swh(e) {
    im.src = e[i].Image
    Nam.innerText = e[i].name
    info.innerText = e[i].info
    console.log(i)
    console.log(Nam.innerText)
    console.log(info.innerText)
    console.log(i)
}



setTimeout(swh(list),i++, 1000)


// // setInterval(swh(list), 1000)




// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
