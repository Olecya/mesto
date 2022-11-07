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
    console.log(this.popupConfirmation);
    this._buttonElement.focus()

    // this.setEventListeners();
  }

  setEventListeners() {
    // console.log(this._buttonElement.focus())
    this._popupElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.popupConfirmation = true;
      console.log(this.popupConfirmation);
      this.close();
    });

  }

  close() {
    this.getHendler();
    super.close();
  }
}