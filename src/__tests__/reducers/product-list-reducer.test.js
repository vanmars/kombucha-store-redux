import { v4 } from 'uuid'
import productListReducer from  '../../reducers/product-list-reducer';

describe ('productListReducer', () => {
  test('it should return the default state given a null action type', () => {
    expect(productListReducer(undefined, {type:null})).toEqual([
      {name: "Gingerberry Goddess", brand: "Vanessa's Kombuchary", price: 3.25, flavor: "Gingerberry", quantity: 1, id: v4()},
      {name: "Mystic Mango", brand: "Booch Boulevard, LLC", price: 3.99, flavor: "Mango", quantity: 10, id: v4()},
      {name: "Symphonic Straberry", brand: "Scarlett's Secret SCOBY", price: 4.99, flavor: "Strawberry", quantity: 50, id: v4()},
      {name: "Regal Raspberry", brand: "Paradise Kombucha Co.", price: 2.99, flavor: "Raspberry", quantity: 124, id: v4()}
    ])
  })
})