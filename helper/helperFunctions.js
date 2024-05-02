module.exports = {
    testFunction(a, b) {
        let testString = "";
        for (let i = 0; i < 3; i++) {
          testString = testString + a + " " + b + " ";
        }
        return testString;
      }


}