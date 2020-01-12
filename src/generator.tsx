export default function () {
    let counts: any = {};
    let validCounts: any = {};
    let randomNumber;
    for (var i = 0; i < 5; i++) {
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
        validCounts[i] = {
            validDigitOne,
            validDigitTwo,
            validDigitThree,
            validDigitFour
        };
        //** start validation on 2 consecutive digits********// 
        validCounts[i].validDigitOne = (counts[i].firstDigit !== counts[i].secondDigit);
        validCounts[i].validDigitTwo = ((counts[i].secondDigit !== counts[i].thirdDigit) && (counts[i].secondDigit !== counts[i].firstDigit));
        validCounts[i].validDigitThree = ((counts[i].thirdDigit !== counts[i].fourthDigit) && (counts[i].thirdDigit !== counts[i].secondDigit));
        validCounts[i].validDigitFour = ((counts[i].fourthDigit !== counts[i].thirdDigit));
        //** end validation on 2 consecutive digits********// 

        let validRandomNumber = ((validCounts[i].validDigitOne && validCounts[i].validDigitTwo && validCounts[i].validDigitThree && validCounts[i].validDigitFour));
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