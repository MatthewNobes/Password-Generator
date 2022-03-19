import { generatePassword } from './generatePassword';

describe('Testing the expected outputs of generatePassword', () => {
    it('Should output a 12 character long password when passed 12', () => {
        const length = 12;
        const password = generatePassword(length);
        const passwordLength = password.length;
        expect(passwordLength).toBe(length);
    });

    it('Should output a 128 character long password when passed 128', () => {
        const length = 128;
        const password = generatePassword(length);
        const passwordLength = password.length;
        expect(passwordLength).toBe(length);
    });

    it('Should output a 789 character long password when passed 789', () => {
        const length = 789;
        const password = generatePassword(length);
        const passwordLength = password.length;
        expect(passwordLength).toBe(length);
    });

    it('Should output a 10 character long password when passed the string value of 10', () => {
        const length = '10';
        const password = generatePassword(length);
        const passwordLength = password.length;
        expect(passwordLength).toBe(parseInt(length));
    });

    it('Should output a 106 character long password when passed the string value of 106', () => {
        const length = '106';
        const password = generatePassword(length);
        const passwordLength = password.length;
        expect(passwordLength).toBe(parseInt(length));
    });
});

describe('Testing the output of generatePassword when passed incorrect parameters', () => {
    it('Should return an empty string when passed a string', () => {
        const length = 'hello';
        const password = generatePassword(length);
        expect(password).toBe('');
    });

    it('Should return an empty string when passed a boolean true value', () => {
        const length = true;
        const password = generatePassword(length);
        expect(password).toBe('');
    });

    it('Should return an empty string when passed a boolean false value', () => {
        const length = false;
        const password = generatePassword(length);
        expect(password).toBe('');
    });
});