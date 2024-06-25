/*       ENUMS: stands for ( enumerations)

            Enums in Typescript are commonly used when you want to represent a set of related 
            values and choose one value from multiple options. Enums provide a convenient way
            to define a set of named values and associate them with specific meanings.

                                            OR
                Enums in TypeScript allow you to group related values together and give them meaningful names. 

                enum is the set value which returnindex or define index or retun value
                For example, you can use an enum to represent days of the week (Monday, Tuesday, etc.) or 
                colors (Red, Green, Blue). 
 */

enum Days {
    Monday,Tuesday,Wednesday,Thursday,Friday,Satursday,Sunday
    }
    // there are two ways to access the enums 
    // console.log(Days[3]);  // this will prints the value thursday which store in address 3
    // console.log(Days.Friday)  // this will prints address of member Friday which is 4
    // console.log(Days);  // this will show you the hidden address of member of enums
    

    enum Colors{
        red= 10,
        green,
        blue = 100,
        yellow

    }
    console.log(Colors)  //

    // ---------------------------------------------------------------------------------------------------------------------------------------
    /* Types Of Enums :
    There are three types of enums in TypeScript:
    1. Numeric Enums
    2. String Enums
    3. Heterogeneous Enums
    */
   // 1. Numeric Enums :
//                    Numeric enums in TypeScript allow you to define a set of named constants with numeric values.
   enum NumericEnum {
    A = 1,
    B = 2,
    C = 3
    }
    console.log(NumericEnum.A);  // prints 1

    // Example 2
    enum Marks{
        A = 90,
        B = 80,
        C = 70
    }
    console.log(Marks.A);  // prints 90

    // ---------------------------------------------------------------------------------------------------------------------------------------------
// 2 String Enums
//                String enums in TypeScript allow you to define a set of named constants with string values.
enum StringEnum {
    A = "apple",
    B = "banana",
    C = "cherry"
    }
    console.log(StringEnum.A);  // prints "apple"
//    Example   2
enum Status {
    Pending = "PENDING",
    Fulfilled = "FULFILLED",
    Rejected = "REJECTED"
}
console.log(Status);


    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // 3. Heterogeneous Enums:
    //                     Heterogeneous enums in TypeScript are a mix of both numeric and string members within the same enum. 
    //  It’s like having a menu wheresome options are numbers and others are words
    enum HeterogeneousEnum {
        A = 1,
        B = "apple",
        // C = true     // this will give you error becoz enums are use for only number and strings
        C = 7
        }
         console.log(HeterogeneousEnum.A);  // prints 1
        // Example 2
         enum Result {
            Success = 'SUCCESS',
            Failure = 0,
        }
        console.log(Result);
        

// --------------------------------------------------------------------------------------------------------------------------------------------
// Conculation here i will make a simple program to show the real usecase of enums in programming world;
// Question: 
