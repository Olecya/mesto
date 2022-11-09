import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupPhoto = this._popupElement.querySelector('.popup__photo');
        this._popupSubtitle = this._popupElement.querySelector('.popup__subtitle');
    }

    open(figcaption, link) {
        this._popupPhoto.src = link;
        this._popupPhoto.alt = figcaption;
        // this._popupElement.alt = figcaption;
        this._popupSubtitle.textContent = figcaption;
        super.open();
    }
}