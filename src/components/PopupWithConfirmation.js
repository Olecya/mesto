import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupElement,) {
        super(popupElement);
        this._formElement = this._popupElement.querySelector('.popup__content');
        this._buttonElement = this._formElement.querySelector('.popup__button_trash');
    }

    getHendler = () => {
        if (this.popupConfirmation) {
            this._hendler()
                .then(() => this.close())
                .catch((err) => { renderError(`Ошибка: ${err}`) });
        };
    }

    open(hendler) {
        super.open();
        this._hendler = hendler;
        this.popupConfirmation = false;
        this._buttonElement.focus();
    }

    _handleConfirmation = (evt) => {
        evt.preventDefault();
        this.popupConfirmation = true;
        this.getHendler();
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleConfirmation);
    }

    close() {
        this._formElement.removeEventListener('submit', this._handleConfirmation);
        super.close();
    }
}