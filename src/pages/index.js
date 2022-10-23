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

// раскрытие фото на весь экран
const handleCardClick = (figcaption, link) => {

  const popup = new PopupWithImage(popupIdPhoto);
  popup.open(figcaption, link);
  popup.setEventListeners();
};

const createCard = (dataCard) => {
  return new Card(dataCard, '.template', handleCardClick);
}

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsSection.addItem(createCard(item).addElementCard())
    },
  },
  elementCardGrid
);

cardsSection.renderItems();

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
}

buttonProfileOpen.addEventListener('click', () => {
  const popup = new PopupWithForm(popupIdProfile, handleProfileFormSubmit);

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
  const popup = new PopupWithForm(popupIdCard, handleCardFormSubmit);
  validatorAddCardForm.disableSubmitButton();
  validatorAddCardForm.resetValidationErrors();
  popup.open();
});

const validatorEditProfileForm = new FormValidator(validationConfig, popupIdProfile);
const validatorAddCardForm = new FormValidator(validationConfig, popupIdCard);
validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();