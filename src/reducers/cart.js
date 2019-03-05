import * as types from '../constans/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'))

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity, soghe, tien } = action;
    var index = -1;  //không thấy index = -1
    var gheVuaChon = []; // ghế vừa mới chọn trong cart
    var tongTien = 0;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity,
                    gheVuaChon,
                    tongTien
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.TANG_VE:
            index = findProductInCart(state, product);
            state[index].quantity += 1;
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.GIAM_VE:
            index = findProductInCart(state, product);
            if (state[index].quantity >= 1) {
                state[index].quantity -= 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.CHON_GHE:
            index = findProductInCart(state, product);
            state[index].gheVuaChon.push(soghe);
            state[index].product.ghe.push(soghe);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.DAT_PHIM:
            state[0].tongTien = tien;
            var products = JSON.parse(localStorage.getItem('PRODUCT'));
            if (state.length > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (state[0].product.id === products[i].id) {
                        for (var j = 0; j < state[0].gheVuaChon.length; j++) { //duyệt qua mảng chúa ghế gán từng cái vài phim
                            products[i].ghe.push(state[0].gheVuaChon[j]);
                        }

                    }
                }
            }
            localStorage.setItem('PRODUCT', JSON.stringify(products));

            index = findProductInCart(state, product);
            //state[index].gheVuaChon = []; //reset lại số ghế về [] để thực hiện phiên tiếp
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

var findProductInCart = (state, product) => { // tim kiếm xem có phim này trong store chưa
    var index = -1;
    if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
            if (state[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;