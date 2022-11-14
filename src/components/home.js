import mainLogo from '../img/main-logo.png';
import introImage from '../img/intro-image.jpg';

function createHomeLogo(){
  const element = document.createElement('div');
  element.classList.add('home-logo');
  let homeLogo = new Image();
  homeLogo.src = mainLogo;
  homeLogo.classList.add('main-logo');
  element.appendChild(homeLogo);

  return element;
}

function createIntroSection(){
  const element = document.createElement('div');
  element.classList.add('intro-section');

  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Best bar of the State!';

  const header2 = document.createElement('h2');
  header2.textContent = "Serving the best drinks since 1966.";

  
  const sectionImage = new Image();
  sectionImage.src = introImage;
  sectionImage.classList.add('intro-image');

  const para = document.createElement('h2');
  para.textContent = 'Visit us or Order online!';

  element.appendChild(mainHeader);

  element.appendChild(header2);

  element.appendChild(sectionImage);

  element.appendChild(para);

  return element;
}

function createHomeComponent(){
  let element = document.createElement('div');
  element.classList.add('home');

  element.appendChild(createHomeLogo());

  element.appendChild(createIntroSection());  
  return element;
}

export {createHomeComponent, createHomeLogo};