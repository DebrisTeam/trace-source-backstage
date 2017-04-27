
const GET_USER_INFO = 'GET_USER_INFO';
const USER_LOGIN = 'USER_LOGIN';

export default {
  [USER_LOGIN] (state) {
    state.userLogin = true;
  },
  
  [GET_USER_INFO] (state) {
    state.userInfo = {
      userName: 'enjing',
      userId: 123456,
      phone: '15878193546',
      avatar: 'https://a-ssl.duitang.com/uploads/item/201611/23/20161123180252_i2MzZ.jpeg',
    }
  }
}
