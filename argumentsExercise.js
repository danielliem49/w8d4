function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

function sum2(...args){
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum
}

Function.prototype.myBind = function (ctx) {
    let that = this
    let bindArgs = Array.from(arguments.slice(1))
    return function () {
      let callArgs = Array.from(arguments)
      return that.apply(ctx, bindArgs.concat(callArgs))
    }
}

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  let that = this
  return function(...callArgs) {
    return that.apply(ctx, bindArgs.concat(callArgs))
  }
}

function curriedSum(numArgs) {
  numbers = [];
  return function _curriedSum(num) {
      numbers.push(num);
      if(numbers.length < numArgs) {
        return _curriedSum
      } else {
        // let sum = 0
        // numbers.forEach(num => {sum += num})
        // return sum
        return numbers.reduce((acc, el) => acc + el)
        // return numbers.map(el => el * 2).reduce((acc, el) => acc + el)

      }
    }
}

const curSum = curriedSum(4);
console.log(curSum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  let that = this
  let numbers = [] // [5, 30, 20, 1]
  return function _curry(num) {
    numbers.push(num)
    if (numbers.length < numArgs) {
      return _curry(...numbers)
    } else {
      return that(numbers)
    }
  }
}

Function.prototype.curry2 = function (numArgs) {
    let that = this
    let numbers = []
    return function _curry2(num) {
        numbers.push(num)
        if (numbers.length < numArgs) {
            return _curry2
        } else {
            return that.apply(null, numbers)
        }
    }
}
