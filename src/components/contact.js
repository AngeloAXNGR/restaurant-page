import branchLocation from '../img/que-pasa-branch.png';

function createAddressSection(){
  let element = document.createElement('div');
  element.classList.add('address-section');

  let phoneNumber = document.createElement('h1');
  phoneNumber.textContent = "+6562356626";

  let webLink = document.createElement('h1');
  webLink.textContent = "quepasa.com.sg";

  let address = document.createElement('h1');
  address.textContent = "7 Emerald Hill Rd, Singapore 229291";

  let locationImage = new Image();
  locationImage.src = branchLocation;

  element.append(phoneNumber, webLink, address, locationImage);
  
  return element;
}

function createContactComponent(){
  let element = document.createElement('div');
  element.classList.add('contact');

  element.appendChild(createAddressSection());

  return element;
}

export {createContactComponent};