function getNewIfMatched(pinA: any, pinB: any, pinC: any, pinD: any, pinE: any, stepCount: any): any {
  if(stepCount == 2) {
      if(pinB == pinA) {
          pinB = fourDigitRandomizer();
          if(pinB == pinA) {
              return getNewIfMatched(pinA, pinB, null, null, null, 2);
          } else {
              return pinB;
          }
      } else {
          return pinB;
      }
  } else if(stepCount == 3) {
      if(pinC == pinA || pinC == pinB) {
          pinC = fourDigitRandomizer();
          if(pinC == pinA || pinC == pinB) {
              return getNewIfMatched(pinA, pinB, pinC, null, null, 3);
          } else {
              return pinC;
          }
      } else {
          return pinC;
      }
  } else if(stepCount == 4) {
      if(pinD == pinA || pinD == pinB || pinD == pinC) {
          pinD = fourDigitRandomizer();
          if(pinD == pinA || pinD == pinB || pinD == pinC) {
              return getNewIfMatched(pinA, pinB, pinC, pinD, null, 4);
          } else {
              return pinD;
          }
      } else {
          return pinD;
      }
  } else if(stepCount == 5) {
      if(pinE == pinA || pinE == pinB || pinE == pinC || pinE == pinD) {
          pinE = fourDigitRandomizer();
          if(pinE == pinA || pinE == pinB || pinE == pinC || pinE == pinD) {
              return getNewIfMatched(pinA, pinB, pinC, pinD, pinE, 5);
          } else {
              return pinE;
          }
      } else {
          return pinE;
      }
  } else {
      return false;
  }
}

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
    var secondPin = getNewIfMatched(firstPin, fourDigitRandomizer(), null, null, null, 2);
    var thirdPin = getNewIfMatched(firstPin, secondPin, fourDigitRandomizer(), null, null, 3);
    var fourthPin = getNewIfMatched(firstPin, secondPin, thirdPin, fourDigitRandomizer(), null, 4);
    var fifthPin = getNewIfMatched(firstPin, secondPin, thirdPin, fourthPin, fourDigitRandomizer(), 5);

  return firstPin + " - " + secondPin + " - " + thirdPin + " - " + fourthPin + " - " + fifthPin;
}