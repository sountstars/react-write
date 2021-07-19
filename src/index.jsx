import React from 'react';
import App from './App';
import { render } from 'react-dom';

render(<App />, document.getElementById('root'));

// document.getElementById("root").innerHTML = "Hello Type1234r!"




// function isOverlapped(first = { start, end }, second = { start, end }) {
//     if (first.start <= second.end && first.end >= second.start) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const a = { start: 3, end: 5 };
// const b = { start: 9, end: 10 };
// const c = { start: 4, end: 6 };
// const d = { start: 5, end: 8 };
// // [{start: 3, end: 8}, {start: 9, end: 10}]
// function repetition(arr1, arr2) {
//     arr1.map(item => {
//         if (isOverlapped(item, arr2)) {
//             item.start = item.start;
//             item.end = arr2.end;
//         } else {
//             arr1.push(arr2);
//         }
//     })
// }

// function merge(intervals) {
//     let arr = [];
//     for (let i = 0; i < intervals.length; i++) {
//         for (let a = i + 1; a < intervals.length; a++) {
//             if (isOverlapped(intervals[i], intervals[a])) {
//                 if (arr.length === 0) {
//                     arr.push({
//                         start: intervals[i].start,
//                         end: intervals[a].end
//                     })
//                     arr.splice(a, 1)
//                 } else {
//                     repetition(arr, intervals[a])
//                     arr.splice(a, 1)
//                 }
//             } else {
//                 arr.push(intervals[i])
//                 arr.splice(a, 1)
//             }
//         }
//     }
//     return arr;
// }
// const rM = merge([a, b, c, d]);
// console.log(rM)
