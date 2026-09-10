let mogelijkheden = document.querySelector("#mogelijkheden");
let tekst = document.querySelector('#tekst');
let button = document.querySelector('#button');

if(button) {
    button.addEventListener('click', functie);

button.addEventListener('mouseover', function() {
    button.style.color = 'red';
}); 

button.addEventListener('mouseout', function() {
    button.style.color = 'black';
});
}

function functie(){
console.log(tekst.value);

if(tekst.value == '1') {mogelijkheden.style.backgroundImage = "URL('images/1.jpg')";}

else if(tekst.value == '2') {mogelijkheden.style.backgroundImage = "URL('images/2.png')";}
else if(tekst.value == '3') {mogelijkheden.style.backgroundImage = "URL('images/3.jpg')";}
else if(tekst.value == '4') {mogelijkheden.style.backgroundImage = "URL('images/4.png')";}
else if(tekst.value == '5') {mogelijkheden.style.backgroundImage = "URL('images/5.png')";}
else if(tekst.value == '6') {mogelijkheden.style.backgroundImage = "URL('images/6.png')";}
else if(tekst.value == '7') {mogelijkheden.style.backgroundImage = "URL('images/7.jpg')";}
else if(tekst.value == '8') {mogelijkheden.style.backgroundImage = "URL('images/8.jpg')";}
else if(tekst.value == '9') {mogelijkheden.style.backgroundImage = "URL('images/9.png')";}
else if(tekst.value == '10') {mogelijkheden.style.backgroundImage = "URL('images/10.jpg')";}
else if(tekst.value == '11') {mogelijkheden.style.backgroundImage = "URL('images/11.jpg')";}
else if(tekst.value == '12') {mogelijkheden.style.backgroundImage = "URL('images/12.jpg')";}
else if(tekst.value == '13') {mogelijkheden.style.backgroundImage = "URL('images/13.jpg')";}
else if(tekst.value == '14') {mogelijkheden.style.backgroundImage = "URL('images/14.jpg')";}
else if(tekst.value == '15') {mogelijkheden.style.backgroundImage = "URL('images/15.jpg')";}
else if(tekst.value == '16') {mogelijkheden.style.backgroundImage = "URL('images/16.jpg')";}
else if(tekst.value == '17') {mogelijkheden.style.backgroundImage = "URL('images/17.jpg')";}
else if(tekst.value == '18') {mogelijkheden.style.backgroundImage = "URL('images/18.jpg')";}
else if(tekst.value == '19') {mogelijkheden.style.backgroundImage = "URL('images/19.jpg')";}
else if(tekst.value == '20') {mogelijkheden.style.backgroundImage = "URL('images/20.jpg')";}
else if(tekst.value == '21') {mogelijkheden.style.backgroundImage = "URL('images/21.png')";}
else if(tekst.value == '22') {mogelijkheden.style.backgroundImage = "URL('images/22.jpg')";}
else if(tekst.value == '23') {mogelijkheden.style.backgroundImage = "URL('images/23.jpg')";}
else if(tekst.value == '24') {mogelijkheden.style.backgroundImage = "URL('images/24.jpg')";}
else if(tekst.value == '25') {mogelijkheden.style.backgroundImage = "URL('images/25.jpg')";}
else if(tekst.value == '26') {mogelijkheden.style.backgroundImage = "URL('images/26.jpg')";}
else if(tekst.value == '27') {mogelijkheden.style.backgroundImage = "URL('images/27.jpg')";}
else if(tekst.value == '28') {mogelijkheden.style.backgroundImage = "URL('images/28.jpg')";}
else if(tekst.value == '29') {mogelijkheden.style.backgroundImage = "URL('images/29.png')";}
else if(tekst.value == '30') {mogelijkheden.style.backgroundImage = "URL('images/30.jpg')";}
else if(tekst.value == '31') {mogelijkheden.style.backgroundImage = "URL('images/31.jpg')";}

else{mogelijkheden.style.backgroundImage = "URL('images/vraag.png')";}
}

let dekaraktersh = document.querySelector('#dekaraktersh');
let deboekjesh = document.querySelector('#deboekjesh');
let dickbrunah = document.querySelector('#dickbrunah');
let hetnijntjemuseumh = document.querySelector('#hetnijntjemuseumh');

if(dekaraktersh) {
dekaraktersh.addEventListener('mouseenter', function() {
    dekaraktersh.style.color = 'white';
}); 
dekaraktersh.addEventListener('mouseleave', function() {
    dekaraktersh.style.color = 'black';
});
}

if(deboekjesh) {
deboekjesh.addEventListener('mouseenter', function() {
    deboekjesh.style.color = 'white';
}); 
deboekjesh.addEventListener('mouseleave', function() {
    deboekjesh.style.color = 'black';
});
}

if(dickbrunah) {
dickbrunah.addEventListener('mouseenter', function() {
    dickbrunah.style.color = 'white';
}); 
dickbrunah.addEventListener('mouseleave', function() {
    dickbrunah.style.color = 'black';
});
}

if(hetnijntjemuseumh) {
hetnijntjemuseumh.addEventListener('mouseenter', function() {
    hetnijntjemuseumh.style.color = 'white';
}); 
hetnijntjemuseumh.addEventListener('mouseleave', function() {
    hetnijntjemuseumh.style.color = 'black';
});
}

let denijntjeclubh = document.querySelector('#denijntjeclubh');

denijntjeclubh.addEventListener('click', function() {
    if(denijntjeclubh.innerHTML == '<b>De Nijntje Club</b>') {
        denijntjeclubh.innerHTML = '<b>:)</b>';
    }
    else { denijntjeclubh.innerHTML = '<b>De Nijntje Club</b>'; 
    }
});

let product1 = document.querySelector('#product1');
let product2 = document.querySelector('#product2');
let product3 = document.querySelector('#product3');
let product4 = document.querySelector('#product4');
let product5 = document.querySelector('#product5');
let product6 = document.querySelector('#product6');


if(product1) {
product1.addEventListener('mouseenter', function() {
    product1.style.backgroundColor = 'orange';
}); 
product1.addEventListener('mouseleave', function() {
    product1.style.backgroundColor = 'rgb(35, 28, 145)';
});
}

if(product2) {
product2.addEventListener('mouseenter', function() {
    product2.style.backgroundColor = 'orange';
}); 
product2.addEventListener('mouseleave', function() {
    product2.style.backgroundColor = 'rgb(35, 28, 145)';
});
}

if(product3) {
product3.addEventListener('mouseenter', function() {
    product3.style.backgroundColor = 'orange';
}); 
product3.addEventListener('mouseleave', function() {
    product3.style.backgroundColor = 'rgb(255, 218, 56)';
});
}

if(product4) {
product4.addEventListener('mouseenter', function() {
    product4.style.backgroundColor = 'orange';
}); 
product4.addEventListener('mouseleave', function() {
    product4.style.backgroundColor = 'rgb(255, 218, 56)';
});
}

if(product5) {
product5.addEventListener('mouseenter', function() {
    product5.style.backgroundColor = 'orange';
}); 
product5.addEventListener('mouseleave', function() {
    product5.style.backgroundColor = 'rgb(171, 19, 24)';
});
}

if(product6) {
product6.addEventListener('mouseenter', function() {
    product6.style.backgroundColor = 'orange';
}); 
product6.addEventListener('mouseleave', function() {
    product6.style.backgroundColor = 'rgb(171, 19, 24)';
});
}