export default class UserInfo {

    constructor(name, description) {
        this._profileTitle = name;
        this._profileSubtitle = description;
    }

    getUserId = () => {
        return this._profile_id;
    }

    getUserInfo = () => {
        return {
            name: this._profileTitle.textContent,
            description: this._profileSubtitle.textContent,
            avatar: this._profileAvatar
        }
    }

    _getInfo = () => {
        return {
            name: this._profileTitle.textContent,
            description: this._profileSubtitle.textContent,
            avatar: this._profileAvatar,
            _id: this._profile_id,
            cohort: this._profileCohort,
        }
    }

    setUserInfoByApi = ({ name, about, avatar, _id, cohort }) => {
        this._profileTitle.textContent = name;
        this._profileSubtitle.textContent = about;
        this._profileAvatar = avatar;
        this._profile_id = _id;
        this._profileCohort = cohort;
    }
}