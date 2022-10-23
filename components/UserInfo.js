export default class UserInfo {

    constructor(name, description) {
        this._profileTitle = name;
        this._profileSubtitle = description;
    }

    getUserInfo = () => {
        return {
            name: this._profileTitle.textContent,
            description: this._profileSubtitle.textContent,
        }
    }

    setUserInfo = (data) => {
        console.log(this);
        console.log(this._profileSubtitle.textContent);

        this._profileTitle.textContent = data.name;
        this._profileSubtitle.textContent = data.description;
    }
}

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.