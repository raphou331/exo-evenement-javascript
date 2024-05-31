// ● Interface Utilisateur (HTML) :
// ○ Un titre h1 (Mes tâches)
// ○ Un champ de texte pour saisir une nouvelle tâche.
// ○ Un bouton pour ajouter la tâche à la liste.
// ○ Une liste (ul) pour afficher les tâches.
// ● Fonctionnalités (JavaScript) :
// ○ Ajouter une nouvelle tâche :
// ■ Récupérer la valeur du champ de texte lorsque le
// bouton d'ajout est cliqué.
// ■ Créer un nouvel élément de liste (li) avec cette
// valeur et l'ajouter à la lis

let task = document.getElementById("task");
//pour secelctionner avec querySelectore on selectionne avec #
let add = document.querySelector("#add");
let liste = document.getElementById("liste");

add.addEventListener("click", ajouterTache);
//le tableau
let array = JSON.parse(localStorage.getItem("data")) || [];
console.log(array);
//pour montrer se qu il y a dans le local storage
function displayTask() {
  liste.innerHTML = "";
  for (let item of array) {
    let li = document.createElement("li");
    li.textContent = item;
    let btn = document.createElement("button");
    btn.textContent = "supprimer";
    li.appendChild(btn);
    liste.appendChild(li);
    btn.addEventListener("click", function () {
      let indice = array.indexOf(item);
      console.log(indice);
      array.splice(indice, 1);
      localStorage.setItem("data", JSON.stringify(array));
      displayTask();
    });
  }
}

function ajouterTache(e) {
  e.preventDefault();
  if (array.find((el) => el === task.value) || task.value === "") {
    alert(`la valeur de ${task.value} existe déja ou la tache est vide`);
    task.focus();
  } else {
    array.push(task.value);
    localStorage.setItem("data", JSON.stringify(array));
    task.value = "";
    task.focus();
    displayTask();
  }
}

displayTask();
