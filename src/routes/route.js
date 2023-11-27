
import { path } from '../utils/constant';
import Index from '../containers/Index';
import ProductDetail from '../containers/ProductDetail/ProductDetail';
import Checkout from '../containers/Checkout/Checkout';
import Shop from '../containers/Shop/Shop';
import Cart from '../containers/Cart/Cart';
export const route = [
  {path: path.HOME,element:<Index/>},
  {path: path.CART,element:<Cart/>},
  {path: path.CHECKOUT,element:<Checkout/>},
  {path: path.PRODUCT_DETAIL,element:<ProductDetail/>},
  {path: path.SHOP,element:<Shop/>},
];