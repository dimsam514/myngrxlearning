import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../product.model";
export const ProductsPageActions = createActionGroup({
    source: 'Products Page',
    events: {'Toggle Show Product Code': emptyProps(),
             'Load Products': emptyProps(),
             'Add Product': props<{product: Product}>(),
             'Update Product': props<{product: Product}>(),
             'Delete Product': props<{product: Product}>(),

    },
  });

export const ProductsAPIActions = createActionGroup({
    source: 'Products API',
    events: {
      'Products Loaded Success': props<{products: Product[]}>(),
      'Product Loaded Failed': props<{message: string}>(),
      'Product Added Success': props<{product: Product}>(),
      'Product Added Failed': props<{message: string}>(),
      'Product Updated Success': props<{product: Product}>(),
      'Product Updated Failed': props<{message: string}>(),
      'Product Deleted Success': props<{product: Product}>(),
      'Product Deleted Failed': props<{message: string}>()
    }
});



