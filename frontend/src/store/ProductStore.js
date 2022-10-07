import {makeAutoObservable} from 'mobx';

export default class ProductStore {
    constructor() {
        this._categories = [
        {id: 1, name: 'Robes'},
        {id: 2, name: 'Costumes'}

    ]
    this._products = [
        {id: 1, name: 'Robe jaune', price: 85},
        {id: 2, name: 'Costume à pantalones', price: 110}

    ]
    this._selectedCategory = {}

    makeAutoObservable(this)
}

    setCategories(categories) {
        this._categories = categories
    }

    setProducts(products) {
        this._products = products
    }   
     
    setSelectedCategory(category) {
        this._selectedCategory = category

    }

    get categories() {
        return this._categories
    }

    get products() {
        return this._products
    }

    get selectedCategory() {
        return this._selectedCategory
    }

}
