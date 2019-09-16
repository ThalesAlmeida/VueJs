var app = new Vue({
    el: "#app",
    data: {
        flag:  true,
        styleObject: {
            backgroundColor: 'green',
            border: '5 px solid orange'
        }
    },

    methods:{
        changeSize(){
            this.flag = !this.flag;
        }
    }
})