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

    let num1 = 23883498437969434237863247832763276347943623;
    console.log(num1 + " " +  typeof(num1));

    let num2 = BigInt(23883498437969434237863247832763276347943623);
    console.log(num2 + " " + typeof(num2));

    //Non-numeric Datatypes
        //3. String
        //let message = 'Samson, you are a great guy and God bless you.';
        //console.log(message);
        //console.log(typeof(message))

        //const subscriber = "Jacob Samson";
        //const amountPaid = 30000;
        //const successMessage = ". Thanks for subscribing to our premium package.";

        //console.log("The subscriber" + " " + subscriber + " " + "paid the amount of" + " " + "$" + amountPaid);
        //console.log("Mrs" + " " + "Johnson" + " " + "Maryanne");

        const firstname = "Ridwan ";
        const lastname = "Kolapo ";
        const message = "is a young and gentle vibrant man.";
        console.log(firstname + lastname  + message);

        //4. Boolean is used for true or false statement;
        const bool = false;
        console.log(typeof(bool))
        if(bool) {
            console.log("You are eligible to vote")
        } else {
            console.log("You never mature guy, grow up man.")
        }

       
        //6. Undefined 
        let errorMessage = undefined;
        console.log(errorMessage);
        let successMessage;
        console.log(successMessage);

        errorMessage = "Your was declined";
        console.log(errorMessage);
        console.log(typeof errorMessage);

        successMessage = "Your payment was successful"
        console.log(successMessage);
        console.log(typeof successMessage);

        //7. Symbol //This will be explained next week


//2. Non-primitive/object datatype are more advanced data types stored in the queue memory (FIFO => First In First Out)
        //1. Object => This allow us to group different datatypes together. 
            // It uses curly bracket => {}, 
            // it also uses key value pairs.
        //2. Array
        //3. Function
        //4. Date
        //5. null

    let user = {
        name: "Jacob Samson A.",
        age: 45,
        gender: "Male",
        email: "ainasamson12@gmail.com",
        county: "Federal Republic of Nigeria",
        isNigerian: true,
        hobbies: "Listening to music or Coding",
        fishing: null,
    };

    console.log(user);
    //dot notation to one of the data in an object.
    console.log("Age:" + user.age);
    console.log("Fulllname:" + user.name);
    //square bracket to one of the data in an object.
    console.log("Hobbies:", user["hobbies"]);
    console.log("Country:", user["county"]);

    //Template Literals / Template Strings ( ````````````````````````````````````````````````````````````` and ${})
    console.log(`${user.name} is a young and handsome bobo and he's ${user.age} years old, and guess what he's from ${user.county}. One of the the things he enjoys doing the most is ${user.hobbies} `)
    //alert(user);

    alert(`${user.name} is a young and handsome bobo and he's ${user.age} years old, and guess what he's from ${user.county}. One of the the things he enjoys doing the most is ${user.hobbies}.`)
    //document.writeln(user);
    document.writeln(`${user.name} is a young and handsome bobo and he's ${user.age} years old, and guess what he's from ${user.county}. One of the the things he enjoys doing the most is ${user.hobbies} `)


       