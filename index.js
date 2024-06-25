"use strict";
/*       ENUMS:
            Enums in Typescript are commonly used when you want to represent a set of related
            values and choose one value from multiple options. Enums provide a convenient way
            to define a set of named values and associate them with specific meanings.

                                            OR
                Enums in TypeScript allow you to group related values together and give them meaningful names.

                enum is the set value which returnindex or define index or retun value
                For example, you can use an enum to represent days of the week (Monday, Tuesday, etc.) or
                colors (Red, Green, Blue).
 */
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Satursday"] = 5] = "Satursday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
// there are two ways to access the enums 
// console.log(Days[3]);  // this will prints the value thursday which store in address 3
// console.log(Days.Friday)  // this will prints address of member Friday which is 4
// console.log(Days);  // this will show you the hidden address of member of enums
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 10] = "red";
    Colors[Colors["green"] = 11] = "green";
    Colors[Colors["blue"] = 100] = "blue";
    Colors[Colors["yellow"] = 101] = "yellow";
})(Colors || (Colors = {}));
console.log(Colors);
// ---------------------------------------------------------------------------------------------------------------------------------------
/* Types Of Enums :
There are three types of enums in TypeScript:
1. Numeric Enums
2. String Enums
3. Heterogeneous Enums
*/
// 1. Numeric Enums :
var NumericEnum;
(function (NumericEnum) {
    NumericEnum[NumericEnum["A"] = 1] = "A";
    NumericEnum[NumericEnum["B"] = 2] = "B";
    NumericEnum[NumericEnum["C"] = 3] = "C";
})(NumericEnum || (NumericEnum = {}));
console.log(NumericEnum.A); // prints 1
