import userModel from '../models/userModel.js';

export default {
    view: 'user.html',
    data: {
        user: userModel.get()
    },
    init: function() {
        console.log('User  controller inicializado');
    },
};