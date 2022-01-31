
// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = (str) => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  const textArray = str.split(" ");

  // TODO: Velg første ord så du har noe å sammenlikne med
  let longestWord = textArray[0];

  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].length > longestWord.length) {
      longestWord = textArray[i];
    }
  }
  console.log(longestWord);
};

console.log(longestWord(text));
