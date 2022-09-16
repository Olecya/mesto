const popups = document.querySelectorAll('.popup');// используем для closeAllPopups
const buttonProfileOpen = document.querySelector('.profile__button-open');
const popupIdProfile = document.querySelector('.popupProfile');
const popupIdCard = document.querySelector('.popup-card');
const popupIdPhoto = document.querySelector('.popup-photo');
const buttonsClose = document.querySelectorAll('.popup__close');
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
  closePopapEsc();
  popupButton.classList.add('popup_opened');     
}

function closePopup() {
  const popup = document.querySelector('.popup_opened');
  removeListenerByEsc();
  popup.classList.remove("popup_opened");
}

function closeAllPopups() {
  popups.forEach(closePopup);
};

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
  closePopup();
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

function addElementCard(name, link) {
  const elementCard = templateCardElement.content.cloneNode(true);
  const elementImage = elementCard.querySelector('.element__image');
  elementImage.src = link;
  elementCard.querySelector('.element__title').textContent = name;
  elementImage.setAttribute('alt', name);
  elementImage.addEventListener('click', () => {
    openPopupPhoto(link, name);
  });
  //лайк
  const likeElement = elementCard.querySelector('.element__like');
  function toggleLike(evt) {
    evt.target.classList.toggle('element__like_aktiv');
  };
  likeElement.addEventListener('click', toggleLike);
  // корзина
  const deleteCard = elementCard.querySelector('.element__trash');
  function deletTrashElementButton(evt) {
    const trashElementCard = evt.target.closest('.element');
    trashElementCard.remove();
  };
  deleteCard.addEventListener('click', deletTrashElementButton);
  return elementCard;
}

const handleCardFormSubmit = function (evt) {
  evt.preventDefault();

  elementCardGrid.prepend(addElementCard(popupInputCardName.value, popupInputCardLink.value));
  evt.target.reset();
  closePopup();
}

initialCards.forEach(element => {
  elementCardGrid.append(addElementCard(element.name, element.link))
});

// раскрытие фото на весь экран
const openPopupPhoto = function (link, figcaption) {
  popupPhoto.src = link;
  popupPhoto.setAttribute('alt', figcaption);
  popupSubtitle.textContent = figcaption;
  openPopup(popupIdPhoto)
}

const buttonDisabled = (buttonElement) => {
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.setAttribute('disabled','');
}

buttonsClose.forEach(clsBut => clsBut.addEventListener('click', closePopup));
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
  popups.forEach(popup => popup.addEventListener('mousedown', function(evt) {
    if(evt.target === popup ) {
      closePopup();
    };
  }));
}
closePopapOverlay();

function closeByEsc(evt) {
  if (evt.key === 'Escape' ) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}
const closePopapEsc = () => {
  document.addEventListener('keydown', closeByEsc);
}
function removeListenerByEsc() {
  document.removeEventListener('keydown', closeByEsc );
}