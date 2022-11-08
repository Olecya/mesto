export default class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _renderLoading = (bool, battonElement) => {
        bool ?
            battonElement.textContent = "Сохранение..." :
            battonElement.textContent = "Сохранить";
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/cards', {
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    // console.log(res.json());
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    postNewCard = (dataCard, battonElement) => {
        this._renderLoading(true, battonElement);
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/cards', {
            method: 'POST',
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link
            })
        })
            .then(res => {
                if (res.ok) {
                    // console.log(res.json());
                    return res.json();
                    // this.getInitialCards();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                renderError(`Ошибка: ${err}`);
            })
            .finally(() => this._renderLoading(false, battonElement));;
    }

    deleteCard = (cardId) => {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-52/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f'
            },
        });
    }

    toggleLikeCard = (cardId, method) => {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-52/cards/${cardId}/likes`, {
            method: method,
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f'
            },
        })
            .then(res => {
                if (res.ok) {
                    // console.log(res.json());
                    return (res.json());
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                renderError(`Ошибка: ${err}`);
            });
    }

    getProfile() {
        // this._renderLoading(true);
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/users/me', {
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                renderError(`Ошибка: ${err}`);
            })
        // .finally(() => this._renderLoading(false));;
    }

    patchProfile(profileJSON, battonElement) {
        this._renderLoading(true, battonElement);
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: profileJSON.name,
                about: profileJSON.description,
            })
        })
            .catch((err) => { renderError(`Ошибка: ${err}`) })
            .finally(() => this._renderLoading(false, battonElement));
    }

    patchProfileAvatar(avatarUrl, battonElement) {
        this._renderLoading(true, battonElement);
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarUrl.avatar,
            })
        })
            .catch((err) => { renderError(`Ошибка: ${err}`) })
            .finally(() => this._renderLoading(false, battonElement));
    }

}