var _ = require('lodash');

const createCollection = (num:number, func:(value: any) => any): any[] => {
    // let arr: number = new Array(num);

    // return function(num) {
    //     for (let index = 0; index < num; index++) {
    //         value.add(null);
    //     }
    // }
    return _.map(_.range(num), func);
}

export default createCollection;

// // const reatAdd = (value, num) => {
//     return function(num) {
//         for (let index = 0; index < num; index++) {
//             value.add(null);
//         }
//     }
// }

// let myArr = new Array();
// createCollection(3, ())

// import { repeat, times } from "ramda";
const R = require('ramda');

console.log( R.repeat('foo', 3) );
console.log(R.times((x:number) => x * 2, 3));