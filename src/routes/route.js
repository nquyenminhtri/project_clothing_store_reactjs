
import { path } from '../utils/constant';
import Index from '../containers/Index';
import ProductDetail from '../containers/ProductDetail/ProductDetail';
import Checkout from '../containers/Checkout/Checkout';
import Shop from '../containers/Shop/Shop';
import Cart from '../containers/Cart/Cart';
import Login from '../containers/Login/Login';
import OrderManagement from '../containers/OrderManagement/OrderManagement';
import SignUp from '../containers/SignUp/SignUp';
import ResetPassword from '../containers/SignUp/ResetPassword';
import Profile from '../containers/Profile/Profile';
import ChangePassword from '../containers/Profile/ChangePassword';
export const route = [
  {path: path.HOME,element:<Index/>},
  {path: path.CART,element:<Cart/>},
  {path: path.CHECKOUT,element:<Checkout/>},
  {path: path.PRODUCT_DETAIL,element:<ProductDetail/>},
  {path: path.SHOP,element:<Shop/>},
  {path: path.LOGIN,element:<Login/>},
  {path: path.ORDERMANAGEMENT,element:<OrderManagement/>},
  {path: path.SIGNUP,element:<SignUp/>},
  {path: path.RESET_PASSWORD,element:<ResetPassword/>},
  {path: path.PROFILE,element:<Profile/>},
  {path: path.CHANGEPASSWORD,element:<ChangePassword/>},
];