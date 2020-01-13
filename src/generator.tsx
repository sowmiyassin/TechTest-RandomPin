export default function () {
    let counts: any = {};
    let validCounts: any = {};
    let randomNumber;
    for (var i = 0; i < 1; i++) {
        let firstDigit = Math.floor(Math.random() * 10);
        let secondDigit = Math.floor(Math.random() * 10);
        let thirdDigit = Math.floor(Math.random() * 10);
        let fourthDigit = Math.floor(Math.random() * 10);
        let validDigitOne, validDigitTwo, validDigitThree, validDigitFour;
        counts[i] = {
            firstDigit,
            secondDigit,
            thirdDigit,
            fourthDigit
        };
        // validCounts[i] = {
        //     validDigitOne,
        //     validDigitTwo,
        //     validDigitThree,
        //     validDigitFour
        // };
        // //** start validation on 2 consecutive digits********// 
        // validCounts[i].validDigitOne = (counts[i].firstDigit !== counts[i].secondDigit);
        // validCounts[i].validDigitTwo = ((counts[i].secondDigit !== counts[i].thirdDigit) && (counts[i].secondDigit !== counts[i].firstDigit));
        // validCounts[i].validDigitThree = ((counts[i].thirdDigit !== counts[i].fourthDigit) && (counts[i].thirdDigit !== counts[i].secondDigit));
        // validCounts[i].validDigitFour = ((counts[i].fourthDigit !== counts[i].thirdDigit));
        // //** end validation on 2 consecutive digits********// 

        //
var pin=firstDigit+""+secondDigit+""+thirdDigit+""+fourthDigit;
console.log("pin "+pin);
let validatePIN = function(pin : any) {
  if (/^(^(?!.*(11|22|33|44|55|66|77|88|99|0123|1234|2345|3456|4567|5678|6789|7890|4321|5432|6543|7654|8765|9876|0987))\d{4}$)$/.test(pin)) {
    return true;
  } else {
    return false;
  }
}

//


        let validRandomNumber = validatePIN(pin);
     //   ((validCounts[i].validDigitOne && validCounts[i].validDigitTwo && validCounts[i].validDigitThree && validCounts[i].validDigitFour));
        if (validRandomNumber === false) {
            let firstDigit = Math.floor(Math.random() * 10);
            let secondDigit = Math.floor(Math.random() * 10);
            let thirdDigit = Math.floor(Math.random() * 10);
            let fourthDigit = Math.floor(Math.random() * 10);
            counts[i] = {
                firstDigit,
                secondDigit,
                thirdDigit,
                fourthDigit
            };
        }
        
        randomNumber = firstDigit + "" + secondDigit + "" + thirdDigit + "" + fourthDigit;
    }
    return randomNumber;
}