import {
  ENTITY_CREATE,
  ENTITY_UPDATE,
  ENTITY_FETCH,
  SELECT_ENTITY_ITEM,
  ENTITY_DELETE,
  CLEAR_ENTITY_LIST,
} from '../constants/actionType';

let initialState = {
  products: [],
  selectedItem: {
    product: {},
  },
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
  state = state || initialState;
  let newState;

  switch (action.type) {
    case ENTITY_CREATE:
      let initialProducts = Object.assign({}, state.products);
      return Object.assign({}, state, {
        products: [initialProducts, ...action.data],
      });

    case ENTITY_UPDATE:
      newState[action.entity] = Object.assign({}, state, action.data);
      return newState;

    case ENTITY_FETCH:
      return Object.assign({}, state, {
        products: [...action.data],
      });

    case ENTITY_DELETE:
      let products = Object.assign({}, state.products);
      products = products.filter((product) => product.id !== action.data.id);
      return Object.assign({}, state, {
        products: products,
      });

    case SELECT_ENTITY_ITEM:
      let selectedItem = Object.assign({}, action.data);
      return Object.assign({}, state, {
        selectedItem: {
          product: selectedItem,
        },
      });

    case CLEAR_ENTITY_LIST:
      newState[action.entity] = {};
      return newState;

    default:
      return state;
  }
}
