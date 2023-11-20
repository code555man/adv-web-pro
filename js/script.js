const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            number: '',
            lt: [],
            t: '',
        }
    },
    methods: {
        mul(){
            let n = this.number;

            for(let i =1; i<=12; i++){
                this.t += `${i} x ${n} = ${n*i}`;
            }
            
        }
    }
}).mount('#app')