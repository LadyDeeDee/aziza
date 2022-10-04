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

    ]}

    setCategories(categories) {
        this._categories = categories
    }

    setProducts(products) {
        this._products = products
    }   
       
    get IsAuth() {
        return this._isAuth 
    }

    get User() {
        return this._user 
    }   
}
