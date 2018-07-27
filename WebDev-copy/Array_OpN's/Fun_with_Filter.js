
//MENU

let menu = ["Chicken Tandoori",
            "Aloo Tikki",
            "Paneer Tikka",
            "Onion Rings",
            "Garlic Naan",
            "Egg Curry"];

/*indexOf() method returns the first index at which a
  given element can be found in the array, or -1 if
  it is not present.*/

function vegMenu(item) {
    if(item.toLowerCase().indexOf("chicken") !== -1 )
    {
        return ( false );
    }
    if (item.toLowerCase().indexOf("egg") !== -1 )
    {
        return ( false );
    }
    else
    {
        return ( true );
    }
}

function jainMenu(item) {
    if(item.toLowerCase().indexOf("garlic") !== -1 )
    {
        return ( false );
    }
    if (item.toLowerCase().indexOf("onion") !== -1 )
    {
        return ( false );
    }
    else
    {
        return ( true );
    }
}


console.log("Menu: " + menu );
console.log("Veg Menu: " + menu.filter(vegMenu) );
console.log("Jain Menu: " + menu.filter(vegMenu).filter(jainMenu) );
