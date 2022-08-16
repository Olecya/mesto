let popup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__button-open');
let closeButton = popup.querySelector('.popup__close');

function openPopup () {
    popup.classList.add('popup_opened');
   
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = popup.querySelector('.popup__form');
let popupContent = formElement.querySelector('.popup__content');
let popupButton = popupContent.querySelector('.popup__button');
 
function formSubmitHandler (evt) {
    evt.preventDefault();
    console.log(2);

    let nameInput = popupContent.querySelector('.popup__input_name').value;
    let jobInput = popupContent.querySelector('.popup__input_info').value;

    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');
  
    profileTitle.textContent = nameInput;
    profileSubtitle.textContent = jobInput;
    closePopup();
}
popupContent.addEventListener('submit', formSubmitHandler);
 


