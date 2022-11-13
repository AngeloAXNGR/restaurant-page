function createContactComponent(){
  let element = document.createElement('div');
  element.classList.add('contact');
  element.textContent = 'Contact';
  return element;
}

export {createContactComponent};