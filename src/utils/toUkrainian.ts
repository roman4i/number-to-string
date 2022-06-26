import { uaNumbers } from "../storage/ua";

const teen = ['10', '11', '14', '15', '16', '19'];
const hundreds = ['100', '200', '300', '400', '500', '600', '900'];

const processUA = (input: string):string => {
    let result = '';
    let modInput = input;
    let length = modInput.length;

    while(modInput[0] === '0') {
        modInput = modInput.slice(1);
        length = modInput.length;
    }

    const getHundreds = (number: string) => {
        if(number[0] === '0'){
            if(number[1] === '0') {
                if(number[2] !== '0') {
                    getOneDigit(number[2]);
                }
            } else {
                getTwoDigit(number.slice(1,3));
            }
        } else {
            if(hundreds.indexOf(number[0] + '00') > -1) {
                result += uaNumbers[number[0] + '00'] + ' ';
            } else {
                result += uaNumbers[number[0]] + 'сот ';
            }
            if(number[1] === '0') {
                getOneDigit(number[2]);
            } else {
                getTwoDigit(number.slice(1, 3));
            }
        }
    }

    const getTwoDigit = (number: string) => {
        if(parseInt(number) < 20) {
            if(teen.indexOf(number) > -1) {
                result += uaNumbers[number] + ' ';
            } else {
                result += uaNumbers[number[1]] + 'надцять ';
            }
        } else {
            result += uaNumbers[number[0] + '0'] + ' ' + uaNumbers[number[1]] + ' ';
        }
    }

    const getOneDigit = (number: string) => {
        result += uaNumbers[number] + ' ';
    }

    const parseGroup = (groupLength: number) => {
        if(groupLength === 0) getOneDigit(modInput[0]);
        if(groupLength === 1) getTwoDigit(modInput.slice(0, 2));
        if(groupLength === 2) getHundreds(modInput.slice(0, 3));
        modInput = modInput.slice(groupLength + 1, length);
        length = modInput.length;
    }

    const coefficient = (names: string[], digits: number) => {
        let stringCoef = '';
        switch (modInput[modInput.length - digits]) {
            case '1':
                if(modInput[modInput.length - digits -1] === '1') {
                    stringCoef = names[2];
                } else {
                    stringCoef = names[0];
                }
                break;
            case '2':
            case '3':
            case '4':
                if(modInput[modInput.length - digits -1] === '1') {
                    stringCoef = names[2];
                } else {
                    stringCoef = names[1];
                }
                break;
        
            default:
                stringCoef = names[2] ;
                break;
        }

        return stringCoef;
    }

    const newDigit = (fromTo: number[], textCoef: string[], coefLength: number) => {
        if (length > fromTo[0] && length < fromTo[1]) {
            const digitResp = coefficient(textCoef, coefLength)
            parseGroup(length-coefLength);
            result += digitResp;
        }
    }

    while (length > 0) {
        if(length > 13) {
            result = 'Out of range';
            break;
        } else {
            newDigit([9, 15], ['мільярд ', 'мільярди ', 'мільярдів '], 10);
            newDigit([6, 10], ['мільйон ', 'мільйони ', 'мільйонів '], 7);
            newDigit([3, 7], ['тисяча ', 'тисячі ', 'тисяч '], 4);
            if(length < 4) {
                parseGroup(length - 1);
            }
        }
    }

    return result;
}


export default processUA;