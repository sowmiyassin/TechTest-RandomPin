

function fourDigitRandomizer(): any {
  var fourDigitPin = Math.floor(1000 + Math.random() * 9000);

  return fourDigitPin;
}

export default function () {
    var firstPin = fourDigitRandomizer();
    var secondPin =fourDigitRandomizer();
    var thirdPin = fourDigitRandomizer();
    var fourthPin = fourDigitRandomizer();
    var fifthPin = fourDigitRandomizer();

  return firstPin + " - " + secondPin + " - " + thirdPin + " - " + fourthPin + " - " + fifthPin;
}