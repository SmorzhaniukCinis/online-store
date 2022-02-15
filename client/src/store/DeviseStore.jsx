import {makeAutoObservable} from "mobx";

export default class DeviseStore {
    constructor() {
        this._types = [
            {id: 1, name: "refrigerator"},
            {id: 2, name: "phone"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "iPhone"}
        ]
        this._devices = [
            {id: 1, name: "iPhone 7", price: 2333, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes (types) {
        this._types = types
    }
    setBrands (brands) {
            this._brands = brands
        }
    setDevices (devices) {
            this._devices = devices
    }

    get types () {
        return this._types
    }
    get brands () {
        return this._brands
    }
    get devices () {
        return this._devices
    }
}
