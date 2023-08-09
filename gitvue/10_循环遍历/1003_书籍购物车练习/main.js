const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2023.8.1',
                price:100.00,
                count:1
            },
            {
                id:2,
                name:'《哈利波特》',
                date:'2023.8.2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《那些年》',
                date:'2023.8.3',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《编程技术》',
                date:'2023.8.4',
                price:119.00,
                count:1
            },
]
    },
    methods:{
        add(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        remove(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0;
            for(let i = 0;i<this.books.length;i++){
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice;
        }
    },
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})