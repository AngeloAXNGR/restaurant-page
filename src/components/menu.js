function createMenuComponent(){
  let element = document.createElement('div');
  element.classList.add('menu');
  element.textContent = 'Menu';
  return element;
}

export {createMenuComponent};