import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._popupElementForm = this._popupElement.querySelector('.popup__form');
        this._popupContentCard = this._popupElementForm.querySelector('.popup__content');
        this._inputList = this._popupElementForm.querySelectorAll('.popup__input');
    }

    _getInputValues = () => {
        const inputs = {};
        this._inputList.forEach((input) => {
            inputs[input.name] = input.value;
        });
        return inputs;
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            const inputsValues = this._getInputValues();
            this._handleFormSubmit(evt, inputsValues);
            this.close();
        }, { once: true });
        super.setEventListeners();
    }

    close() {
        this._popupContentCard.reset();
        super.close();
    }
}