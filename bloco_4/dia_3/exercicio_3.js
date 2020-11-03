// Agora inverta o lado do triângulo. Por exemplo:

// n = 5
//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let triangulo;

for (let i = 0; i < n; i += 1){
    triangulo = "";
    for (let x = 0; x <= n; x += 1){
        if (x >= n - i){
            triangulo += '*'
        } else {
            triangulo += ' ';
        }
    }
    console.log(triangulo);
}


