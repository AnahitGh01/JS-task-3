let mstr = prompt()

// Step 1. Create an empty string that will host the new created string
let newmstr= " "    
// Step 2. Create the FOR loop
    /* The starting point of the loop will be (mstr.length - 1) which corresponds to the 
       last character of the string, "!"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */

for (let i = mstr.length - 1; i >= 0; i--) {        
        newmstr += mstr[i];     // or newmstr = newmstr + mstr[i]
    }
 /* Here Hello World!'s length equals 12
        For each iteration:    i = mstr.length - 1  and  newmstr = newmstr + mstr[i]
        First iteration:       i = 12 - 1 = 11,          newmstr = "" + "!" = "!"
        Second iteration:      i = 11 - 1 = 10,          newmstr = "!" + "d" = "!d"
        Third iteration:       i = 10 - 1 = 9,           newmstr = "!d" + "l" = "!dl"
        Fourth iteration:      i = 9 - 1 = 8,            newmstr = "!dl" + "r" = "!dlr"
        Fifth iteration:       i = 8 - 1 = 7,            newmstr = "!dlr" + "o" = "!dlro"
        Sixth iteration:       i = 7 - 1 = 6,            newmstr = "!dlro" + "W" = "!dlroW"
        Seventh iteration:     i = 6 - 1 = 5,            newmstr = "!dlroW" + " " = "!dlroW "
        Eighth iteration:      i = 5 - 1 = 4,            newmstr = "!dlroW " + "o" = "!dlroW o"
        Ninth iteration:       i = 4 - 1 = 3,            newmstr = "!dlroW o" + "l" = "!dlroW ol"
        Tenth iteration:       i = 3 - 1 = 2,            newmstr = "!dlroW ol" + "l" = "!dlroW oll"
        Eleventh iteration:    i = 2 - 1 = 1,            newmstr = "!dlroW oll" + "e" = "!dlroW olle"
        Twelfth iteration:     i = 1 - 1 = 0,            newmstr = "!dlroW olle" + "H" = "!dlroW olleH"
    End of the FOR Loop */ 

console.log(newmstr)

/* Example:
Input: Hello World!
Output: !dlroW olleH */