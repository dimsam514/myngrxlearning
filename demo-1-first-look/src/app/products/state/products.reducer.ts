import { createAction, createReducer, on } from '@ngrx/store';
import {ProductsPageActions} from "./product.actions";

export interface ProductsState {
  showProductCode: boolean;
}

const intitialState: ProductsState = {
  showProductCode: true,
};

export const productsReducer = createReducer(
  intitialState,
  on(ProductsPageActions.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  }))
);
