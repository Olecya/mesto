// import UserInfo from "./UserInfo.js";

export default class Card {
    constructor(data, templateSelector, handleCardClick, userId, delCardApi, toggleLikeApi, trashPopup) {
        // this._data = data;
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
        // this._ownerId = data.owner._id;
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
        // console.log(this._likes);
        this._likeElement.classList.toggle('element__like_aktiv');
    };

    _handleDeleteCard = () => {
        this._elementCard.remove();
        this._elementCard = null;
    };

    _setEventListeners() {

        this._elementImage.addEventListener('click', () => {
            console.log(this._cardId)
            this._handleCardClick(this._name, this._link, this._cardId);
        });

        this._likeElement.addEventListener('click', () => {
            this._myLike = this._likes.some(like => like._id === this._userId);
            const metod = this._myLike ? 'DELETE' : 'PUT';
            // console.log(metod);

            this._toggleLikeApi(this._cardId, metod)
                .then(res => {
                    return this._likes = res.likes;
                })
                .then(() => {
                    return this._likeElementNumber.textContent = this._likes.length;
                });

            this._handleToggleLike();
        });

        const handleTrash = () => {
            console.log(11111111111111);
            // this._delCardApi(this._cardId);
            // this._handleDeleteCard();
        }
        // TODO: 
        this.definitionCardOwnerUser() ?
            this._trashIcon.addEventListener('click', (evt) => {
                this._trashPopup.open(handleTrash);
            //     this._delCardApi(this._cardId);
            // this._handleDeleteCard();

            }) :
            this._trashIcon.remove();
    }

    _cardLike = () => {
        this._likeElement = this._elementCard.querySelector('.element__like');
        this._likeElementNumber = this._elementCard.querySelector('.element__like-number');

        // console.log(this._likeElementNumber);

        this._myLike = this._likes.some(like => like._id === this._userId);
        // console.log(this._myLike);
        if (this._myLike) this._handleToggleLike();
        this._likeElementNumber.textContent = this._likes.length;
    }

    createCard() {
        // console.log(this._data);
        // console.log(this._cardId);
        // console.log(this._ownerId);
        // console.log(this._likes.length);

        this._elementCard = this._getTemplate();
        this._elementImage = this._elementCard.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementCard.querySelector('.element__title').textContent = this._name;

        //лайк
        this._cardLike();


        // корзина

        // if(userInfo.getId === this.owner._id){
        //   //popup Вы Уверенны?

        this._trashIcon = this._elementCard.querySelector('.element__trash');


        // }


        this._setEventListeners();
        // console.log(this._elementCard);
        return this._elementCard;
    }


}