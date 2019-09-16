var app = new Vue({
    el: "#app",
    data: {
        lesson: "Events and Methods",
        counter: 0
    },

    methods:{
        incrementCounter(){
            this.counter++;
            console.log(this.counter);
            if(this.counter===15){
                alert('Você pressionou muitas vezes hein');
            }else if(this.counter===20) {
                alert('para de pressionar essa bosta');
            }
        },
        overTheBox(){
            console.log('Está no verde')
        }
    }
})