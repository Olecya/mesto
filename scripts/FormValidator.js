export default class FormValidator {

    constructor(settings) {
        this._settings = settings;
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    };

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    };

    _toggleButtonState(inputList, buttonElement) {
        // Если есть хотя бы один невалидный инпут
        if (this._hasInvalidInput(inputList)) {
            // сделай кнопку неактивной    TODO  Добавить класс неактивная кнопка
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            // иначе сделай кнопку активной
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    };
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };

    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);

        // чтобы проверить состояние кнопки в самом начале
        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                console.log(formElement);
                this._checkInputValidity(formElement, inputElement);
                // чтобы проверять его при изменении любого из полей
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
        console.log(formList);
        formList.forEach((formElement) => {
            this._setEventListeners(formElement);
        });
    };
}