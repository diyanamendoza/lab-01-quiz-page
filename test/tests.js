import { countsAsAYes } from "../utils.js";

const test = QUnit.test;

test('countsAsAYes takes in Yes and returns true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testResponse1 = 'Yes';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(testResponse1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('countsAsAYes takes in YASSS and returns true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testResponse2 = 'YASSS';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(testResponse2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

