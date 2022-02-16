import {makeAutoObservable} from "mobx";

export default class DeviseStore {
    _types = [
        {id: 1, name: "Refrigerator"},
        {id: 2, name: "Phone"},
        {id: 3, name: "TV"},
        {id: 4, name: "notebook"},
    ]
    _brands = [
        {id: 1, name: "Samsung"},
        {id: 2, name: "iPhone"},
        {id: 3, name: "Xiaomi"}
    ]
    _devices = [
        {id: 1, name: "iPhone 7", price: 23323, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'},
        {id: 2, name: "iPhone 3", price: 21333, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'},
        {id: 3, name: "iPhone 2", price: 23233, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'},
        {id: 4, name: "iPhone 0", price: 12333, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'},
        {id: 5, name: "iPhone 6", price: 23133, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'},
        {id: 6, name: "iPhone 98", price: 23333, rating: 5, img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'}
    ]
    _selectedType = {}
    constructor() {

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
    setSelectedType (deviceType) {
            this._selectedType = deviceType
        debugger
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
    get selectedType () {
        return this._selectedType
    }
}
