export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;    
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _handleToggleLike () {
    this.likeElement.classList.toggle('element__like_aktiv');
  };

  _handleDeleteCard = () => {
    this._elementCard.remove();
    this._elementCard = null;
  };

  _setEventListeners() {

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this.likeElement.addEventListener('click', () => {
      console.log();
      this._handleToggleLike();
    });

    this.trashIcon.addEventListener('click', () => {
      this._handleDeleteCard();
    }
    );
  }

  createCard() {
    this._elementCard = this._getTemplate();
    this._elementImage = this._elementCard.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementCard.querySelector('.element__title').textContent = this._name;

    //лайк
    this.likeElement = this._elementCard.querySelector('.element__like');  

    // корзина
    this.trashIcon = this._elementCard.querySelector('.element__trash');

    this._setEventListeners();
    // console.log(this._elementCard);
    return this._elementCard;
  }
}