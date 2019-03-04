import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';
import dangky from './dangky';
import dangnhap from './dangnhap';
import naptien from './naptien';

const appReducers = combineReducers({
  products,
  cart,
  message,
  dangky,
  dangnhap,
  naptien
});

export default appReducers;