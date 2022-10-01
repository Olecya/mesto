export default class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
  }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
  
      return cardElement;
    }
  
    _handleOpenPopup() {
      popupImage.src = this._image;
      popupElement.classList.add('popup_is-opened');
    }
  
    _handleClosePopup() {
      popupImage.src = '';
      popupElement.classList.remove('popup_is-opened');
    }
  
    _setEventListeners() {
      this._element.addEventListener('click', () => {
        this._handleOpenPopup();
      });
  
      popupCloseButton.addEventListener('click', () => {
        this._handleClosePopup();
      });
    }
  }
  
  class DefaultCard extends Card {
    constructor(data, templateSelector) {
      super(templateSelector);
      this._title = data.title;
      this._description = data.description;
      this._image = data.image;
    }
    
    generateCard() {
      this._element = super._getTemplate();
      super._setEventListeners();
  
      this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
      this._element.querySelector('.card__title').textContent = this._title;
  
      return this._element;
    }
    
    _handleOpenPopup() {
      popupCaption.textContent = this._description;
      super._handleOpenPopup();
    }
    
    _handleClosePopup() {
      popupCaption.textContent = '';
      super._handleClosePopup();
    }
  }
  
  class HorizontalCard extends Card {
    constructor(data, templateSelector) {
      super(templateSelector);
      this._title = data.title;
      this._description = data.description;
      this._price = data.price;
      this._image = data.image;
    }
  
    generateCard() {
      this._element = super._getTemplate();
      super._setEventListeners();
  
      this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
      this._element.querySelector('.card__title').textContent = this._title;
      this._element.querySelector('.card__info').textContent = this._description;
      this._element.querySelector('.card__price-property').textContent = this._price;
  
      return this._element;
    }
  }