import Popup from "./Popup.js";

import {
    popupPhoto,
    popupSubtitle,
} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(figcaption, link) {
        popupPhoto.src = link;
        this._popupSelector.setAttribute('alt', figcaption);
        popupSubtitle.textContent = figcaption;
        super.open();
    }
}