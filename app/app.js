import Vue from "nativescript-vue";

import App from "./components/App";

Vue.registerElement(
    'PullToRefresh',
    () => require('nativescript-pulltorefresh').PullToRefresh
);  

new Vue({

    template: `
        <Frame>
            <App />
        </Frame>`,

    components: {
        App
    }
}).$start();
