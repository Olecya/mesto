import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popups = document.querySelectorAll('.popup');// используем для closeAllPopups
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
const popupButtonProfileFormContent = popupProfileFormContent.querySelector('.popup__button');
const templateCardElement = document.querySelector('.template');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupPhoto = document.querySelector('.popup__photo');
const popupButtonCardSave = document.querySelector('.popup__button_card');


function openPopup(popupButton) {
  document.addEventListener('keydown', closeByEsc);
  popupButton.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove("popup_opened");
}

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
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// раскрытие фото на весь экран
const openPopupPhoto = (figcaption, link) => {
  popupPhoto.src = link;
  popupPhoto.setAttribute('alt', figcaption);
  popupSubtitle.textContent = figcaption;
  openPopup(popupIdPhoto)
};

const handleCardFormSubmit = function (evt) {
  evt.preventDefault();
  const dataCard = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value
  }
  const card = new Card(dataCard, '.template', openPopupPhoto)
  elementCardGrid.prepend(card.addElementCard());
  evt.target.reset();
  closePopup(popupIdCard);
};

initialCards.forEach(element => {
  const card = new Card(element, '.template', openPopupPhoto)
  elementCardGrid.append(card.addElementCard())
});

const buttonDisabled = (buttonElement) => {
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.setAttribute('disabled', '');
}

buttonCardOpen.addEventListener('click', () => {
  buttonDisabled(popupButtonCardSave);
  openPopup(popupIdCard);
  popupContentCard.reset();
});

// открытие попапа редактирования профиля.
buttonProfileOpen.addEventListener('click', () => {
  inputProfileContent();
  openPopup(popupIdProfile);
});

popupProfileFormContent.addEventListener('submit', handleProfileFormSubmit);
popupContentCard.addEventListener('submit', handleCardFormSubmit);

const closePopapOverlay = () => {
  popups.forEach(popup => popup.addEventListener('mousedown', function (evt) {
    if (evt.target === popup || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  }));
}
closePopapOverlay();

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const validIdProfil = new FormValidator(enableValidation, popupIdProfile);
const validIdCard = new FormValidator(enableValidation, popupIdCard);
validIdProfil.enableValidation();
validIdCard.enableValidation();