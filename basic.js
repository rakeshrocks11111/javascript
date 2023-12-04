function truncate_string (string, length)
{
    if((string.constructor === string) && (length>0))
    {
        return string.slice(0, length);
    }
};
console.log(truncate_string("Robin singh",4));



// function abbrev_name (string)
// {
//     let split_string = string.split(" ");
//     if (split_string.length > 1)
//     {
//         return (split_string[0] + " "+ split_string[1].charAt(0) + ".");
//     }
//     return split_string;
// };
// console.log(abbrev_name("Robin Singh"));