const popups = document.querySelectorAll('.popup');

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        console.log(this);
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        console.log(this);
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.classList.remove("popup_opened");
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            //   const openedPopup = document.querySelector('.popup_opened');
            this.close();
        }
    }

    setEventListeners() {        
        this._popupSelector.addEventListener('mousedown', (evt) => {
                console.log(this);
                console.log(evt.target);
                if (evt.target === this._popupSelector || evt.target.classList.contains('popup__close')) {
                
                            this.close();

        }});
        
        // popups.forEach(popup => popup.addEventListener('mousedown', function (evt) {
        //     if (evt.target === popup || evt.target.classList.contains('popup__close')) {
                
        //         // this.close();
        //         console.log(this);
        // document.removeEventListener('keydown', this._handleEscClose);
        // this._popupSelector.classList.remove("popup_opened");
        //     };
        // }));
    }

    // overley?????
}

// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
//  Принимает в конструктор единственный параметр — селектор попапа.
//  Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
//  Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
//  Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия
//  попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.