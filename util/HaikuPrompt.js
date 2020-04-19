const Enquirer = require("enquirer");
const { measureSentence } = require("./parserUtils");

class HaikuPrompt extends Enquirer.StringPrompt {
  constructor(options = {}) {
    super(options);
    this.syllables = 0;
  }

  render() {
    this.syllables = measureSentence(this.value);
    const syllablesRemaining = this.requiredSyllables - this.syllables;
    if (!this.value) {
      this.clear(this.state.size);
      this.write("" + "\n" + this.styles.danger(syllablesRemaining) + "\n");
    } else if (!this.state.submitted) {
      this.clear(this.state.size);
      this.write(
        this.value + "\n" + this.styles.danger(syllablesRemaining) + "\n"
      );
    } else {
      this.clear(this.state.size);
      this.write(this.styles.submitted(this.value));
    }
    this.restore();
  }
}

module.exports = HaikuPrompt;
