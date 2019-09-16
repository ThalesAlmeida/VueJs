var app = new Vue({
    el: "#app",
    data: {
        product: "sunglasses",
        quantity: 25,
        sale: true,

    },

    methods:{
        buySunglasses(){
            this.quantity --;
            if(this.quantity <= 0){
                alert("Sold out");
                
            }
        }
    }
})