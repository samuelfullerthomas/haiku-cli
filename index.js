#!/usr/bin/env node
// this is a program
// there are some nice things in it
// like a pile of leaves
const Enquirer = require("enquirer");
const clipboardy = require("clipboardy");
const HaikuPrompt = require("./util/HaikuPrompt");

const enquirer = new Enquirer();

enquirer.register("haiku", HaikuPrompt);

async function validate() {
  return this.requiredSyllables === this.syllables;
}

function formatHaiku(haiku) {
  return Object.values(haiku).join("\n");
}

const defaultValues = {
  type: "haiku",
  validate,
};

async function run() {
  const haiku = await enquirer
    .prompt([
      {
        ...defaultValues,
        name: "firstLine",
        requiredSyllables: 5,
      },
      {
        ...defaultValues,
        name: "secondLine",
        requiredSyllables: 7,
      },
      {
        ...defaultValues,
        name: "thirdLine",
        requiredSyllables: 5,
      },
    ])
    .catch(() => {
      process.exit(1);
    });

  clipboardy.writeSync(formatHaiku(haiku));
}

run();
