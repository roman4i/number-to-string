type numbersList = {
    usual: {
        [index: string]: string;
    };
    special: {
        [index: string]: string;
    };
}

const engNumbers: numbersList = {
    usual: {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
    },
    special: {
        '2': 'twen',
        '3': 'thir',
        '5': 'fif',
        '8': 'eigh',
    }
};

export default engNumbers;