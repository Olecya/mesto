console.log('работает');
let popup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__button-open_popup_opened');
let closeButton = popup.querySelector('.popup__close');

let togglePopup = function () {
    popup.classList.toggle('profile__button-open_popup_opened');
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)


let formElement = popup.querySelector('.popup__form');
let popupContent = formElement.querySelector('.popup__content');
let popupButton = popupContent.querySelector('.popup__button');
console.log(1);
 
function formSubmitHandler (evt) {
    evt.preventDefault();
    console.log(2);

    let nameInput = popupContent.querySelector('.popup__name').value;
    let jobInput = popupContent.querySelector('.popup__info').value;

    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');
  
    profileTitle.textContent = nameInput;
    profileSubtitle.textContent = jobInput;
    popupButton.addEventListener('click', togglePopup);
}
popupContent.addEventListener('submit', formSubmitHandler);
 


