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

  addElementCard() { 
    const elementCard = this._getTemplate();
    const elementImage = elementCard.querySelector('.element__image');

    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementCard.querySelector('.element__title').textContent = this._name;

    elementImage.setAttribute('alt', this._name);
    elementImage.addEventListener('click', () => {
      this._openPopup(this._link, this._name);
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
}