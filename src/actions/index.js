import * as types from '../constans/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
};


export const actDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
};

export const actTangVe = (product) => {
    return {
        type: types.TANG_VE,
        product
    }
};

export const actGiamVe = (product) => {
    return {
        type: types.GIAM_VE,
        product
    }
};

export const actChonGhe = (product, soghe) => {
    return {
        type: types.CHON_GHE,
        product,
        soghe
    };
};

export const actTimKiem = (name) => {
    return {
        type: types.TIM_KIEM,
        name
    }
}

export const actTimKiemTheLoai = (theloai) => {
    return {
        type: types.TIM_KIEM_THE_LOAI,
        theloai
    }
}

export const actDatPhim = (tien, product, soghe) => {
    return {
        type: types.DAT_PHIM,
        tien,
        product,
        soghe
    }
}

export const actDangKy = (user) => {
    return {
        type: types.DANG_KY,
        user
    }
}

export const actDangNhap = (user) => {
    return {
        type: types.DANG_NHAP,
        user
    }
}

export const actNapTien = (tienNap) => {
    return {
        type: types.NAP_TIEN,
        tienNap
    }
}

export const actDangXuat = types.DANG_XUAT;