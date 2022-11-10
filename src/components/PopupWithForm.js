import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._popupElementForm = this._popupElement.querySelector('.popup__form');
        this._popupContentCard = this._popupElementForm.querySelector('.popup__content');
        this._inputList = this._popupElementForm.querySelectorAll('.popup__input');
        this._buttonElement = this._popupElementForm.querySelector('.popup__button');
        this._submitBtnText = this._buttonElement.textContent;
    }

    _getInputValues = () => {
        const inputs = {};
        this._inputList.forEach((input) => {
            inputs[input.name] = input.value;
        });
        return inputs;
    }

    _handleForm = (evt) => {
        const inputsValues = this._getInputValues();
        this._handleFormSubmit(evt, inputsValues);
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', this._handleForm);
        super.setEventListeners();
    }

    close() {
        this._popupContentCard.reset();
        super.close();
        this._popupElement.removeEventListener('submit', this._handleForm);
    }

    renderLoading(isLoading, loadingText = 'Сохранение...') {
        this._buttonElement.textContent =
            isLoading ? loadingText : this._submitBtnText
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
          // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
          input.value = data[input.name];
        });
      }
}