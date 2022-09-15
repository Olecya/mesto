const popups = document.querySelectorAll('.popup');// используем для closeAllPopups
const openButtonProfile = document.querySelector('.profile__button-open');
const popupIdProfile = document.querySelector('.popupProfile');
const popupIdCard = document.querySelector('.popup-card');
const popupIdPhoto = document.querySelector('.popup-photo');
const closeButtons = document.querySelectorAll('.popup__close');
const openButtonCard = document.querySelector('.profile__button');
const nameInputProfile = document.querySelector('.popup__input_profile_name');
const jobInputProfile = document.querySelector('.popup__input_profile_info');
const formElementCard = popupIdCard.querySelector('.popup__form');
const popupContentCard = formElementCard.querySelector('.popup__content');
const popupInputCardName = popupContentCard.querySelector('.popup__input_card_name');
const popupInputCardLink = popupContentCard.querySelector('.popup__input_card_link');
const elementCardGrid = document.querySelector('.elements');
const formElement = popupIdProfile.querySelector('.popup__form');
const popupContent = formElement.querySelector('.popup__content');
const popupButton = popupContent.querySelector('.popup__button');
const templateCardElement = document.querySelector('.template');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupPhoto = document.querySelector('.popup__photo');



function openPopup(popupButton) {
  overlayClosePopap();
  popupButton.classList.add('popup_opened');     
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function closeAllPopups() {
  popups.forEach(closePopup);
};

// берет значения из инпутов и меняет на странице
function inputProfileContent() {
  nameInputProfile.value = profileTitle.textContent;
  jobInputProfile.value = profileSubtitle.textContent;
}

// сабмит на форму профайла
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = nameInputProfile.value;
  const jobInput = jobInputProfile.value;
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
  closeAllPopups();
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
  addElementCard(popupInputCardName.value, popupInputCardLink.value);
  elementCardGrid.prepend(addElementCard(popupInputCardName.value, popupInputCardLink.value));
  evt.target.reset();
  closeAllPopups();
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

closeButtons.forEach(clsBut => clsBut.addEventListener('click', closeAllPopups));
openButtonCard.addEventListener('click', () => {
  openPopup(popupIdCard);
});
// открытие попапа редактирования профиля.
openButtonProfile.addEventListener('click', () => {
  inputProfileContent();
  openPopup(popupIdProfile);
});

popupContent.addEventListener('submit', handleProfileFormSubmit);
popupContentCard.addEventListener('submit', handleCardFormSubmit);

const overlayClosePopap = () => {
  const closePopups = Array.from(popups);
  closePopups.forEach(popup => popup.addEventListener('click', function(evt) {
    if(evt.target === popup ) {
      closePopup(popup);
    };
  }));
}

const closePopapEsc = () => {
  document.addEventListener('keydown', function(evt) {
    if(evt.key === 'Escape' ) {
      closeAllPopups();
    };  
  });
}
closePopapEsc();