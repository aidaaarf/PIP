// PART 1
const user = {name :"Aida", id : 1}

// user = {};
// TypeError: Assignment to constant variable.
// MDN said "const deklarasi tidak dapat dideklarasikan ulang oleh deklarasi lain dalam lingkup yang sama."

user.name = "Modified"
// pass
// object keys are not protected

// =======================================================================

// PART 2
const config = {
    settings: {
        theme : "dark",
        notification :true
    }
}
// function getTheme(obj) {
//   return obj.settings.theme
// }
// console.log(getTheme(config)); 

// RESULT: pass return dark

function getTheme(obj) {
  return obj?.settings?.theme ?? null;
}
console.log(getTheme(config)); 

function getTheme(obj) {
  return obj?.settings?.theme ?? null;
}
console.log(getTheme({}));


// RESULT: return null

// ======================================================================
// PART 3
// for (initialization; condition; afterthought)
  //statement
const users = [
{name: "Aida", isActive: true},
{name: "Amel", isActive: false},
{name: "Ajeng", isActive: true},
{name: "Aisyah", isActive: false},
{name: "Aziz", isActive: true}
];

const activeUser = users.filter(user => user.isActive);
console.log(activeUser);

// ======================================================================
// PART 4
function validateUser(user) {
  if (user.name==""){ 
    return false;
  }

  if (!user.email.includes("@")) {
    return false;
  }

  if (user.age <= 18) {
    return false;
  }

  return true;
}
console.log(validateUser({ name: "Aida", email: "aida@test.com", age: 25 })); // true
console.log(validateUser({ name: "", email: "aida@test.com", age: 25 })); // false
console.log(validateUser({ name: "Anonim", email: "invalid-email", age: 25 })); // false
console.log(validateUser({ name: "Aida", email: "aida@test.com", age: 15 })); // false


// Why do we use const for objects even if we plan to change their properties?
    // Penggunaan const digunakan supaya tidak ada duplikat mendefinisian suatu objek, 
    // meskipun nantinya properti dari objek tsb diubah-ubah


// What is the difference between == and ===? Which one did you use in validateUser and why?
    // == adalah equal digunakan untuk mencocokan value
    // ==== adalah strict equal digunakan untuk mencocokkan value & data type

// How did you check if the email string contains an "@"?
    // menggunakan ".includes"
