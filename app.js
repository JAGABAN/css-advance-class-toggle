let vm = Vue.createApp({
    data() {
        return {
            isPurple:false,
            isRed:false,
            isOrange:false,
            selectedColor:''
        }
    },
    computed:{
        circle_classes(){
            return {purple:this.isPurple}
        },
       circle_class(){
           return {red:this.isRed}
       },
       circle_orange(){
        return {orange:this.isOrange}
    }
    }
}).mount('#app')