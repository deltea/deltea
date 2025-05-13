export const quotes = [
  "the wpis are wip-ing",
  "computers are kinda cool i guess",
  "you can just do things",
  "imagine having a bad portfolio website",
  "whatever happens, happens",
  "insert funny quote here",
];

export const randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
