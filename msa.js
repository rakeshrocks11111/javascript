//1. console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(str,num){
    console.log(str,num)
    return str.slice(0,7)
}
const output= abbrev_name("Robin Singh",7)
console.log(output)


//2. console.log(rakesh_javvadi("Ranjith Cherry"));
// "Ranjth C."


function rakesh_javvadi(str,num){
    // console.log(str,num)
    return str.slice(0,9)
}
const output =rakesh_javvadi("Ranjith Cherry",9)
console.log(output)