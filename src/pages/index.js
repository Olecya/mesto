// import './index.css'; 

import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {
    // initialCards,
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
    popupAvatarId,
    buttonAvatarId,
    buttonAvatarSaveId,
    popupTrashCard,

} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Popup from "../components/Popup.js";
import Api from '../components/Api.js';

const popupAvatar = new Popup(popupAvatarId);
const popupTrash = new PopupWithConfirmation(popupTrashCard);
// popupTrash.setEventListeners();

const handleAvatarClick = () => {
    popupAvatar.open();
}

buttonAvatarId.addEventListener('click', handleAvatarClick);

const userInfo = new UserInfo(profileTitle, profileSubtitle);

const api = new Api();

// Работа с профилем
api.getProfile()
    .then((res) => {
        userInfo.setUserInfoByApi(res);
    });

// берет значения из инпутов и меняет на странице
function inputProfileContent() {
    const dataUser = userInfo.getUserInfo();
    popapInputProfileName.value = dataUser.name;
    popapInputProfileInfo.value = dataUser.description;
}

const popupImage = new PopupWithImage(popupIdPhoto);

// раскрытие фото на весь экран
const handleCardClick = (figcaption, link, cardId) => {
    console.log(cardId);
    popupImage.open(figcaption, link);
    popupImage.setEventListeners();
};

const createCard = (dataCard) => {
    // console.log(dataCard);
    return new Card(
        dataCard,
        '.template',
        handleCardClick,
        userInfo.getUserId(),
        api.deleteCard,
        api.toggleLikeCard,
        popupTrash,
    ).createCard();
}

// хендлеры на формы
function handleProfileFormSubmit(evt, data, battonElement) {
    evt.preventDefault();
    userInfo.setUserInfo(data);
    api.patchProfile(data, battonElement);
}
//кнопка +
const handleCardFormSubmit = (evt, dataCard, battonElement) => {
    evt.preventDefault();
    api.postNewCard(dataCard, battonElement)
        .then(res => {
            return createCard(res)
        }).
        then(card => {
            return elementCardGrid.prepend(card)
        })
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

const popupWithFormIdProfile = new PopupWithForm(popupIdProfile, handleProfileFormSubmit);
const popupWithFormIdCard = new PopupWithForm(popupIdCard, handleCardFormSubmit);

const validatorEditProfileForm = new FormValidator(validationConfig, popupIdProfile);
const validatorAddCardForm = new FormValidator(validationConfig, popupIdCard);
validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();

//добавление карточек
const section = new Section(
    {
        renderer: (cardData) => {
            // console.log(cardData);
            section.addItem(createCard(cardData))
        },
    },
    elementCardGrid
);

api.getInitialCards()
    .then((res) => {
        section.renderItems(res);
    });