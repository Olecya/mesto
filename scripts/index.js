let popup = document.querySelectorAll('.popup');
let openButton = document.querySelector('.profile__button-open');
let popupIdProfile = document.querySelector('.popupProfile');
let popupIdCard = document.querySelector('.popup-card');
let popupIdPhoto = document.querySelector('.popup-photo');
let closeButton = document.querySelectorAll('.popup__close');
let openButtonCard = document.querySelector('.profile__button');
let nameInputProfile = document.querySelector('.popup__input_profile_name');
let jobInputProfile = document.querySelector('.popup__input_profile_info');

function openPopup(popupButton) {
  popupButton.classList.add('popup_opened');
}

function closePopup() {
  popup.forEach(p => p.classList.remove('popup_opened'));
};

// берет значения из инпутов и меняет на странице
function InputProfileContent() {
  nameInputProfile.value = document.querySelector('.profile__title').textContent;
  jobInputProfile.value = document.querySelector('.profile__subtitle').textContent;
}

openButtonCard.addEventListener('click', () => {
  openPopup(popupIdCard);
});

// открытие попапа редактирования профиля.
openButton.addEventListener('click', () => {
  InputProfileContent();
  openPopup(popupIdProfile);
});

closeButton.forEach(clsBut => clsBut.addEventListener('click', closePopup));

// сабмит на форму профайла
let formElement = popupIdProfile.querySelector('.popup__form');
let popupContent = formElement.querySelector('.popup__content');
let popupButton = popupContent.querySelector('.popup__button');

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = popupContent.querySelector('.popup__input_profile_name').value;
  let jobInput = popupContent.querySelector('.popup__input_profile_info').value;

  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');

  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
  closePopup();
}

popupContent.addEventListener('submit', formSubmitHandler);

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

let templateCardElement = document.querySelector('.template');

function elementAddCard(name, link) {
  let elementCard = templateCardElement.content.cloneNode(true);
  let elementImage = elementCard.querySelector('.element__image');

  elementCard.querySelector('.element__image').src = link;
  elementCard.querySelector('.element__title').textContent = name;
  elementImage.addEventListener('click', () => {
    popupPhoto(link, name);
  });
  //лайк
  let likeElement = elementCard.querySelector('.element__like');
  function likeElementBut(evt) {
    evt.target.classList.toggle('element__like_aktiv');
  };
  likeElement.addEventListener('click', likeElementBut);

  // корзина
  let trashElementBut = elementCard.querySelector('.element__trash');
  function trashElementButDelet(evt) {
    let trashElementCard = evt.target.closest('.element');
    trashElementCard.remove();
  };
  trashElementBut.addEventListener('click', trashElementButDelet);
  return elementCard;
}

let formElementCard = popupIdCard.querySelector('.popup__form');
let popupContentCard = formElementCard.querySelector('.popup__content');
let popupInputCardName = popupContentCard.querySelector('.popup__input_card_name').value;
let popupInputCardLink = popupContentCard.querySelector('.popup__input_card_link').value;
let elementCardGrid = document.querySelector('.elements');

let formSubmitHandlerCardElement = function (evt) {
  evt.preventDefault();
  elementAddCard(popupInputCardName, popupInputCardLink);
  elementCardGrid.prepend(elementAddCard(popupInputCardName, popupInputCardLink));
  closePopup();
}

initialCards.forEach(element => {
  elementCardGrid.append(elementAddCard(element.name, element.link))
})

popupContentCard.addEventListener('submit', formSubmitHandlerCardElement);

// раскрытие фото на весь экран
let popupPhoto = function (link, figcaption) {
  document.querySelector('.popup__photo').src = link;
  document.querySelector('.popup__subtitle').textContent = figcaption;
  openPopup(popupIdPhoto)
}

popupIdPhoto.addEventListener('click', (evt) => {
  closePopup(popupIdPhoto);
  evt.stopPropagation();
})




