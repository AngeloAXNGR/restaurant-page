function navbarComponent(){
  const element = document.createElement('header');
  element.classList.add('navbar');

  // Three Buttons
  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-buttons');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-buttons');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-buttons');
  contactButton.textContent = 'Contact';

  element.append(homeButton, menuButton, contactButton);

  return element
}

export {navbarComponent};