import UserInfo from './UserInfo.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
// import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import {
  initialCards,
  validationConfig
} from './constants.js';
import PopupWithForm from './PopupWithForm.js';

// const popups = document.querySelectorAll('.popup');// используем для closeAllPopups
const buttonProfileOpen = document.querySelector('.profile__button-open');
const popupIdProfile = document.querySelector('.popupProfile');
const popupIdCard = document.querySelector('.popup-card');
const popupIdPhoto = document.querySelector('.popup-photo');
const buttonCardOpen = document.querySelector('.profile__button');
const popapInputProfileName = document.querySelector('.popup__input_profile_name');
const popapInputProfileInfo = document.querySelector('.popup__input_profile_info');
// const popupCardFormElement = popupIdCard.querySelector('.popup__form');
// const popupContentCard = popupCardFormElement.querySelector('.popup__content');
// const popupInputCardName = popupContentCard.querySelector('.popup__input_card_name');
// const popupInputCardLink = popupContentCard.querySelector('.popup__input_card_link');
const elementCardGrid = document.querySelector('.elements');
// const popupProfileFormElement = popupIdProfile.querySelector('.popup__form');
// const popupProfileFormContent = popupProfileFormElement.querySelector('.popup__content');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const userInfo = new UserInfo(profileTitle, profileSubtitle);

// userInfo.setUserInfo('','');


// раскрытие фото на весь экран
const handleCardClick = (figcaption, link) => {

  const popup = new PopupWithImage(popupIdPhoto);
  popup.open(figcaption, link);
  popup.setEventListeners();
};
//Добавление карточек
const createCard = (dataCard) => {
  return new Card(dataCard, '.template', handleCardClick);
}

initialCards.forEach(dataCard => {
  const card = createCard(dataCard);
  elementCardGrid.append(card.addElementCard());
});


// function openPopup(popup) {  
  
//   popup.open();
//   // popup.setEventListeners();
// }

// берет значения из инпутов и меняет на странице

function inputProfileContent() {
  const dataUser = userInfo.getUserInfo();
  popapInputProfileName.value = dataUser.name;
  popapInputProfileInfo.value = dataUser.description;
}

// сабмит на форму профайла
function handleProfileFormSubmit(evt, data) {
  evt.preventDefault();
  userInfo.setUserInfo(data);
// console.log(data);
//   profileTitle.textContent = data.name;
//   profileSubtitle.textContent = data.description;
  // closePopup(popupIdProfile);
}

buttonProfileOpen.addEventListener('click', () => {
  const popup = new PopupWithForm (popupIdProfile, handleProfileFormSubmit);
  
  inputProfileContent();
  validatorEditProfileForm.resetValidationErrors();
  popup.open();
});

const handleCardFormSubmit = (evt, dataCard) => {
  evt.preventDefault();
  const card = createCard(dataCard);
  elementCardGrid.prepend(card.addElementCard());
};

buttonCardOpen.addEventListener('click', () => {
  const popup = new PopupWithForm (popupIdCard, handleCardFormSubmit);
  validatorAddCardForm.disableSubmitButton();
  validatorAddCardForm.resetValidationErrors();
  popup.open();
});




const validatorEditProfileForm = new FormValidator(validationConfig, popupIdProfile);
const validatorAddCardForm = new FormValidator(validationConfig, popupIdCard);
validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();