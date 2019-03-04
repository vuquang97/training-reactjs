import * as types from '../constans/ActionTypes';

var data = JSON.parse(localStorage.getItem('PRODUCT'));

var duPhong = [
    {
        id: 1,
        name: 'Violet Evergarden',
        image: 'https://wallpapersmug.com/large/85e7c5/violet-evergarden-artwork.jpg',
        theloai: 1,
        hangsanxuat: 'Akatsuki Kana',
        ngaychieu: '4/4/2019',
        description: 'Búp Bê Ký Ức : Có một câu nói Violet đã từng nghe khi cô còn ở trên chiến trường. ... Violet Evergarden cô gái trẻ từng là “công cụ vũ khí” trong thời chiến tranh, .',
        price: 800,
        rating: 5,
        ghe: [],
        status: true
    },
    {
        id: 2,
        name: 'Fairy Tail',
        image: 'https://lh3.googleusercontent.com/-ul8m4D4Tv8w/VNUdScU8HeI/AAAAAAAAAp4/VBQ9St2F-vs/w800-h800/Fairy-Tail-Seven-Dragon-Slayers-Vs-Acnologia.jpg',
        theloai: 2,
        hangsanxuat: 'Anime Hành động',
        ngaychieu: '25/10/2019',
        description: 'Hội Pháp Sư nói về Lucy là 1 cô gái trẻ 17 tuổi, với mong ước trở thành một pháp sư đầy quyền năng. Trên đường phiêu lưu thực hiện ước mơ, Lucy tình cờ gặp được ',
        price: 430,
        rating: 4,
        ghe: [],
        status: true
    },
    {
        id: 3,
        name: 'Fate Stay Night',
        image: 'http://i.imgur.com/DvkcI4A.jpg',
        theloai: 3,
        hangsanxuat: 'Kadokawa Shoten',
        ngaychieu: '12/5/2019',
        description: 'Fate Stay Night nói về câu chuyện Cuộc Chiến Dành Chén Thánh của các Servant và chỉ có các Servant mới có thể chạm vào Chén Thánh Fate Stay Night ',
        price: 500,
        rating: 3,
        ghe: [],
        status: true
    },
    {
        id: 4,
        name: 'Tokyo ghould',
        image: 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/2016/06/tokyo_ghoul_04_episode.png',
        theloai: 3,
        hangsanxuat: 'Phim của nhật',
        ngaychieu: '12/2/2019',
        description: 'Hàng loạt những vụ giết người kỳ lạ đang xảy ra ở Tokyo, và nhờ chất lỏng bằng chứng tại hiện trường, cảnh sát kết luận thủ phạm chính là ghoul- quỷ ăn thịt ...',
        price: 600,
        rating: 4,
        ghe: [],
        status: false
    },
    {
        id: 5,
        name: 'Sword art online',
        image: 'https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=http://animehay.tv/uploads/images/2018/07/sword-art-online-alicization-cover.jpg',
        theloai: 4,
        hangsanxuat: 'Reki Kawahara',
        ngaychieu: '4/5/2019',
        description: 'Sword art online Bằng Nerve Gear, mười ngàn con người lao đầu vào một trò chơi bí ẩn Sword Art Online, để rồi bị giam cầm trong đó, buộc phải dấn thân vào ...',
        price: 700,
        rating: 3,
        ghe: [],
        status: false
    },
    {
        id: 6,
        name: 'naruto shippuden',
        image: 'http://static.phimmoi.net/post/2015/09/12/x.jpg',
        theloai: 1,
        hangsanxuat: 'TV Tokyo',
        ngaychieu: '7/7/2019',
        description: 'Naruto Shippuuden Vietsub là phần hai của Naruto Dattebayo. Sau khi huấn luyện 2 năm rưỡi với Jiraiya, Naruto trở về làng Lá, đoàn tụ với những người bạn ...',
        price: 300,
        rating: 5,
        ghe: [],
        status: false
    }
];

if (!data) {//nếu data ko tồn tại hoặc rỗng thì cập nhập cho nó dữ liệu
    localStorage.setItem('PRODUCT', JSON.stringify(duPhong));
}

var initialState = data ? data : duPhong;


var dataTimKiem = JSON.parse(localStorage.getItem('PRODUCT'));

const products = (state = initialState, action) => {
    var { name, theloai } = action;
    localStorage.setItem('PRODUCT1', JSON.stringify(state)); //lưu dữ liệu dự phòng
    dataTimKiem = dataTimKiem ? data : duPhong;
   // var index = -1;
    switch (action.type) {
        // case types.DAT_PHIM:
        //     var checkDatPhim = JSON.parse(localStorage.getItem('CHECKDATPHIM'));
        //     if (checkDatPhim === 1) {
        //         index = findProductInCart(state, product);
        //         for (var i = 0; i < soghe.length; i++) {
        //             state[index].ghe.push(parseInt(soghe[i])); //chuyển số ghế thành kiểu number rồi push vào state[index]
        //         }
        //         localStorage.setItem('PRODUCT', JSON.stringify(state));
        //     }
        //     return [...state];

        case types.TIM_KIEM:
            var result = timKiem(name, dataTimKiem);
            if (result.length > 0) {
                return [...result];
            } else {
                return [...state];
            }

        case types.TIM_KIEM_THE_LOAI:
            var result = timKiemTheLoai(theloai, dataTimKiem);
            if (result.length > 0) {
                return [...result];
            } else {
                return [...state];
            }

        default: return [...state];
    }
}

// var findProductInCart = (state, product) => { // tim kiếm xem có phim này trong store chưa
//     var index = -1;
//     if (state.length > 0) {
//         for (var i = 0; i < state.length; i++) {
//             if (state[i].id === product.id) {
//                 index = i;
//                 break;
//             }
//         }
//     }
//     return index;
// }

// result = state.filter((product, index) => {
//     return product.name.toLowerCase().indexOf(Name) !== -1;
// });
// return result;

var timKiem = (name, dataTimKiem) => {
    var Name = name.toLowerCase();
    var result = [];
    if (name) {
        for (var i = 0; i < dataTimKiem.length; i++) {
            if (dataTimKiem[i].name.toLowerCase().indexOf(Name) !== -1) {
                result.push(dataTimKiem[i]);
            }
        }
    }
    return result;
}

var timKiemTheLoai = (theloai, dataTimKiem) => {
    var result = [];
    if (theloai !== 0) {
        for (var i = 0; i < dataTimKiem.length; i++) {
            if (theloai === dataTimKiem[i].theloai) {
                result.push(dataTimKiem[i]);
            }
        }
    } else {
        result = dataTimKiem;
    }
    return result
}
export default products;