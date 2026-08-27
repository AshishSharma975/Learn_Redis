import { sum } from "../utils.js";

describe("sum function", () => {

    test('adds 1+2 to rqual 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

    test("check if 2+2 is equal to 4", () => {
        expect(2 + 2).toBe(4);
    })
})