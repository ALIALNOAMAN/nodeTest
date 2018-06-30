



async function printUsers() {

  let a = new Promise( resolve => {

  setTimeout(() => {

  resolve(5)

  }, 4000)

  })

let users = await a

console.log(users)


}

printUsers()
