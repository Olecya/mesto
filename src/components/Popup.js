export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        });
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        document.removeEventListener('keydown', () => this._handleEscClose);
        this._popupSelector.classList.remove("popup_opened");
    }

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (evt) => {

            if (evt.target === this._popupSelector || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}