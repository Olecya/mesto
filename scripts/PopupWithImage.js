import Popup from "./Popup.js";

const popupPhoto = document.querySelector('.popup__photo');
const popupSubtitle = document.querySelector('.popup__subtitle')

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    
    open(figcaption, link) {
        // super._popupSelector
        popupPhoto.src = link;
        this._popupSelector.setAttribute('alt', figcaption);
        popupSubtitle.textContent = figcaption;
        super.open();
        // нужно вставлять в попап картинку с src изображения и подписью к картинке.
    }
}

// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке

