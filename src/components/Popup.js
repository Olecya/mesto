export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOvelayClose = (evt) => {
        if (evt.target === this._popupElement || evt.target.classList.contains('popup__close')) {
            this.close();
        }
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('mousedown', this._handleOvelayClose);
    }

    setEventListeners() {
        this._popupElement.addEventListener('mousedown', this._handleOvelayClose);
    }
}