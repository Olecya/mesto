import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement,) {
    super(popupElement);
    this._formElement = this._popupElement.querySelector('.popup__content');
    this._buttonElement = this._formElement.querySelector('.popup__button_trash');
  }

  getHendler = () => {
    if (this.popupConfirmation) this._hendler();
  }
// FIXME: 
  open(hendler) {
    super.open();
    this._hendler = hendler;
    this.popupConfirmation = false;
    // console.log(this.popupConfirmation);
    this._buttonElement.focus();
    // setTimeout(() => {this._buttonElement.focus()}, 50);
    
    // this._buttonElement.focus()

    // this.setEventListeners();
  }

  _handleConfirmation = (evt) => {
    evt.preventDefault();
      this.popupConfirmation = true;
      // console.log(this.popupConfirmation);
      this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._handleConfirmation);
  }

  close() {
    this._formElement.removeEventListener('submit', this._handleConfirmation);
    this.getHendler();
    super.close();
  }
}