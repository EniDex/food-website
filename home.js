const menu=[
    {
        id:1,
        title:"buttermilk",
        category:"breakfast",
        Price:9.55,
        Image:"images/berry.jpg",
        dsc:"this is the best breakfast, its nutritios and healthy to the body"
        
    },

    {
        id:2,
        title:"butter cream",
        category:"Lunch",
        Price:8.55,
        Image:"images/eggs.jpg",
        dsc:"this is the best breakfast, its nutritios and healthy to the body"
        
    },
    {
        id:3,
        title:"Cake",
        category:"dinner",
        Price:10.55,
        Image:"images/noodles.jpg",
        dsc:"this is the best breakfast, its nutritios and healthy to the body"
        
    },
    {
        id:4,
        title:"Bean Cake",
        category:"breakfast",
        Price:7.55,
        Image:"images/berry.jpg",
        dsc:"this is the best breakfast, its nutritios and healthy to the body"
        
    },
    {
        id:5,
        title:"creamPie",
        category:"Lunch",
        Price:11.55,
        Image:"images/spoon.jpg",
        dsc:"this is the best breakfast, its nutritios and healthy to the body"
        
    },
        
    {
        id:6,
        title:"LunchPie",
        category:"Dinner",
        Price:16.55,
        Image:"images/spoon.jpg",
        dsc:"this is the best breakfast, its nutritios and healthy to the body"
        
    },

]

const Container=document.querySelector(".container");
const Btns=document.querySelector(".btn");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu)
});
//filter tru the menu items
Btns.forEach(function(btn){
btn.addEventListener("click",function(e){
const category=e.currentTarget.dataset.id;
const menuCategory=menu.filter(function(menuItem){
    if(menuItem.category===category){
        return menuItem
    }
});
if(category==="all"){
displayMenuItems(menu);
}else{
    displayMenuItems(menuCategory);
}
});
});


function displayMenuItems(menuitems){
    let displayMenu=menuitems.map(function(item){
        return `<div class="first-slide">
        <div class="div">
        <div><img class="image" src=${item.Image}></div>
    <p class="butter">${item.title}</p>
        <p class="dollar">$${item.Price}</p>
        
    </div>
    ${item.dsc}
    </div>`

    });
displayMenu=displayMenu.join("");
Container.innerHTML=displayMenu; 
}