const tableau = new Array(10).fill().map((x, i) => i + 1);
const recherche = Math.floor(Math.random() * 10);

function recursive_binary_search(
  recherche,
  tableau,
  debut = 0,
  fin = tableau.length - 1
) {
  if (debut > fin) {
    return null;
  } else {
    const mid = Math.floor((debut + fin) / 2);
    if (tableau[mid] === recherche) {
      return mid;
    } else if (tableau[mid] > recherche) {
      return recursive_binary_search(recherche, tableau, debut, mid - 1);
    } else {
      return recursive_binary_search(recherche, tableau, mid + 1, fin);
    }
  }
}

console.log("Tableau :", tableau);
console.log("Elément à trouver :", recherche);
console.log("Position :", recursive_binary_search(recherche, tableau));
