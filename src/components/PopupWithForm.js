import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupSelectorForm = this._popupSelector.querySelector('.popup__form');
        this._popupContentCard = this._popupSelectorForm.querySelector('.popup__content');
        this._inputList = this._popupSelectorForm.querySelectorAll('.popup__input');
    }

    _getInputValues = () => {
        const inputs = {};

        this._inputList.forEach((input) => {
            inputs[input.name] = input.value;
        });

        return inputs;
    }

    setEventListeners() {
        this._popupSelector.addEventListener('submit', (evt) => {
            const inputsPopup = this._getInputValues();
            this._handleFormSubmit(evt, inputsPopup);
            this.close();
        }, { once: true });

        super.setEventListeners();
    }

    close() {
        this._popupContentCard.reset();
        super.close();
    }
}