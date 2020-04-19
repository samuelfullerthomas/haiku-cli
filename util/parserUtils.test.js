const test = require("tape");
const { getSyllablesFromWord, measureSentence } = require("./parserUtils");

test("foo", function (t) {
  const one = getSyllablesFromWord("foo");
  t.equal(one, 1);
  t.end();
});

test("bar", function (t) {
  const one = getSyllablesFromWord("bar");
  t.equal(one, 1);
  t.end();
});

test("haiku", function (t) {
  const two = getSyllablesFromWord("haiku");
  t.equal(two, 2);
  t.end();
});

test("orange", function (t) {
  const two = getSyllablesFromWord("orange");
  t.equal(two, 2);
  t.end();
});

test("silver", function (t) {
  const two = getSyllablesFromWord("silver");
  t.equal(two, 2);
  t.end();
});

test("contratrian", function (t) {
  const tour = getSyllablesFromWord("contratrian");
  t.equal(tour, 4);
  t.end();
});

test("tackle", function (t) {
  const two = getSyllablesFromWord("tackle");
  t.equal(two, 2);
  t.end();
});

test("fire", function (t) {
  const one = getSyllablesFromWord("fire");
  t.equal(one, 1);
  t.end();
});

test("safely", function (t) {
  const two = getSyllablesFromWord("safely");
  t.equal(two, 2);
  t.end();
});

test("Iowa", function (t) {
  const three = getSyllablesFromWord("Iowa");
  t.equal(three, 3);
  t.end();
});

test("autobiographies", function (t) {
  const six = getSyllablesFromWord("autobiographies");
  t.equal(six, 6);
  t.end();
});

test("antidisestablishmentarianism", function (t) {
  const eleven = getSyllablesFromWord("antidisestablishmentarianism");
  t.equal(eleven, 11);
  t.end();
});

test("measureSentence - antidisestablishmentarianism is foo", function (t) {
  const thirteen = measureSentence("antidisestablishmentarianism is foo");
  t.equal(thirteen, 13);
  t.end();
});
