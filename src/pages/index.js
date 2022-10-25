import './index.css'; 

import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  initialCards,
  validationConfig,
  buttonProfileOpen,
  popupIdProfile,
  popupIdCard,
  popupIdPhoto,
  buttonCardOpen,
  popapInputProfileName,
  popapInputProfileInfo,
  elementCardGrid,
  profileTitle,
  profileSubtitle,

} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';

const userInfo = new UserInfo(profileTitle, profileSubtitle);
const popupImage = new PopupWithImage(popupIdPhoto);

// раскрытие фото на весь экран
const handleCardClick = (figcaption, link) => {
  popupImage.open(figcaption, link);
  popupImage.setEventListeners();
};

const createCard = (dataCard) => {
  return new Card(dataCard, '.template', handleCardClick).createCard();
}

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardsSection.addItem(createCard(cardData))
    },
  },
  elementCardGrid
);

// берет значения из инпутов и меняет на странице
function inputProfileContent() {
  const dataUser = userInfo.getUserInfo();
  popapInputProfileName.value = dataUser.name;
  popapInputProfileInfo.value = dataUser.description;
}

// хендлеры на формы
function handleProfileFormSubmit(evt, data) {
  evt.preventDefault();
  userInfo.setUserInfo(data);
}
const handleCardFormSubmit = (evt, dataCard) => {
  evt.preventDefault();
  const card = createCard(dataCard);
  elementCardGrid.prepend(card);
};
const handleButtonProfileOpen = () => {
  inputProfileContent();
  validatorEditProfileForm.resetValidationErrors();
  popupWithFormIdProfile.open();
}
const handleButtonCardOpen = () => {
  validatorAddCardForm.disableSubmitButton();
  validatorAddCardForm.resetValidationErrors();
  popupWithFormIdCard.open();
}

buttonProfileOpen.addEventListener('click', handleButtonProfileOpen);
buttonCardOpen.addEventListener('click', handleButtonCardOpen);

cardsSection.renderItems();
const popupWithFormIdProfile = new PopupWithForm(popupIdProfile, handleProfileFormSubmit);
const popupWithFormIdCard = new PopupWithForm(popupIdCard, handleCardFormSubmit);

const validatorEditProfileForm = new FormValidator(validationConfig, popupIdProfile);
const validatorAddCardForm = new FormValidator(validationConfig, popupIdCard);
validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();