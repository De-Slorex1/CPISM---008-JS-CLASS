// //JS VARIABLES => These are named storage that holds a value in a memeory
// //Javascript is case sensitive.
// //Keywords => They are reserved words that have special meaning to the compiler.
// //var, let and const to declare a variable

// let num1 = 12;//Lowercase

// var num2 = 15; //Uppercase

// const num3 = 20; //camel case

// // let a_b_l_e = 35; //snake case


// //Any variable declared with let and const can't be re-assigned
// let num4 = 34;
// var num2 = 50;
// const num5 = 45;

// //Output
// console.log(num1); //You can only output on the terminal with console.log()
// console.log(num2);
// console.log(num3);

// alert("You are welcome to javascript class.");
// document.writeln("This class is really fun, right? ");











//Javascript Datatypes => There are 8 different types of datatpes, which are categorized into which inlcude
//1. Primitive datatype are stored in the stack memory of the computer (LIFO = Last In First Out)
    //Numeric Datatypes
        //1. Numbers
        //2. BigInt()

//     let num1 = 23883498437969434237863247832763276347943623;
//     console.log(num1 + " " +  typeof(num1));

//     let num2 = BigInt(23883498437969434237863247832763276347943623);
//     console.log(num2 + " " + typeof(num2));

//     //Non-numeric Datatypes
//         //3. String
//         //let message = 'Samson, you are a great guy and God bless you.';
//         //console.log(message);
//         //console.log(typeof(message))

//         //const subscriber = "Jacob Samson";
//         //const amountPaid = 30000;
//         //const successMessage = ". Thanks for subscribing to our premium package.";

//         //console.log("The subscriber" + " " + subscriber + " " + "paid the amount of" + " " + "$" + amountPaid);
//         //console.log("Mrs" + " " + "Johnson" + " " + "Maryanne");

//         const firstname = "Ridwan ";
//         const lastname = "Kolapo ";
//         const message = "is a young and gentle vibrant man.";
//         console.log(firstname + lastname  + message);

//         //4. Boolean is used for true or false statement;
//         const bool = false;
//         console.log(typeof(bool))
//         if(bool) {
//             console.log("You are eligible to vote")
//         } else {
//             console.log("You never mature guy, grow up man.")
//         }

       
//         //6. Undefined 
//         let errorMessage = undefined;
//         console.log(errorMessage);
//         let successMessage;
//         console.log(successMessage);

//         errorMessage = "Your was declined";
//         console.log(errorMessage);
//         console.log(typeof errorMessage);

//         successMessage = "Your payment was successful"
//         console.log(successMessage);
//         console.log(typeof successMessage);

//         //7. Symbol //This will be explained next week


// //2. Non-primitive/object datatype are more advanced data types stored in the queue memory (FIFO => First In First Out)
//         //1. Object => This allow us to group different datatypes together. 
//             // It uses curly bracket => {}, 
//             // it also uses key value pairs.
//         //2. Array
//         //3. Function
//         //4. Date
//         //5. null

//     let user = {
//         name: "Jacob Samson A.",
//         age: 45,
//         gender: "Male",
//         email: "ainasamson12@gmail.com",
//         county: "Federal Republic of Nigeria",
//         isNigerian: true,
//         hobbies: "Listening to music or Coding",
//         fishing: null,
//     };

//     console.log(user);
//     //dot notation to one of the data in an object.
//     console.log("Age:" + user.age);
//     console.log("Fulllname:" + user.name);
//     //square bracket to one of the data in an object.
//     console.log("Hobbies:", user["hobbies"]);
//     console.log("Country:", user["county"]);

//     //Template Literals / Template Strings ( ````````````````````````````````````````````````````````````` and ${})
//     console.log(`${user.name} is a young and handsome bobo and he's ${user.age} years old, and guess what he's from ${user.county}. One of the the things he enjoys doing the most is ${user.hobbies} `)
//     //alert(user);

//     //alert(`${user.name} is a young and handsome bobo and he's ${user.age} years old, and guess what he's from ${user.county}. One of the the things he enjoys doing the most is ${user.hobbies}.`)
//     //document.writeln(user);
//     //document.writeln(`${user.name} is a young and handsome bobo and he's ${user.age} years old, and guess what he's from ${user.county}. One of the the things he enjoys doing the most is ${user.hobbies} `)


//     //JS OBJECT
//     const person = {
//         firstname: "Mr. Tayo",
//         lastname: "Kolapo",
//         email: "tayo@gmail.com",
//         age: 30,
//         hobbies: "Coding",
//         address: {
//             street: "No. 43 Ogungbade street",
//             city: "Ibadan",
//             state: "Oyo State",
//             county: "Nigeria",
//         }
//     }

//     person.phoneNumber = "09052639990";
//     person["maritalStatus"] = "Single";

//     //Template Literals / Template Strings
//     console.log(`${person.firstname} ${person.lastname}`);
//     console.log(`${person["email"]}`);
//     console.log(`${person.address.street} ${person.address.city}, ${person.address.state}, ${person.address.county}`);
//     console.log(`${person["address"]["street"] } ${person["address"]["city"]}, ${person["address"]["state"]}, ${person["address"]["county"]}`)

//     console.log(person);

//     //Object Methods
//     console.log("Keys")
//     console.log(Object.keys(person));
//     console.log("Values")
//     console.log(Object.values(person));
//     console.log("Entries")
//     console.log(Object.entries(person));

//     //Array => 
//     // An array uses square bracket([]) to hold or store more than one value that have different datatypes under a single variable name.
//     // const fruit1 = "Mango";
//     // const fruit2 = "Pawpaw";
//     // const fruit3 = "Apple";

//     const arr_of_fruits = ["Mango", "Pawpaw", "Apple", "Water Melon"];
//     console.log(arr_of_fruits[3]);
//     arr_of_fruits[4] = "Grape";
//     arr_of_fruits[5] = "dragon fruit";
//     console.log(arr_of_fruits);

//     const arr_of_users = [
//         {
//             firstname: "Mr. Tayo",
//             lastname: "Kolapo",
//             email: "tayo@gmail.com",
//             age: 30,
//             hobbies: "Coding",
//             address: {
//                 street: "No. 43 Ogungbade street",
//                 city: "Ibadan",
//                 state: "Oyo State",
//                 county: "Nigeria",
//             }
//         },
//         {
//             firstname: "Ms. Victory",
//             lastname: "Ifeoluwa",
//             email: "victoy@gmail.com",
//             age: 30,
//             hobbies: "Coding",
//             address: {
//                 street: "No. 46 Makinde street",
//                 city: "Ibadan",
//                 state: "Oyo State",
//                 county: "Nigeria",
//             }
//         }
//     ]

//    //console.log(arr_of_users);
//    console.log(arr_of_users[0].address.street);

//    console.log(`${arr_of_users[0].firstname} ${arr_of_users[0].lastname} is from ${arr_of_users[0].address.street} ${arr_of_users[0].address.city}, ${arr_of_users[0].address.state}, ${arr_of_users[0].address.county}. He's a gentle guy.`);


   //Function: They are block of code that have specific meaning or use.
   //Function are reusable block of code designed to perform a specific task.
   //Function are fundamentals in every programming.
   //There are different tpyes of function
    //Function By Declaration
    // function multiply() {  //Declared a function
    //     return 4 * 5;   //Define a function
    // } 
    // //Invoking or calling or executing of a function
    // multiply()
    //successMessage()
    
    // let val1 = Number(prompt("Enter your first number"));
    // let val2 = Number(prompt("Enter your second number"));
    // let val3 = Number(prompt("Enter your third number"));

    // let output = operation(val1, val2, val3); //val1, val2, val3 sent as argument

    // alert(
    //     `
    //         Addition: ${output.add}
    //         Subtraction: ${output.sub}  
    //         Multiplication: ${output.mul}
    //         Divsion: ${output.div}
    //     `
    // );

    // function message() {
    //     return "Hello, Mr Samson from UK. How are you doing today?"
    // }
    // console.log(message());

    // function operation(a, b, c) { //a, b, c are parameters
    //     return {
    //         add: a + b + c,
    //         sub: a - b- c,
    //         mul: a * b * c,
    //         div: a / b / c
    //     }
    // }

    //prompt
   //4, 6, 8 are called argument

    //Terminal => Console.log()
    //Popup => alert()
    //Webpage => DOM


    //Function By Expression
    // const successMessage = function(firstname, lastname, product, price) {
    //     firstname = prompt("Enter your firstname");
    //     lastname = prompt("Enter your lastname");
    //     product = prompt("Enter your product name e.g Rice, Beans, Garri, Semovita, Groundnut oil, Palm oil");
    //     price = prompt("Enter your product price");

    //     alert(`${lastname} ${firstname} bought ${product} for ₦${price} at Akobo branch. Thank you for your patronage😍`);
    // }

   

    //Function Hoisting: It allows developers to invoke a function before declaringthe function. It only wors for function by declaration 

    //Function with parameters and argument
    //Arrow Function: It is a newly introduce type of function in Javascript
    // const errorMessage = (name, age, gender) => {
    //     name = prompt("Enter your name");
    //     gender = prompt("Enter your gender");
    //     age = Number(prompt("Enter your age"));

    //     if(age >= 25) {
    //         if(gender === "female") {
    //             alert("Young lady, you suppose don marry get 5 children join😡");
    //         } else {
    //             alert("Guy, Normal Normal. You suppose don born 2 children😡");
    //         }
    //     } else {
    //         alert("Guy, go and read your book, You never mature😂😂😂😂! ");
    //     }
    // }

    // errorMessage();

    //Immediately Invoke Function OR Anonymous Function
    // (
    //     function(){
    //         alert("Hello, I am anonymou and I am running on my own")
    //     }
    //     ()
    // )


    //Tomorrow

    //String Method are function that can be used to modify and manipulate strings e.g
    //.length
    //.toLowerCase()
    //.toUpperCase()
    //.trim() is used to removed white space from strings
    //.concat()
    //.slice() is used to slice out some part of a string that need to be removed from the whole string
  

    //.split() is used to cinvert a string into an array.
    //.replace()
    //.replaceAll()

    // const message = "Currently javascript string methods with my colleague";
    // console.log(message.length);
    // console.log(message[message.length - 1]);

    // const fullname = "mr. olushola saheed";
    // const uppercase = fullname.toUpperCase();
    // console.log(uppercase);

    // const fullname = "MR. OLUSHOLA SAHEED";
    // const lowercase = fullname.toLowerCase();
    // console.log(lowercase);

    // const username = prompt("Enter Your username");
    // const password = prompt("Enter your password");
    // const trimmed_username = username.trim();
    // const trimmed_password = password.trim();
    // alert(`Your username:${username} and password:${password} has been successfully submmitted!!!`);


    //Slice Method => It takes two argument, the first argument is the index starting point, and the  second argument is the index ending point of the string to be cut out.

    // const output = "Mr. Ifeoluwa is such a calm guy";
    // console.log(output.length);
    // const sliced_output = output.slice(0, 11);
    // console.log(sliced_output);

    // const firstname = "Muftau";
    // const lastname = "Abideen";
    // const fullname = firstname.concat(" ", lastname);
    // console.log(fullname);
    // console.log(firstname + " " + lastname);
    // console.log(`${firstname} ${lastname}`);

    // const message = "Your favourite show is here. Kindly subscribe now.";
    // console.log(message.length);
    // console.log(typeof message);
    // const convert_to_arr = message.split(" ");
    // console.log(convert_to_arr);
    // console.log(typeof convert_to_arr);

    // const sentence = "One of the the things I love about my students is that my students are all attentive in class and the teaching and learning process is not stressful with my students.";
    // // const replaced = sentence.replace("students", "pupils")
    // // console.log(replaced);
    // const replacedAll = sentence.replaceAll("students", "pupils")
    // console.log(replacedAll);









    
    //Number Method
    //Callback Function / Higher Order Function: These are functions that calls another function.

    //Array Method: These are method that used to update, modify or manipulate an array and these includes:
    //Non-iterable Array Methods
        //push() => is used to add items at the last index of the array.
        //pop() => is used to remove item at the last index of the array. 
        //unshift() => is used to add items at the first index of the array.
        //shift() => is used to remove item at the first index of the array.
        //join() => is used to convert an array to string.
        //concat() => is used to add more than one array together
        //splice() => is used to add or replace items at any index of the array, 
            // it takes three argument or more and the first argument is the starting index, second argument is the numbers of Items to add included or replaced.
        //slice() => is used to remove items at aan index of the array.

        const arr_of_strings = ["Data Science", "Data Analysis", "Data Engineering", "UI/UX Design"];
        arr_of_strings.push("Sofware Development", "Cyber Security");
        //arr_of_strings.push()
        console.log(arr_of_strings);

        arr_of_strings.pop();
        console.log(arr_of_strings);

        arr_of_strings.unshift("AI Engineering");
        console.log(arr_of_strings);

        arr_of_strings.unshift("Financial Advisor");
        console.log(arr_of_strings);

        arr_of_strings.shift()
        console.log(arr_of_strings);

        console.log(arr_of_strings);

        const convert_to_str = arr_of_strings.join("  ");
        console.log(convert_to_str);
        console.log(typeof convert_to_str);

        const arr_of_even_numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
        const arr_of_odd_numbers = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
        const joined_array = arr_of_even_numbers.concat(arr_of_odd_numbers);
        console.log(joined_array);
        //console.log(arr_of_even_numbers.concat(arr_of_odd_numbers));

        const arr_of_users = [
            {
                username: "Samclef",
                password: "samclef@1234",
                email: "samclef@gmail.com"
            },
            {
                username: "Queen_MaryAnn",
                password: "queen@123",
                email: "queenmaryann@gmail.com"
            },
            {
                username: "Lord_Louis",
                password: "louis@123",
                email: "louis@gmail.com"
            },
            {
                username: "Alhaji_Ganiu",
                password: "alhaji@1234",
                email: "ganiu@gmail.com"
            },
            {
                username: "fineboy_favour_sokoya",
                password: "sokoya@1234",
                email: "favoursokoya@gmail.com"
            },
        ];
        
        const spliced = arr_of_users.splice(1, 0, {username: "Honourable_Tayo", password: "tayo@123", email: "tayo@gmail.com"});
        console.log(spliced);
        console.log(arr_of_users);

        const sliced = arr_of_users.slice(0, 2);
        console.log(sliced);
        console.log(arr_of_users);

    //Iterable Array Methods
        //forEach()
        //Map()
        //Filter()
        //Sort()
        //Reduce()
        //every()
        //some()

    //document.getElementById("container")

    //Operators
        //Assignment Operator => (=)
        //Arithmetic Operator => (+, -, /, *, %, **, ++, --, +=, -=, *=, /=, %=, **= )
        //Comparism Operator => (<, >, <=, >=, ==, ===, )
        //Logical Operator => &&, ||,!
        //Ternary Operator
    
    // let num1 = 45;
    // let num2 = 35;
    // num1 = num2;
    // console.log(num1)


