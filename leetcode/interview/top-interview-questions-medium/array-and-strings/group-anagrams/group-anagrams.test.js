const { groupAnagrams } = require("./group-anagrams");

describe("groupAnagrams", () => {
    test("Example test case 1", () => {
        const input = [ "eat", "tea", "tan", "ate", "nat", "bat" ];
        expect(groupAnagrams(input)).toEqual([
            [ "eat", "tea", "ate" ],
            [ "tan", "nat" ],
            [ "bat" ],
        ]);
    });

    test("Input has the same word twice", () => {
        const input = [ "eat", "tea", "tan", "ate", "nat", "bat", "bat", "eat" ];
        expect(groupAnagrams(input)).toEqual([
            [ "eat", "tea", "ate", "eat" ],
            [ "tan", "nat" ],
            [ "bat", "bat" ],
        ]);
    });

    test("Input is empty", () => {
        const input = [];
        expect(groupAnagrams(input)).toEqual([]);
    });
});