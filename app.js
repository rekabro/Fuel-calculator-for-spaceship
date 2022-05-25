function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('How many km-s would you like to travel? Type a number!');
    var averageLitersOverHundred = prompt('What is the spaceship\'s general fuel consumption in liters? Type a number!');
    var tankCapacity = prompt('What\'s the capacity of the fuel tank in liters? Type a number!');
    
    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    
    var fuelToOffload = tankCapacity - requiredFuel;
    alert(`The quantity of fuel neccessary for your travel is: ${requiredFuel} L\nThe quantity of fuel to unload is: ${fuelToOffload} L`);
}
calculateFuelToOffload();


