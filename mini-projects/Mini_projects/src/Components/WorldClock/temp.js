const User = {
  name: "David",
  getName(){
    console.log(this.name)
  }
}

// let foo = User.getName
// setTimeout(foo, 1000)
//
// setTimeout(User.getName, 1000)
//
//
// let foo = () => User.getName()
// setTimeout(foo, 1000)
// setTimeout(() => User.getName(), 1000) // 1 ver.


const Human = {
  gender: "male",
  age: 26
}

const getData = function (mod, next){
  console.log(this.gender, this.age, mod, next)
}

const boundingGetData = getData.bind(Human, '333') // 2 ver.
//boundingGetData()

getData.call(Human, '444', 555, 666) // 3 ver.

getData.apply(Human, [222, 'fdfs']) // 4 ver.