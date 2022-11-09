export default class Api {
    constructor(apiOptions) {
        this._baseUrl = apiOptions.baseUrl;
        this._headers = apiOptions.headers;
    }
    // TODO:
    // _renderLoading = (bool, battonElement) => {
    //     bool ?
    //         battonElement.textContent = "Сохранение..." :
    //         battonElement.textContent = "Сохранить";
    // }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    postNewCard = (dataCard) => {
        // this._renderLoading(true, battonElement);
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link
            })
        })
            .then(this._checkResponse);
            // .catch((err) => { renderError(`Ошибка: ${err}`) })  //TODO: index.js =>
            // .finally(() => this._renderLoading(false, battonElement));;
    }

    deleteCard = (cardId) => {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    toggleLikeCard = (cardId, method) => {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: method,
            headers: this._headers,
        })
            .then(this._checkResponse)
        // .catch((err) => { renderError(`Ошибка: ${err}`) });
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
        // .catch((err) => { renderError(`Ошибка: ${err}`) })
    }

    patchProfile(profileJSON, battonElement) {
        // this._renderLoading(true, battonElement);
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileJSON.name,
                about: profileJSON.description,
            })
        })
            .then(this._checkResponse)
            // .catch((err) => { renderError(`Ошибка: ${err}`) })
            // .finally(() => this._renderLoading(false, battonElement));
    }

    patchProfileAvatar(avatarUrl, battonElement) {
        // this._renderLoading(true, battonElement);
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarUrl.avatar,
            })
        })
            .then(this._checkResponse)
            // .catch((err) => { renderError(`Ошибка: ${err}`) })
            // .finally(() => this._renderLoading(false, battonElement));
    }

    _checkResponse = (res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}