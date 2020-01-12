import randomGenerator from './generator';
export default function () {
    let uniquePins = [];
    for (let i=0; i<5; i++) {
        let generatedPin = randomGenerator();
        if (uniquePins.indexOf(generatedPin) === -1) {
            uniquePins.push(generatedPin);
        }
    }
    return uniquePins;
}