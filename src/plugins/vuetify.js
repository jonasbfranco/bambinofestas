import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'md fa4',
    theme: {
        themes: {
            light: {
                primary: '#9652ff',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70',
                whats: '#00bfa5',
            },
        },
    },
});
