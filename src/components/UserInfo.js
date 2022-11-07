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
        }
    }

    setUserInfo = (data) => {
        this._profileTitle.textContent = data.name;
        this._profileSubtitle.textContent = data.description;
    }

    setUserInfoByApi = (profileJSON) => {
            this._profileTitle.textContent = profileJSON.name;
            this._profileSubtitle.textContent = profileJSON.about;
            this._profileAvatar = profileJSON.avatar;
            this._profile_id = profileJSON._id;
            this._profileCohort = profileJSON.cohort;
    }
}