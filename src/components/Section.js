export default class Section {

    constructor({ items, renderer }, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(element) {
        this._container.append(element);
    }

    _clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this._clear();
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
}