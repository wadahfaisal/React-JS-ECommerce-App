import axios from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  ProductContextType,
  State,
  ActionTypes,
  Product,
} from "../types/contexts/products_context_type";

const initialState: State = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {} as Product,
};

const ProductsContext = createContext({} as ProductContextType);

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: ActionTypes.OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: ActionTypes.CLOSE_SIDEBAR });
  };

  const fetchProducts = async (url: string) => {
    dispatch({ type: ActionTypes.GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data.products;

      dispatch({ type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: ActionTypes.GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const { product: singleProduct } = response.data;
      dispatch({
        type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
