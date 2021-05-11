// // Movement Animation to happen
// const card = document.querySelector("#sneaker1");
// const product1 = document.querySelector(".product1");

// //Moving Animation Event
// product1.addEventListener('mousemove', (e) =>{
    
//     let xAxis = (window.innerWidth / 2 - e.pageX);
//     let yAxis = (window.innerHeight / 2 - e.pageY);
//     console.log(yAxis, xAxis)
//     card = 'rotateY(' + yAxis +') rotateX(' + xAxis + ')';
// })

//Movement Animation to happen
const card = document.getElementById('#sneaker1');
const product1 = document.getElementById('product1');

//Items
const title = document.getElementById('tittle');
const sneaker = document.getElementById('sneaker-img');
const purchase = document.getElementById('buy');
const description = document.getElementById('description');
const sizes = document.getElementById('size');

card.addEventListener( "mousemove", (e) => { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform =  'rotateY(' + yAxis + 'deg) rotateX('+ xAxis +'deg)';
});

//Animate In
card.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    //Popout
    title.style.transform = 'translateZ(20px)';
    title.style.textShadow = '10px 5px 10px black';

    sneaker.style.transform = 'translateZ(50px)';
    sneaker.style.textShadow = '10px 5px 10px black';

    purchase.style.transform = 'translateZ(20px)';
    purchase.style.boxShadow = '10px 0 20px black';

    sizes.style.transform = 'translateZ(50px)';
    sizes.style.boxShadow = '10px 5px 10px black';

    description.style.transform = 'translateZ(10px)';
    description.style.boxShadow = '10px 5px 10px black';
})
//Animate Out
card.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    //Popback
    title.style.transform = "translateZ(0)";
    title.style.textShadow = 'none';

    purchase.style.boxShadow = 'none';
})

const people = [
    {
    name: 'bob',
    location: { street: '123 main Street',
    timezone : {offset: '+7:00'}},
    },
    {
        name: 'peter',
        location: { street: '123 Pine Street'} 
    },
    {
        name: 'susan',
        location: { street: '123 Apple Street',timezone: {offset: '+7:00'}} 
    }
]

console.log(people && people.timezone)