const quotes = [
  "Here are some random quotes: Life is like", "riding a bicycle. To keep your balance, you", "must keep moving by Albert Einstein;", 
  "only thing we have to fear is fear itself", "Franklin D. Roosevelt; and Be yourself", "everyone else is already taken attributedto", "Oscar Wilde. Other examples include", "never too late to be what you might have", "been and The purpose of life is to live it", "to taste experience to the utmost"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
       usedIndexes.clear()
  }

  while (true) {
      const randomIdx = Math.floor(Math.random() * quotes.length);

       if (usedIndexes.has(randomIdx)) continue

      const quote = quotes[randomIdx];
      quoteElement.innerHTML = quote;
      usedIndexes.add(randomIdx)
      break
  }
  
}