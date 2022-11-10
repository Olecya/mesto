export default class Card {
    constructor(data, templateSelector, handleCardClick, userId, delCardApi, toggleLikeApi, trashPopup) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._likes = data.likes;
        this._userId = userId;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._delCardApi = delCardApi;
        this._toggleLikeApi = toggleLikeApi;
        this._trashPopup = trashPopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    definitionCardOwnerUser() {
        return (this._userId === this._ownerId);
    }

    _handleToggleLike() {
        this._likeElement.classList.toggle('element__like_aktiv');
    }

    _handleDeleteCard = () => {
        this._elementCard.remove();
        this._elementCard = null;
    }

    _setEventListeners() {

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link, this._cardId);
        });

        this._likeElement.addEventListener('click', () => {
            const metod = this._myLike() ? 'DELETE' : 'PUT';

            this._toggleLikeApi(this._cardId, metod)
                .then(res => { return this._likes = res.likes; })
                .then(() => { return this._likeElementNumber.textContent = this._likes.length; })
                .then(() => this._handleToggleLike())
                .catch((err) => { renderError(`Ошибка: ${err}`) });
        });

        this.definitionCardOwnerUser() ?
            this._trashIcon.addEventListener('click', (evt) => {
                this._trashPopup.open(this._handleTrash);
            }) :
            this._trashIcon.remove();
    }

    _handleTrash = () => {
        return this._delCardApi(this._cardId)
            .then(() => this._handleDeleteCard());
        // .catch((err) => { console.log(`Ошибка: ${err}`) }); // перенесла в PopupWithConfirmation
    }

    _cardLike = () => {
        this._likeElement = this._elementCard.querySelector('.element__like');
        this._likeElementNumber = this._elementCard.querySelector('.element__like-number');
        if (this._myLike()) this._handleToggleLike();
        this._likeElementNumber.textContent = this._likes.length;
    }

    _myLike = () => {
        return this._likes.some(like => like._id === this._userId);
    }

    createCard() {
        this._elementCard = this._getTemplate();
        this._elementImage = this._elementCard.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementCard.querySelector('.element__title').textContent = this._name;

        this._cardLike();
        this._trashIcon = this._elementCard.querySelector('.element__trash');

        this._setEventListeners();
        return this._elementCard;
    }
}