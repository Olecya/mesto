import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import {
  initialCards,
  validationConfig
} from './constants.js';

// const popups = document.querySelectorAll('.popup');// используем для closeAllPopups
const buttonProfileOpen = document.querySelector('.profile__button-open');
const popupIdProfile = document.querySelector('.popupProfile');
const popupIdCard = document.querySelector('.popup-card');
const popupIdPhoto = document.querySelector('.popup-photo');
const buttonCardOpen = document.querySelector('.profile__button');
const popapInputProfileName = document.querySelector('.popup__input_profile_name');
const popapInputProfileInfo = document.querySelector('.popup__input_profile_info');
const popupCardFormElement = popupIdCard.querySelector('.popup__form');
const popupContentCard = popupCardFormElement.querySelector('.popup__content');
const popupInputCardName = popupContentCard.querySelector('.popup__input_card_name');
const popupInputCardLink = popupContentCard.querySelector('.popup__input_card_link');
const elementCardGrid = document.querySelector('.elements');
const popupProfileFormElement = popupIdProfile.querySelector('.popup__form');
const popupProfileFormContent = popupProfileFormElement.querySelector('.popup__content');
// const popupButtonProfileFormContent = popupProfileFormContent.querySelector('.popup__button');
// const templateCardElement = document.querySelector('.template');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupPhoto = document.querySelector('.popup__photo');
// const popupButtonCardSave = document.querySelector('.popup__button_card');




// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

function openPopup(popupButton) {
  // document.addEventListener('keydown', closeByEsc);
  // popupButton.classList.add('popup_opened');
  const popup = new Popup(popupButton);
  popup.open();
  popup.setEventListeners();
}

// function closePopup(popup) {
  // document.removeEventListener('keydown', closeByEsc);
  // popup.classList.remove("popup_opened");


// }

// берет значения из инпутов и меняет на странице
function inputProfileContent() {
  popapInputProfileName.value = profileTitle.textContent;
  popapInputProfileInfo.value = profileSubtitle.textContent;
}

// сабмит на форму профайла
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = popapInputProfileName.value;
  const jobInput = popapInputProfileInfo.value;
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
  closePopup(popupIdProfile);
}

//Добавление карточек


// раскрытие фото на весь экран
const openPopupPhoto = (figcaption, link) => {
  popupPhoto.src = link;
  popupPhoto.setAttribute('alt', figcaption);
  popupSubtitle.textContent = figcaption;
  const popup = new Popup(popupIdPhoto);
  popup.open();
  popup.setEventListeners();
};

const createCard = (dataCard) => {
  return new Card(dataCard, '.template', openPopupPhoto);
}

const handleCardFormSubmit = function (evt) {
  evt.preventDefault();
  const dataCard = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value
  }
  const card = createCard(dataCard);
  elementCardGrid.prepend(card.addElementCard());
  evt.target.reset();
  closePopup(popupIdCard);
};

initialCards.forEach(dataCard => {
  const card = createCard(dataCard);
  elementCardGrid.append(card.addElementCard());
});

buttonCardOpen.addEventListener('click', () => {

  validatorAddCardForm.disableSubmitButton();
  validatorAddCardForm.resetValidationErrors();
  openPopup(popupIdCard);
  popupContentCard.reset();
});

// открытие попапа редактирования профиля.
buttonProfileOpen.addEventListener('click', () => {
  inputProfileContent();
  validatorEditProfileForm.resetValidationErrors();
  openPopup(popupIdProfile);
});

popupProfileFormContent.addEventListener('submit', handleProfileFormSubmit);
popupContentCard.addEventListener('submit', handleCardFormSubmit);

// const setEventListenersForClosingPopupsByOverlayClick = () => {
//   popups.forEach(popup => popup.addEventListener('mousedown', function (evt) {
//     if (evt.target === popup || evt.target.classList.contains('popup__close')) {
//       closePopup(popup);
//     };
//   }));
// }
// setEventListenersForClosingPopupsByOverlayClick();






const validatorEditProfileForm = new FormValidator(validationConfig, popupIdProfile);
const validatorAddCardForm = new FormValidator(validationConfig, popupIdCard);
validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();