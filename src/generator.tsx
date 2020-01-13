

function validatePin(pinValue: any) {
  if(pinValue != "" && pinValue != null && pinValue != undefined) {
    if (/(00|11|22|33|44|55|66|77|88|99|012|123|234|345|456|567|678|789|890|210|321|432|543|654|765|876|987|098)/.test(pinValue)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function fourDigitRandomizer(): any {
  var fourDigitPin = Math.floor(1000 + Math.random() * 9000);
  if(validatePin(fourDigitPin) == true) {
    return fourDigitRandomizer();
  } else {
    return fourDigitPin;
  }
}

export default function () {
    var firstPin = fourDigitRandomizer();
    var secondPin = fourDigitRandomizer();
    var thirdPin = fourDigitRandomizer();
    var fourthPin = fourDigitRandomizer();
    var fifthPin = fourDigitRandomizer();

  return firstPin + " - " + secondPin + " - " + thirdPin + " - " + fourthPin + " - " + fifthPin;
}