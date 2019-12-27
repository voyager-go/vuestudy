const app = new Vue({
   el: '#app',
   data:{
       books:[
           {
               id: 1,
               name: '《PHP从入门到精通》',
               date: '1999-09-10',
               price: 122,
               count: 2
           },
           {
               id: 2,
               name: '《Java设计模式》',
               date: '2001-09-10',
               price: 99,
               count: 2
           },
           {
               id: 3,
               name: '《Vue实战》',
               date: '2016-02-12',
               price: 89,
               count: 10
           },
           {
               id: 4,
               name: '《Unix编程艺术》',
               date: '2006-01-12',
               price: 188,
               count: 3
           },
       ]
   },
    methods:{
        /**
         * 数量加一
         * @param index
         * @returns {number}
         */
        increment(index){
            return this.books[index].count++;
        },
        /**
         * 数量减一
         * @param index
         * @returns {number}
         */
        decrement(index){
            return this.books[index].count--;
        },
        /**
         * 移除当前行
         * @param index
         * @returns {T[]}
         */
        removeHandle(index){
            return this.books.splice(index, 1);
        },
    },
    // 计算属性处理总价
    computed:{
        booksPrice(){
            // let total = 0;
            // for (let book of this.books){
            //     total += book.count * book.price;
            // }
            // return total;
            // ES6 高阶函数装逼大法
            return this.books.reduce((previousValue, book) => {
                return previousValue + book.price * book.count
            }, 0)
        }
    },
    filters: {
       showPrice(price){
            return '¥ ' + price.toFixed(2);
       }
    }
});