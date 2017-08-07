// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let avg_price = 0;
  for (let i = 0; i < data.length; i++){
      avg_price = avg_price + data[i].price;
  }
  avgPrice = (avg_price/data.length).toFixed(2);
  return console.log("The average price is $" + avg_price);
}




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let list_of_tems = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].price >= 14 && data[i].price <= 18){
        list_of_items.push(data[i].title)
    }
  }
  return console.log(listOfItems.join('\r\n'));
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let GBP_items = "";
  for (let i = 0; i < data.length; i++){
    if (data[i].currency_code === "GBP"){
        GBP_item += data[i].title + " costs " + data[i].price + " pounds."
    }
  }
  return console.log(GBP_items);

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let wooden_items = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.includes('wood')){
        wooden_items.push(data[i].title + " is made of wood")
    }
  }
  return console.log(wooden_items.join('\r\n'));
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let more_than_eight_materials = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.length >= 8){
        more_than_eight_materials.push(data[i].title + " has " + data[i].materials.length + " materials:")
  }
  return console.log(more_than_eight_materials.join('\r\n'));
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let made_by_seller = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i].who_made === "i_did"){
        made_by_seller += 1;
    }
  }
  return console.log(made_by_seller + " items were made by their sellers.");
}
