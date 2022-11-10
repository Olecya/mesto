export default class UserInfo {

    constructor(name, description, profileAvatar) {
        this._profileTitle = name;
        this._profileSubtitle = description;
        this._profileAvatar = profileAvatar;
    }

    getUserId = () => {
        return this._profile_id;
    }

    getInfo = () => {
        return {
            name: this._profileTitle.textContent,
            description: this._profileSubtitle.textContent,
            avatar: this._profileAvatar.src,
            _id: this._profile_id,
        }
    }

    setUserInfoByApi = ({ name, about, avatar, _id }) => {
        this._profileTitle.textContent = name;
        this._profileSubtitle.textContent = about;
        this._profileAvatar.src = avatar;
        this._profile_id = _id;
    }
}