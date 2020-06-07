export function intToWords(int, capitalize) {
    let map = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten"
    }

    if (capitalize) {
      let str = map[int]
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return map[int]
  }
