
    console.log("    Tekena's Superstore      ");
    console.log(" Welcome and what would you like to get today from us");
    console.log("1. Drinks " + "2. Snacks " + "3. Full meals ");
    console.log("Please choose a number");
        function repeatQuestion() {
    let option = prompt();
    let cart = []; // An array for the items to be stored in the cart
    let Food;
    let drink_n;
    let snack_n;
    let meal_n;
    switch (parseInt(option)) {
       case 1:
         Food = "Drinks";
         console.log("What drinks would you like");
         console.log("1. Apple juice" + " 2. Coke" + " 3. Red Wine");
         drink_n = prompt('Select a drink');
         if (drink_n == 1) {
           console.log("Apple juice has been chosen!")
           cart.push("Apple");
         } else if (drink_n == 2) {
           console.log("Coke has been chosen!")
           cart.push("Coke");
         } else if (drink_n == 3) {
           console.log("Red wine has been chosen!")
           cart.push("Red Wine");
         } else {
           console.log("The number you have selected is invalid please enter a valid command");
           return 0;
         }
         break;
       case 2:
         console.log("What snacks would you like?");
         console.log("1. Chips" + " 2. Cookies" + " 3. Fruit");
         snack_n = prompt('Select a snack'); 
         if (snack_n == 1) {
           console.log("Chips have been chosen!")
           cart.push("Chips");
         } else if (snack_n == 2) {
           console.log("Cookies have been chosen!")
           cart.push("Cookies");
         } else if (snack_n == 3) {
           console.log("Fruit has been chosen!")
           cart.push("Fruit")
           return ;
         } else {
           console.log("The number you have selected is invalid please select a valid command");
           return 0;
         }
         break;
       case 3:
         console.log("What full meals would you like?");
         console.log("1. Pizza" + " 2. Burger" + " 3. Pasta");
         meal_n = prompt('Select a full meal');
         if (meal_n == 1) {
           console.log("Pizza has been chosen!")
           cart.push("Pizza");
         } else if (meal_n == 2) {
           console.log("Burger has been chosen!")
           cart.push("Burger");
         } else if (meal_n == 3) {
           console.log("Pasta has been chosen!")
           cart.push("Pasta");
         } else {
           console.log("The number you have selected is invalid please enter a valid command");
           return 0;
         }
         break;
       default:
         console.log("Choose something on our shopping list!");
         return 0;
    }

   }
   repeatQuestion();