

// Define outer function
// function createLoginTracker(){

//   const userInfo = {
//     username: "user1",
//     password: "password123"
//   }

//   let attemptCount = 0
//   let maxAttempts = 3
//   const historyAttempt = []

//  const passwordCount = () => {
//     return attemptCount++
//     historyAttempt.push(attemptCount)
//   }

  // const password = (passwordAttempt) => {
  //   if (passwordAttempt === userInfo.password)
  //     return console.log("login successful")

  // }


  // if (passwordAttempt === userInfo.password) {
  //   console.log("Login successful")
  // }
  // else if (){

  // }




//   if (attemptCount > maxAttempts) {
//     return "Account locked due to too many failed login attempts."
//   }
//   if (passwordAttempt === userInfo.password && attemptCount <= maxAttempts) {
//     return "login successful."
//   }
//   else {
//     let remainingAttempts = maxAttempts - attemptCount
//     console.log("Login failed. You have ${remainingAttempts} attempts remaining.")
//   }
//   return password
// }

// console.log(createLoginTracker())



// /////////////////
// function createLoginTracker(){
  
//   const userInfo = {
//     username: "user1",
//     password: "password123"
//   }

//   let attemptCount = 0
//   let passwordAttempt = attemptCount++
// }
///////////////////////////

const userInfo1 = {
  username: "user1",
  password: "password123"
}
const userInfo2 = {
  username: "user2",
  password: "securePassword"
}

function createLoginTracker(userInfo){
  let attemptCount = 0
  let maxAttempts = 3

  const passwordEntered = (passwordAttempt) => {

    if (passwordAttempt === userInfo.password) {
      attemptCount < maxAttempts
      return "Login successful"
    }    
    if (attemptCount >= maxAttempts){
      return "Account locked due to too many failed login attempts"
    }
    else (passwordAttempt !== userInfo.password)
      attemptCount++
      return `Attempt ${attemptCount}: Login failed`;
    
  }
  return passwordEntered
}

const userLogin1 = createLoginTracker(userInfo1)
const userLogin2 = createLoginTracker(userInfo2)

console.log(userLogin1("password123"))
console.log(userLogin2("securePassword"))













module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};