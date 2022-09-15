const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };
  
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');       // enableValidation.inputErrorClass: 'popup__input_type_error'
    errorElement.classList.remove('popup__error_visible');     // enableValidation.errorClass: 'popup__error_visible'    ???????????????????
    errorElement.textContent = '';
  };
  const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной    TODO  Добавить класс неактивная кнопка
      buttonElement.classList.add('popup__button_disabled');// enableValidation.inactiveButtonClass: 'popup__button_disabled'   ????? скорее всего вот так
      buttonElement.setAttribute('disabled', 'disabled');        
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('popup__button_disabled');
      buttonElement.removeAttribute("disabled");     // enableValidation.inactiveButtonClass: 'popup__button_disabled'   ????? скорее всего вот так
    }
  };
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));  // enableValidation.inputSelector: '.popup__input'
    const buttonElement = formElement.querySelector('.popup__button');            // enableValidation.submitButtonSelector: '.popup__button'
  
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidationFunc = () => {
    const formList = Array.from(document.querySelectorAll(enableValidation.formSelector)); // enableValidation.formSelector: '.popup__form',
    formList.forEach((formElement) => {
      
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
      formList.forEach((formElement) => {
        setEventListeners(formElement);
      });
      
    });
  };
  
  enableValidationFunc();  // запуск блока валидации