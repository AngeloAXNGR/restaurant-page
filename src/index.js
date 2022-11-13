import { createHomeComponent } from './components/home';
import { createContactComponent } from './components/contact';
import { createMenuComponent } from './components/menu';
import './styles/style.css';


let navbar = navbarComponent();
let buttons = Array.prototype.slice.call(navbar.querySelectorAll('.nav-buttons'));

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let content = mainComponent();

document.body.appendChild(navbar);
document.body.appendChild(content);

function navbarComponent(){
  const element = document.createElement('header');
  element.classList.add('navbar');

  // Three Buttons
  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-buttons');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild(createHomeComponent());
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-buttons');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild(createMenuComponent());
  });


  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-buttons');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild(createContactComponent());
  });

  element.append(homeButton, menuButton, contactButton);

  return element
}

function mainComponent(){
  let element = document.createElement('div');
  element.classList.add('content');


  // display home component on initial load
  buttons[0].classList.add('active');
  element.appendChild(createHomeComponent());
  return element;
}

