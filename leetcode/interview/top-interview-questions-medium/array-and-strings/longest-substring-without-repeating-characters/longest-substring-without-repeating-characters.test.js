const { lengthOfLongestSubstring } = require("./longest-substring-without-repeating-characters");

describe("lengthOfLongestSubstring", () => {
    test("Example test case 1", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });

    test("Example test case 2", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    });

    test("Example test case 3", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });

    test("Input is empty string", () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    });

    test("Longer input", () => {
        const input = "adhaklhncndsuauktttlasadwqzmpoqiqwertyuiopasdfghjklzxcvbnasdkjhakjhdsaljqwertyuiopasdfghjklzxcvbnmaasdawaedasd";
        expect(lengthOfLongestSubstring(input)).toBe(26);
    });
});