var normal = "#ADA480";
var fighting = "#C22F26";
var flying = "#B49AF6";
var poison = "#A43FA4";
var ground = "#DEBE63";
var rock = "#B49E38";
var bug = "#A8B531";
var ghost = "#6E5391";
var steel = "#B8B5CF";
var fire = "#F07D33";
var water = "#6D88F8";
var grass = "#81CB5B";
var electric = "#E9D436";
var psychic = "#FF598D";
var ice = "#9AD9DA";
var dragon = "#723EFC";
var dark = "#705749";
var fairy = "#E1A4E1";


var $ = document.querySelector.bind(document);

const searchValue = $('.pok__heading-search');
const random = $('.pok__heading-random');
const img = $('.pok__body-image img');
const parentImage = $('.pok__body-image');
const load = $('.load');
const id = $('.pok__id');
const namePok = $('.pok__name');
const height = $('.pok__height');
const weight = $('.pok__weight');
const ability = $('.pok__ability');
const type1 = $('.text_type1');
const type2 = $('.text_type2');

window.onload = function() {
	load.style.display = 'none';
}
async function render(searchStr){
    search = searchStr.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
    if(!search){
        img.src = ''
        id.innerText = ''
        namePok.innerText = ''
        height.innerText = ''
        weight.innerText = ''
        ability.innerText = ''
        type1.innerText = ''
        type2.innerText = ''
    }
    await fetch(url)
    .then(status)
    .then((res) => res.json())
    .then((value) => {
        img.src = value.sprites.front_default;
        id.innerText = value.id;
        namePok.innerText = value.name.charAt(0).toUpperCase() + value.name.slice(1); //slice có tác dụng lấy ra các phần tử từ vị trí nhập vào 
        height.innerText = (value.height / 10) + '(m)';
        weight.innerText = (value.weight / 10) + '(kg)';
        ability.innerText = value.abilities[0].ability.name.charAt(0).toUpperCase() + value.abilities[0].ability.name.slice(1);
        type1.innerText = value.types[0].type.name.toUpperCase();
        type2.innerText = value.types[1].type.name.toUpperCase();   
        console.log(value.types[1].type.name)
        getTypeColour1(value.types[0].type.name);
        getTypeColour2(value.types[1].type.name);
    })
    .catch(error => {
        return Promise.reject()
    })
}
function status(res) {
    if (!res.ok) {
        img.src = ''
        id.innerText = ''
        namePok.innerText = ''
        height.innerText = ''
        weight.innerText = ''
        ability.innerText = ''
        type1.innerText = ''
        type2.innerText = ''
    }
    return res;
}
render('mewtwo');

searchValue.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        value = searchValue.value.trim();
        render(value);
        searchValue.value = '';
    }
})

//Random
function renderRD(searchStr){
    search = searchStr;
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
    if(!search){
        img.src = ''
        id.innerText = ''
        namePok.innerText = ''
        height.innerText = ''
        weight.innerText = ''
        ability.innerText = ''
        type1.innerText = ''
        type2.innerText = ''
    }
    fetch(url)
    .then((res) => res.json())
    .then((value) => {
        img.src = value.sprites.front_default;
        id.innerText = value.id;
        namePok.innerText = value.name.charAt(0).toUpperCase() + value.name.slice(1); //slice có tác dụng lấy ra các phần tử từ vị trí nhập vào 
        height.innerText = (value.height / 10) + '(m)';
        weight.innerText = (value.weight / 10) + '(kg)';
        ability.innerText = value.abilities[0].ability.name.charAt(0).toUpperCase() + value.abilities[0].ability.name.slice(1);
        type1.innerText = value.types[0].type.name.toUpperCase();
        type2.innerText = value.types[1].type.name.toUpperCase();
        getTypeColour1(value.types[0].type.name);
        getTypeColour2(value.types[1].type.name);
    })
}
random.addEventListener('click', function(){
    value = Math.floor(Math.random() * 1000);
    renderRD(value);
})


//Color

function changeBg1(value){
    type1.style.backgroundColor = value;
}
function changeBg2(value){
    type2.style.backgroundColor = value;
}
function getTypeColour1(type) {
	var pokeType = type;
	
	switch (pokeType) {
		case "normal":
			changeBg1(normal);
    	break;
			
  	    case "fighting":
    	changeBg1(fighting);
			break;
		
		case "flying":
    	changeBg1(flying);
			break;
			
		case "poison":
    	changeBg1(poison);
			break;
			
		case "ground":
    	changeBg1(ground);
			break;
			
		case "rock":
    	changeBg1(rock);
			break;
			
		case "bug":
    	changeBg1(bug);
			break;
			
		case "ghost":
    	changeBg1(ghost);
			break;
			
		case "steel":
    	changeBg1(steel);
			break;
			
		case "fire":
    	changeBg1(fire);
			break;
		
		case "water":
    	changeBg1(water);
			break;
			
		case "grass":
    	changeBg1(grass);
			break;
					
		case "electric":
    	changeBg1(electric);
			break;
					
		case "psychic":
    	changeBg1(psychic);
			break;
					
		case "ice":
    	changeBg1(ice);
			break;
					
		case "dragon":
    	changeBg1(dragon);
			break;
					
		case "fairy":
    	changeBg1(fairy);
			break;
			
		case "dark":
    	changeBg1(dark);
			break;
	}
}

function getTypeColour2(type) {
	var pokeType = type;
	
	switch (pokeType) {
		case "normal":
			changeBg2(normal);
    	break;
			
  	    case "fighting":
    	changeBg2(fighting);
			break;
		
		case "flying":
    	changeBg2(flying);
			break;
			
		case "poison":
    	changeBg2(poison);
			break;
			
		case "ground":
    	changeBg2(ground);
			break;
			
		case "rock":
    	changeBg2(rock);
			break;
			
		case "bug":
    	changeBg2(bug);
			break;
			
		case "ghost":
    	changeBg2(ghost);
			break;
			
		case "steel":
    	changeBg2(steel);
			break;
			
		case "fire":
    	changeBg2(fire);
			break;
		
		case "water":
    	changeBg2(water);
			break;
			
		case "grass":
    	changeBg2(grass);
			break;
					
		case "electric":
    	changeBg2(electric);
			break;
					
		case "psychic":
    	changeBg2(psychic);
			break;
					
		case "ice":
    	changeBg2(ice);
			break;
					
		case "dragon":
    	changeBg2(dragon);
			break;
					
		case "fairy":
    	changeBg2(fairy);
			break;
					
		case "dark":
    	changeBg2(dark);
			break;
	}
}