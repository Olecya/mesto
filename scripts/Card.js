export default class Card {
  constructor(data, templateSelector, openPopup) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .cloneNode(true);
    return cardElement;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_aktiv');
  };

  _deleteCard(evt) {
    const trashElementCard = evt.target.closest('.element');
    trashElementCard.remove();
  };

  _setEventListeners(elementImage, likeElement, deleteCard) {
    elementImage.addEventListener('click', () => {
      this._openPopup(this._name, this._link);
    });
    likeElement.addEventListener('click', this._toggleLike);
    deleteCard.addEventListener('click', this._deleteCard);
  }

  addElementCard() {
    const elementCard = this._getTemplate();
    const elementImage = elementCard.querySelector('.element__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementCard.querySelector('.element__title').textContent = this._name;
    elementImage.setAttribute('alt', this._name);

    //лайк
    const likeElement = elementCard.querySelector('.element__like');

    // корзина
    const trashIcon = elementCard.querySelector('.element__trash');
    
    this._setEventListeners(elementImage, likeElement, trashIcon);
    return elementCard;
  }
}