import './index.css';

import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {
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
    profileAvatarBox,
    profileAvatar,
    popupTrashCard,
    apiOptions,

} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';

const popupImage = new PopupWithImage(popupIdPhoto);
const popupTrash = new PopupWithConfirmation(popupTrashCard);
const userInfo = new UserInfo(profileTitle, profileSubtitle);
const api = new Api(apiOptions);

const section = new Section(
    {
        renderer: (cardData) => {
            section.addItem(createCard(cardData))
        },
    },
    elementCardGrid
);

Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfoByApi(userData);
        inputProfileContent()
        section.renderItems(cards);
    })
    .catch((err) => console.log(err));

// Работа с профилем
// берет значения из userinfo и меняет на странице
function inputProfileContent() {
    const dataUser = userInfo.getUserInfo();
    popapInputProfileName.value = dataUser.name;
    popapInputProfileInfo.value = dataUser.description;
    if (dataUser.avatar) profileAvatar.src = dataUser.avatar;
}

// раскрытие фото на весь экран
const handleCardClick = (figcaption, link) => {
    popupImage.open(figcaption, link);
};

const createCard = (dataCard) => {
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
function handleProfileFormSubmit(evt, data) {
    // console.log(data);
    popupWithFormIdProfile.renderLoading(true);
    evt.preventDefault();
    ;
    api.patchProfile(data)
        .then((res) => { userInfo.setUserInfoByApi(res) })
        .then(() => popupWithFormIdProfile.close())
        .catch((err) => { console.log(`Ошибка: ${err}`) })
        .finally(() => popupWithFormIdProfile.renderLoading(false));;
}
//кнопка +
const handleCardFormSubmit = (evt, dataCard) => {
    evt.preventDefault();
    popupWithFormIdCard.renderLoading(true);
    api.postNewCard(dataCard)
        .then(res => { return createCard(res) })
        // .then(card => { return elementCardGrid.prepend(card) })
        .then(card => { return section.prependItem(card) })
        .then(() => { popupWithFormIdCard.close() })
        .catch((err) => { console.log(`Ошибка: ${err}`) })
        .finally(() => popupWithFormIdCard.renderLoading(false));
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
const validatorPopupAvatar = new FormValidator(validationConfig, popupAvatarId);

validatorEditProfileForm.enableValidation();
validatorAddCardForm.enableValidation();

// Редактор аватара
const handleAvatarSave = (evt, dataAvatar) => {
    evt.preventDefault();
    popupAvatar.renderLoading(true);
    api.patchProfileAvatar(dataAvatar)
        .then(() => { return api.getProfile() })
        .then((res) => { userInfo.setUserInfoByApi(res); })
        .then(() => inputProfileContent())
        .then(() => popupAvatar.close())
        .catch((err) => { console.log(`Ошибка: ${err}`) })
        .finally(() => popupAvatar.renderLoading(false));
}
const handleAvatarButton = () => {
    validatorPopupAvatar.resetValidationErrors();
    popupAvatar.open();
}
const popupAvatar = new PopupWithForm(popupAvatarId, handleAvatarSave);

profileAvatarBox.addEventListener('click', handleAvatarButton);
validatorPopupAvatar.enableValidation();

// TODO:
// const formValidators = {}
// const enableValidation = (config) => {
//     const formList = Array.from(document.querySelectorAll(config.formSelector))
//     formList.forEach((formElement) => {
//       const validator = new FormValidator(formElement, config)
//   // получаем данные из атрибута `name` у формы
//       const formName = formElement.getAttribute('name')

//      // вот тут в объект записываем под именем формы
//       formValidators[formName] = validator;
//      validator.enableValidation();
//     });
//   };  
//   enableValidation(config);

// formValidators[ profileForm.getAttribute('name') ].resetValidation()

// // или можно использовать строку (ведь Вы знаете, какой атрибут `name` у каждой формы)
// formValidators['profile-form'].resetValidation()