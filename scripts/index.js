let popup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__button-open');
let closeButton = popup.querySelector('.popup__close');

function openPopup () {
    popup.classList.add('popup_opened');
    let nameInputProfile = document.querySelector('.popup__input_profile_name');
    let jobInputProfile = document.querySelector('.popup__input_profile_info');
    nameInputProfile.value = document.querySelector('.profile__title').textContent;
    jobInputProfile.value = document.querySelector('.profile__subtitle').textContent;
   
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

    let nameInput = popupContent.querySelector('.popup__input_profile_name').value;
    let jobInput = popupContent.querySelector('.popup__input_profile_info').value;

    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');
  
    profileTitle.textContent = nameInput;
    profileSubtitle.textContent = jobInput;
    closePopup();
}
popupContent.addEventListener('submit', formSubmitHandler);
 


