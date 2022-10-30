(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=r,this._renderer=o,this._container=n}var n,r;return n=t,(r=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._clear(),this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=r((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"getUserInfo",(function(){return{name:r._profileTitle.textContent,description:r._profileSubtitle.textContent}})),o(this,"setUserInfo",(function(e){r._profileTitle.textContent=e.name,r._profileSubtitle.textContent=e.description})),this._profileTitle=t,this._profileSubtitle=n}));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){u._elementCard.remove(),u._elementCard=null},(o="_handleDeleteCard")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._templateSelector=n,this._name=t.name,this._link=t.link,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleToggleLike",value:function(){this._likeElement.classList.toggle("element__like_aktiv")}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeElement.addEventListener("click",(function(){e._handleToggleLike()})),this._trashIcon.addEventListener("click",(function(){e._handleDeleteCard()}))}},{key:"createCard",value:function(){return this._elementCard=this._getTemplate(),this._elementImage=this._elementCard.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementCard.querySelector(".element__title").textContent=this._name,this._likeElement=this._elementCard.querySelector(".element__like"),this._trashIcon=this._elementCard.querySelector(".element__trash"),this._setEventListeners(),this._elementCard}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),s(this,"disableSubmitButton",(function(){r._buttonElement.classList.add("popup__button_disabled"),r._buttonElement.disabled=null})),s(this,"resetValidationErrors",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),this._settings=t,this._formElement=n.querySelector(this._settings.formSelector),this._inputList=Array.from(n.querySelectorAll(this._settings.inputSelector)),this._buttonElement=n.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),f(this,"_handleOverlayClose",(function(e){(e.target===n._popupElement||e.target.classList.contains("popup__close"))&&n.close()})),this._popupElement=t}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popupElement.removeEventListener("mousedown",this._handleOverlayClose)}},{key:"setEventListeners",value:function(){this._popupElement.addEventListener("mousedown",this._handleOverlayClose)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhoto=document.querySelector(".popup__photo"),t._popupSubtitle=document.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupPhoto.src=t,this._popupPhoto.alt=e,this._popupSubtitle.textContent=e,h(g(u.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d),w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},k=document.querySelector(".profile__button-open"),S=document.querySelector(".popupProfile"),O=document.querySelector(".popup-card"),C=document.querySelector(".popup-photo"),j=document.querySelector(".profile__button"),P=document.querySelector(".popup__input_profile_name"),L=document.querySelector(".popup__input_profile_info"),I=document.querySelector(".elements"),q=document.querySelector(".profile__title"),T=document.querySelector(".profile__subtitle");function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function A(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e,t){var n,r,o,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),l=function(){var e={};return n._inputList.forEach((function(t){e[t.name]=t.value})),e},(o="_getInputValues")in(r=F(n=i.call(this,e)))?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,n._handleFormSubmit=t,n._popupElementForm=n._popupElement.querySelector(".popup__form"),n._popupContentCard=n._popupElementForm.querySelector(".popup__content"),n._inputList=n._popupElementForm.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){var n=e._getInputValues();e._handleFormSubmit(t,n),e.close()}),{once:!0}),B(U(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupContentCard.reset(),B(U(u.prototype),"close",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d),z=new i(q,T),H=new E(C),N=function(e,t){H.open(e,t),H.setEventListeners()},G=function(e){return new l(e,".template",N).createCard()},J=new t({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){J.addItem(G(e))}},I);k.addEventListener("click",(function(){var e;e=z.getUserInfo(),P.value=e.name,L.value=e.description,W.resetValidationErrors(),K.open()})),j.addEventListener("click",(function(){X.disableSubmitButton(),X.resetValidationErrors(),Q.open()})),J.renderItems();var K=new M(S,(function(e,t){e.preventDefault(),z.setUserInfo(t)})),Q=new M(O,(function(e,t){e.preventDefault();var n=G(t);I.prepend(n)})),W=new c(w,S),X=new c(w,O);W.enableValidation(),X.enableValidation()})();