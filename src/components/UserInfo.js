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