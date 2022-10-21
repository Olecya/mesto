import Popup from "./Popup.js";

// const popupContentCard = popupCardFormElement.querySelector('.popup__content');

export default class PopupWithForm extends Popup {

    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupSelectorForm = this._popupSelector.querySelector('.popup__form');
        this._popupContentCard =  this._popupSelectorForm.querySelector('.popup__content');
        this._inputList = Array.from(this._popupSelectorForm.querySelectorAll('.popup__input'));// Array.from не нужен?
    }

    _getInputValues = () => {
        const inputs = {};

        console.log(inputs);

        this._inputList.forEach((input) => {
            inputs[input.name] = input.value;
        });

        return inputs;
    }

    setEventListeners() {
        console.log(1);
        this._popupSelector.addEventListener('submit', (evt) => {
            console.log(2);
            const inputsPopup = this._getInputValues();
            console.log(inputsPopup);
            this._handleFormSubmit(evt, inputsPopup);
            this.close();
        }, { once: true });

        super.setEventListeners();
    }

    close() {
        this._popupContentCard.reset();
        // console.log(this);
        super.close();
    }

    //     Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

    // Содержит приватный метод _getInputValues, который собирает данные всех полей формы.

    // Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса
    //  PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и 
    //  добавлять обработчик сабмита формы.

    // Перезаписывает родительский метод close, так как при закрытии попапа форма должна 
    // ещё и сбрасываться.
}