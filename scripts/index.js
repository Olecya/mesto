import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
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
const popupProfileFormElement = popupIdProfile.querySelector('.popup__form');
const popupProfileFormContent = popupProfileFormElement.querySelector('.popup__content');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

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


function openPopup(popup) {  
  
  popup.open();
  // popup.setEventListeners();
}

// берет значения из инпутов и меняет на странице
function inputProfileContent() {
  popapInputProfileName.value = profileTitle.textContent;
  popapInputProfileInfo.value = profileSubtitle.textContent;
}

// сабмит на форму профайла
function handleProfileFormSubmit(evt, data) {
  evt.preventDefault();
  // console.log(evt);
  // const nameInput = popapInputProfileName.value;
  // const jobInput = popapInputProfileInfo.value;
console.log(data);
  profileTitle.textContent = data.name;
  profileSubtitle.textContent = data.description;
  // closePopup(popupIdProfile);
}

buttonProfileOpen.addEventListener('click', () => {
  const popup = new PopupWithForm (popupIdProfile, handleProfileFormSubmit);
  inputProfileContent();
  validatorEditProfileForm.resetValidationErrors();
  popup.open();
  // popupProfileFormContent.addEventListener('submit', handleProfileFormSubmit, { once: true });
});

const handleCardFormSubmit = (evt, dataCard) => {
  evt.preventDefault();
  // const dataCard = {
  //   name: popupInputCardName.value,
  //   link: popupInputCardLink.value
  // }
  // console.log(evt);
  const card = createCard(dataCard);
  // elementCardGrid.append(card.addElementCard());
  elementCardGrid.prepend(card.addElementCard());
  // evt.target.reset();
  // closePopup(popupIdCard);
};

buttonCardOpen.addEventListener('click', () => {
  
  const popup = new PopupWithForm (popupIdCard, handleCardFormSubmit);
  validatorAddCardForm.disableSubmitButton();
  validatorAddCardForm.resetValidationErrors();
  popup.open();
  // popupContentCard.addEventListener('submit', handleCardFormSubmit);
  // popupContentCard.reset();
});

// открытие попапа редактирования профиля.




const validatorEditProfileForm = new FormValidator(validationConfig, popupIdProfile);
const validatorAddCardForm = new FormValidator(validationConfig, popupIdCard);
validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();