import engNumbers from "../storage/eng";

const processENG = (input: string) => {
    let result = '';
    let stringInput = input.toString();
    let length = stringInput.length;

    while(stringInput[0] === '0') {
        stringInput = stringInput.slice(1);
        length = stringInput.length;
    }

    const getHundreds = (number: string) => {
        if(number[0] === '0'){
            if(number[1] === '0') {
                if(number[2] !== '0') {
                    getSingle(number[2]);
                }
            } else {
                getDozens(number.slice(1, 3));
            }
        } else {
            result += engNumbers.usual[number[0]] + ' hundred ';
            if(number[1] === '0') {
                getSingle(number[2]);
            } else {
                getDozens(number.slice(1, 3));
            }
        }
    }

    const getDozens = (number: string) => {
        if (parseInt(number) < 20) {
            if(number in engNumbers.usual) {
                result += engNumbers.usual[number] + ' ';
            } else {
                if(number[1] in engNumbers.special) {
                    result += engNumbers.special[number[1]] + 'teen ';
                } else {
                    result += engNumbers.usual[number[1]] + 'teen ';
                }
            }
        } else {
            if(number[0] in engNumbers.special) {
                console.log('Special ', engNumbers.special[number[0]] + 'ty ');
                result += engNumbers.special[number[0]] + 'ty ' + ((parseInt(number[1]) !== 0) ? engNumbers.usual[number[1]] + ' ' : '');
            } else {
                console.log('Usual', engNumbers.usual[number[0]] + 'ty ');
                result += engNumbers.usual[number[0]] + 'ty ' + ((parseInt(number[1]) !== 0) ? engNumbers.usual[number[1]] + ' ' : '');
            }
        }
    }

    const getSingle = (number: string) => {
        result += engNumbers.usual[number] + ' ';
    }

    const parseGroup = (groupLength: number) => {
        if(groupLength === 0) getSingle(stringInput[0]);
        if(groupLength === 1) getDozens(stringInput.slice(0, 2));
        if(groupLength === 2) getHundreds(stringInput.slice(0, 3));
        stringInput = stringInput.slice(groupLength + 1, length);
        length = stringInput.length;
    }

    const initDigit = (digitRange: number[], coefName: string, coefLength: number) => {
        if (length > digitRange[0] && length < digitRange[1]) {
            parseGroup(length - coefLength);
            result += coefName;
        }
    }

    while(length > 0) {
        if(length > 13) {
            result = 'Out of range';
            break;
        } else {
            initDigit([9, 15], 'billion ', 10);
            initDigit([6, 10], 'million ', 7);
            initDigit([3, 7], 'thousand ', 4);
            if(length < 4) {
                parseGroup(length - 1);
            }
        }
    }

    return result;
}

export default processENG;