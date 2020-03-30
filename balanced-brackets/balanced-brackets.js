// March 29, 2020
// https://www.hackerrank.com/challenges/balanced-brackets/problem

const isBalanced = (s) => {
  const brackets = s.split("");

  const openBrackets = [];
  for (let i = 0; i < brackets.length; i++) {
    const currentBracket = new Bracket(brackets[i]);

    if (currentBracket.isOpening()) {
      openBrackets.push(currentBracket);
    } else if (currentBracket.isClosing()) {
      const lastOpenBracket = openBrackets.pop();

      if (!lastOpenBracket || !currentBracket.closes(lastOpenBracket)) {
        return "NO";
      }
    } else {
      throw new Error("Input string contains an invalid bracket character");
    }
  }
  return openBrackets.length ? "NO" : "YES";
};

const OPENING_BRACKETS = [ "(", "[", "{" ];
const CLOSING_BRACKETS = [ ")", "]", "}" ];

class Bracket {
  constructor(value) {
    this.value = value;
  }

  isOpening() {
    return OPENING_BRACKETS.indexOf(this.value) >= 0;
  }

  isClosing() {
    return CLOSING_BRACKETS.indexOf(this.value) >= 0;
  }

  closes(otherBracket) {
    const closingIndex = CLOSING_BRACKETS.indexOf(this.value);
    const openingIndex = OPENING_BRACKETS.indexOf(otherBracket.value);
    return this.isClosing() && otherBracket.isOpening() && openingIndex === closingIndex;
  }
}

module.exports = { isBalanced };
