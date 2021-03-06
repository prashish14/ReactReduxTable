var casual = require('casual-browserify');

export default function seedData(){
  let seedArray = new Array(100)
  casual.define('user', function(){
    return {
      id: (casual.integer(0, 100000) + casual.unix_time),
      name: casual.full_name,
      email: casual.email,
      signUpDate: casual.date('YYYY-MM-DD'),
      motto: casual.catch_phrase
    }
  })
  for(let i = 0, l = seedArray.length; i < l; i++){
    seedArray[i] = casual.user
  }
  return seedArray
}
