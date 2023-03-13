// function minreadFile(path) {
//   return new Promise((resolve, reject) => {
//     require('fs').readFile(path, (err, data) => {
//       if (err) reject(err)
//       resolve(data)
//     })
//   })
// }
// minreadFile('./txt.tt').then(
//   (data) => {
//     console.log(data.toString())
//   },
//   (err) => {
//     console.log(err)
//   }
// )
import {hasCycle} from "./test2";
hasCycle({-1,-7,7,-4,19,6,-9,-5,-2,-5})