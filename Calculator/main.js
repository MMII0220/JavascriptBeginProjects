// window.addEventListener('load', () => {
//   'use strict';
//   const operand = document.querySelectorAll('#operand');
//   const operator = document.querySelectorAll('#operator');
//   const dot = document.querySelector('#dot');
//   const equal = document.querySelector('#equal');
//   const clean = document.querySelector('#clean');
//   const expression = document.querySelector('.expression');

//   let addDot = 0;

//   operand.forEach((oper) => {
//     oper.addEventListener('click', (e) => {
//       expression.value += e.target.textContent;
//     });
//   });
//   operator.forEach((oper) => {
//     oper.addEventListener('click', (e) => {
//       expression.value += e.target.textContent;
//       addDot = 0;
//     });
//   });
//   dot.addEventListener('click', () => {
//     if (checkForDot()) {
//       expression.value += '.';
//     } else {
//       addDot = 1;
//     }
//   });
//   clean.addEventListener('click', () => {
//     expression.value = '';
//   });
//   equal.addEventListener('click', () => {
//     expression.value = eval(expression.value);
//   });

//   function checkForDot() {
//     for (let i = 0; i < expression.value.length; ++i) {
//       if (expression.value[i] == '.') addDot = 1;
//       else if (checkForOperator(expression.value[i])) addDot = 0;
//     }
//     return addDot;
//   }

//   function checkForOperator(expr) {
//     if (expr == '+' || expr == '-' || expr == '*' || expr == '/') {
//       addDot = 0;
//       return 1;
//     }
//   }
// });
window.addEventListener('load', () => {
  'use strict';
  const operand = document.querySelectorAll('#operand');
  const operator = document.querySelectorAll('#operator');
  const dot = document.querySelector('#dot');
  const equal = document.querySelector('#equal');
  const clean = document.querySelector('#clean');
  const expression = document.querySelector('.expression');

  let addDot = 0;
  let noMoreOperator = 0;

  operand.forEach((oper) => {
    oper.addEventListener('click', (e) => {
      expression.value += e.target.textContent;
      noMoreOperator = 0;
    });
  });

  operator.forEach((oper) => {
    oper.addEventListener('click', (e) => {
      if (noMoreOperator == 0) {
        expression.value += e.target.textContent;
        addDot = 0;
        noMoreOperator = 1;
      }
    });
  });

  dot.addEventListener('click', () => {
    if (addDot === 0) {
      expression.value += '.';
      addDot = 1;
    }
  });

  clean.addEventListener('click', () => {
    expression.value = '';
  });

  equal.addEventListener('click', () => {
    expression.value = eval(expression.value);
  });
});
