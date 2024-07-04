class uber {
    constructor(baseFare, farePerKm, extraKm){
        this.baseFare = baseFare
        this.farePerKm = farePerKm
    }
    totalFare(totalKm){

        return this.baseFare + (this.farePerKm * totalKm)
    }

    
}
//50 is basefare +15 for each km
var calculateFare1 = new uber(50,15)

// Enter the total km to get the price
console.log(calculateFare1.totalFare(11))