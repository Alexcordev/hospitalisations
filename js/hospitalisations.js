'use_strict'

const patients = [
  {
    "Dossier": "1",
    "Nom": "Léger",
    "Prenom": "Émile",
    "Naissance": "26 mars 1917",
    "Sexe": "M"
  },
  {
    "Dossier": "2",
    "Nom": "Bernard",
    "Prenom": "Marie",
    "Naissance": "3 février 1946",
    "Sexe": "F"
  },
  {
    "Dossier": "3",
    "Nom": "Chartrand",
    "Prenom": "Guy",
    "Naissance": "5 avril 1959",
    "Sexe": "M"
  },
  {
    "Dossier": "4",
    "Nom": "Côté",
    "Prenom": "André",
    "Naissance": "2 septembre 1978",
    "Sexe": "M"
  },
  {
    "Dossier": "5",
    "Nom": "Lavoie",
    "Prenom": "Carole",
    "Naissance": "4 novembre 1973",
    "Sexe": "F"
  },
  {
    "Dossier": "6",
    "Nom": "Martin",
    "Prenom": "Diane",
    "Naissance": "2 décembre 1965",
    "Sexe": "F"
  },
  {
    "Dossier": "7",
    "Nom": "Lacroix",
    "Prenom": "Pauline",
    "Naissance": "25 janvier 1956",
    "Sexe": "F"
  },
  {
    "Dossier": "8",
    "Nom": "St-Jean",
    "Prenom": "Arthur",
    "Naissance": "7 octobre 1912",
    "Sexe": "M"
  },
  {
    "Dossier": "9",
    "Nom": "Béchard",
    "Prenom": "Marc",
    "Naissance": "8 août 1980",
    "Sexe": "M"
  },
  {
    "Dossier": "10",
    "Nom": "Chartrand",
    "Prenom": "Mario",
    "Naissance": "23 juillet 1947",
    "Sexe": "M"
  }
];

const etablissements = [
  {
    "Etablissement": "1234",
    "Nom": "Centre hospitalier Sud",
    "Adresse": "1234 boul. Sud, Montréal, Qc",
    "CodePostal": "H2M EY6",
    "Telephone": "(514) 323-1234"
  },
  {
    "Etablissement": "2346",
    "Nom": "Hôpital Nord",
    "Adresse": "7562, Rue du Souvenir, Nordville, Qc",
    "CodePostal": "J4R 2Z5",
    "Telephone": "(450) 222-3333"
  },
  {
    "Etablissement": "3980",
    "Nom": "Hôpital Centre",
    "Adresse": "4637 boul. de l'Église, Montréal, Qc",
    "CodePostal": "H3J 4K8",
    "Telephone": "(514) 323-5678"
  },
  {
    "Etablissement": "4177",
    "Nom": "Centre hospitalier Est",
    "Adresse": "12 rue Bernanrd, Repentigny, Qc",
    "CodePostal": "J8R 3K5",
    "Telephone": "(450) 589-2345"
  },
  {
    "Etablissement": "7306",
    "Nom": "Hôpital du Salut",
    "Adresse": "11, Rue de la Rédemption, St-Basile, Qc",
    "CodePostal": "J8H 2D4",
    "Telephone": "(450) 345-6789"
  },
  {
    "Etablissement": "8895",
    "Nom": "Derniers recours",
    "Adresse": "999 Rue St-Pierre, Longueuil, Qc",
    "CodePostal": "J7B 3J6",
    "Telephone": "(450) 555-6741"
  }
];

const hospitalisations = [
  {
    "Code etablissement": "1234",
    "No dossier patient": "5",
    "Date admission": "14-août-00",
    "Date sortie": "14-août-01",
    "Specialite": "médecine"
  },
  {
    "Code etablissement": "1234",
    "No dossier patient": "10",
    "Date admission": "12-déc-92",
    "Date sortie": "12-déc.-92",
    "Specialite": "chirurgie"
  },
  {
    "Code etablissement": "2346",
    "No dossier patient": "8",
    "Date admission": "03-mars03",
    "Date sortie": "05-mars-03",
    "Specialite": "médecine"
  },
  {
    "Code etablissement": "2346",
    "No dossier patient": "1",
    "Date admission": "11-nov-97",
    "Date sortie": "12-nov.-97",
    "Specialite": "orthopédie"
  },
  {
    "Code etablissement": "2346",
    "No dossier patient": "3",
    "Date admission": "12-avr.-95",
    "Date sortie": "30-avr.-95",
    "Specialite": "médecine"
  },
  {
    "Code etablissement": "3980",
    "No dossier patient": "5",
    "Date admission": "14-févr.-00",
    "Date sortie": "14-mars-00",
    "Specialite": "médecine"
  },
  {
    "Code etablissement": "3980",
    "No dossier patient": "5",
    "Date admission": "01-janv.-01",
    "Date sortie": "01-févr.-01",
    "Specialite": "médecine"
  },
  {
    "Code etablissement": "3980",
    "No dossier patient": "9",
    "Date admission": "03-avr.-95",
    "Date sortie": "08-avr.-95",
    "Specialite": "orthopédie"
  },
  {
    "Code etablissement": "3980",
    "No dossier patient": "7",
    "Date admission": "27-nov.-99",
    "Date sortie": "04-déc.-99",
    "Specialite": "chirurgie"
  },
  {
    "Code etablissement": "3980",
    "No dossier patient": "10",
    "Date admission": "28-avr.-97",
    "Date sortie": "05-mai-97",
    "Specialite": "chirurgie"
  },
  {
    "Code etablissement": "4177",
    "No dossier patient": "3",
    "Date admission": "03-août-01",
    "Date sortie": "05-déc.-01",
    "Specialite": "médecine"
  },
  {
    "Code etablissement": "4177",
    "No dossier patient": "3",
    "Date admission": "02-févr.-02",
    "Date sortie": "23-févr.-02",
    "Specialite": "orthopédie"
  },
  {
    "Code etablissement": "7306",
    "No dossier patient": "2",
    "Date admission": "23-mai-98",
    "Date sortie": "27-mai-98",
    "Specialite": "orthopédie"
  }
];

const table = document.getElementById("tableBody");
const head = document.getElementById("tableHead");
const table1 = document.getElementById("tableRows");
const head1 = document.getElementById("entete");
const afficheInfos = document.getElementById("display");
const closeIcon = document.getElementById("close");
const container = document.querySelector('.container-fluid');
const selectDossier = document.createElement('select');
const select = document.getElementById('sel');
const select1 = document.getElementById('sel1');
const select2 = document.getElementById('sel2');
const titre = document.getElementById('titre');
const titre1 = document.getElementById('titre1');
const titre2 = document.getElementById('titre2');
const selectHosParPatient = document.createElement('select');
const labelDossiersPatients = document.createElement('p');
const wholeTable = document.getElementById('tablePatiens');
const navPatients = document.getElementById('nav-patients');
const navEtabs = document.getElementById('nav-etablissements');
const navHospitalisations = document.getElementById('nav-hospitalisations');
const navListePatients = document.getElementById('nav-listePatients');
const navHosEtabs = document.getElementById('nav-etab');

const hideSelects = () => {
  select.style.display = 'none';
  titre.style.display = 'none';
  select1.style.display = 'none';
  titre1.style.display = 'none';
  select2.style.display = 'none';
  titre2.style.display = 'none';
}


const styleTable = (tableHead, tableBody) => {
  afficheInfos.style.color = 'teal';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  tableHead.style.display = 'table-header-group';
  tableHead.style.backgroundColor = 'teal';
  tableHead.style.color = '#fff';
  tableBody.style.display = 'table-row-group';
  closeIcon.style.display = 'block';
  closeIcon.style.margin = 'auto auto auto 220px';
  closeIcon.style.width = '2%';

}

const closeTable = () => {
  table.style.display = 'none';
}

const fillTableHeader = (tableHead, titre1, titre2, titre3, titre4, titre5) => {
  let outputHeader = '';
  outputHeader += `
                 <th scope="col">${titre1}</th>
                 <th scope="col">${titre2}</th>
                 <th scope="col">${titre3}</th>
                 <th scope="col">${titre4}</th>
                 <th scope="col">${titre5}</th> <tr>
                  `;
  tableHead.innerHTML = outputHeader;
}

const fillTableBody = (tableBody, tableName, prop1, prop2, prop3, prop4, prop5, message) => {
  let outputTable = "";
  let compte = 0;
  for (let i = 0; i < tableName.length; i++) {
    outputTable += `
    
                    <td> ${tableName[i][prop1]} </td>
                    <td> ${tableName[i][prop2]} </td>
                    <td> ${tableName[i][prop3]} </td>
                    <td> ${tableName[i][prop4]} </td>
                    <td> ${tableName[i][prop5]} </td> <tr>
                    `;
    compte++;
    tableBody.innerHTML = outputTable;
    afficheInfos.innerHTML = 'Il y a un total de ' + compte + ' ' + message;
  }
}
const fillSelectHosPatient = (elem, tableau, prop, prop1, prop2) => {

  let output = '<option>Choisir...</option>';

  for (let i = 0; tabSize = tableau.length, i < tabSize; i++) {

    output += ` 
              <option>${tableau[i][prop]} (${tableau[i][prop1]} ${tableau[i][prop2]})</option>
              `;

  }

  elem.innerHTML = output;
  afficheInfos.style.color = 'teal';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  afficheInfos.innerHTML = ' Sélectionner un patient pour consulter ses hospitalisations ';
}

const fillSelectHosEtab = (elem, tableau, prop1, prop2) => {

  let output = '<option>Choisir...</option>';

  for (let i = 0; tabSize = tableau.length, i < tabSize; i++) {
    output += ` 
              <option>(${tableau[i][prop1]} ${tableau[i][prop2]})</option>
              `;

  }

  elem.innerHTML = output;
  afficheInfos.style.color = 'teal';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  afficheInfos.innerHTML = "Sélectionner l'établissement";
}
const styleSelect = (elem, selectWidth, selectDisplayType, titreDisplayType, tableHead, tableBody, tableDisplayType, headDisplayType, IconDisplayType, elemTitle, selectLabel, marginTitle, selectMargin, selectBorder) => {
  elem.style.display = selectDisplayType;
  elem.style.width = selectWidth;
  elemTitle.style.display = titreDisplayType;
  tableBody.style.display = tableDisplayType;
  tableHead.style.display = headDisplayType;
  closeIcon.style.display = IconDisplayType;
  elemTitle.innerHTML = selectLabel;
  elemTitle.style.margin = marginTitle;//'auto auto 0px 350px';
  elem.style.margin = selectMargin; //'5px auto auto 350px';
  elem.style.border = selectBorder;
}

const fillTableFromSelect = (tableHead, tableBody, elemSelect, elemTitre, tableau, value, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5, tabValue1, tabValue2, tabValue3, tabValue4, tabValue5, message) => {
  let outputTable = ' ';
  let compte = 0;
  let choix = elemSelect.selectedIndex;
  let choixText = elemSelect.options[choix].text;
  console.log(choixText);
  for (let i = 0; tableSize = tableau.length, i < tableSize; i++) {
    if (tableau[i][value] == choix) {
      console.log(tableau[i][value]);
      fillTableHeader(tableHead, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5);
      outputTable += `
                    <td> ${tableau[i][tabValue1]} </td>
                    <td> ${tableau[i][tabValue2]} </td>
                    <td> ${tableau[i][tabValue3]} </td>
                    <td> ${tableau[i][tabValue4]} </td>
                    <td> ${tableau[i][tabValue5]} </td><tr>
                    
                    `;
      elemSelect.style.display = 'none';
      elemTitre.style.display = 'none';

      compte++;
    }

  }
  styleTable(tableHead, tableBody);
  tableBody.innerHTML = outputTable;
  afficheInfos.innerHTML = choixText + ' a un total de ' + compte + ' ' + message;
}

const fillTableEtabFromSelect = (tableHead, tableBody, elemSelect, tableau, value, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5, tabValue1, tabValue2, tabValue3, tabValue4, tabValue5, message) => {
  let outputTable = ' ';
  let compte = 0;
  let choix = elemSelect.selectedIndex;
  let choixText = elemSelect.options[choix].text.substring(1, 5);
  console.log(choixText);
  for (let i = 0; tableSize = tableau.length, i < tableSize; i++) {

    if (tableau[i][value] == choixText) {
      console.log(tableau[i][value]);
      fillTableHeader(tableHead, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5);
      outputTable += `
                    <td> ${tableau[i][tabValue1]} </td>
                    <td> ${tableau[i][tabValue2]} </td>
                    <td> ${tableau[i][tabValue3]} </td>
                    <td> ${tableau[i][tabValue4]} </td>
                    <td> ${tableau[i][tabValue5]} </td><tr>
                    
                    `;

      compte++;
    }

  }
  elemSelect.style.display = 'none';
  styleTable(tableHead, tableBody);
  afficheInfos.innerHTML = choixText + ' a un total de ' + compte + ' ' + message;
  tableBody.innerHTML = outputTable;
}

const fillTableHosFromSelect = (tableHead, tableBody, elemSelect, elemSelect1, tableau, value, value1, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5, tabValue1, tabValue2, tabValue3, tabValue4, tabValue5, message) => {
  let outputTable = ' ';
  let compte = 0;
  let indexEtab = elemSelect1.selectedIndex;
  let indexHos = elemSelect.selectedIndex;
  let choixEtab = elemSelect1.options[indexEtab].text;
  let choixHos = elemSelect.options[indexHos].text;
  console.log(choixEtab);
  console.log(choixHos);
  for (let i = 0; tableSize = tableau.length, i < tableSize; i++) {

    if (tableau[i][value] === choixEtab.substring(1, 5) && tableau[i][value1] === choixHos) {
      console.log(tableau[i][value]);
      console.log(choixEtab);
      console.log(choixHos);
      fillTableHeader(tableHead, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5);
      outputTable += `
                    <td> ${tableau[i][tabValue1]} </td>
                    <td> ${tableau[i][tabValue2]} </td>
                    <td> ${tableau[i][tabValue3]} </td>
                    <td> ${tableau[i][tabValue4]} </td>
                    <td> ${tableau[i][tabValue5]} </td><tr>
                    
                    `;
      compte++;
    }

  }
  elemSelect.style.display = 'none';
  styleTable(tableHead, tableBody);
  afficheInfos.innerHTML = 'Il y a ' + compte + " hospitalisations pour l'établissement " + choixEtab.substring(1, 5) + '(' + choixEtab.substring(6) + ' avec la spécialité ' + choixHos;
  tableBody.innerHTML = outputTable;
}


const fillOtherSelect = (selectChoix, selectValue, tableau, value, tabValue) => {
  let uniquesArray = [];
  let counting = 0;
  let found = false;
  let compte = 0;
  let choix = selectChoix.selectedIndex;
  let choixText = selectChoix.options[choix].text.substring(1, 5);
  console.log(choixText);
  let output = '<option>Choisir...</option>';
  for (let i = 0; tableSize = tableau.length, i < tableSize; i++) {
    if (tableau[i][value] == choixText) {
      for (y = 0; y < uniquesArray.length; y++) {
        if (tableau[i][tabValue] == uniquesArray[y]) {
          found = true;
        }
      }
      counting++;
      if (counting == 1 && found == false) {
        uniquesArray.push(tableau[i][tabValue]);
        console.log(uniquesArray[y]);
        console.log(tableau[i][tabValue]);
        const selectValue = document.createElement('select');

        output += `
                    <option> ${uniquesArray[y]} </option>
                                       
                    `;
        compte++;

      }

      found = false;
      counting = 0;

    }

  }
  selectValue.innerHTML = output;
  afficheInfos.style.color = 'teal';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  afficheInfos.innerHTML = 'Choisir la spécialité';

}

const fillTableEtablissements = () => {
  fillTableHeader(head, "Établissement", "Nom", "Adresse", "Code Postal", "Téléphone");
  fillTableBody(table, etablissements, "Etablissement", "Nom", "Adresse", "CodePostal", "Telephone", "établissements");
  styleTable(head, table);
  table1.style.display = 'none';
  head1.style.display = 'none';
  hideSelects();
}

const fillTablePatients = () => {
  fillTableHeader(head, "Dossier", "Nom", "Prénom", "Naissance", "Sexe");
  fillTableBody(table, patients, "Dossier", "Nom", "Prenom", "Naissance", "Sexe", "patients qui sont présentement hospitalisés");
  styleTable(head, table);
  table1.style.display = 'none';
  head1.style.display = 'none';
  hideSelects();
}

const fillTableHospitalisations = () => {
  fillTableHeader(head, "Code établissement", "No dossier patient", "Date admission", "Date sortie", "Spécialité");
  fillTableBody(table, hospitalisations, "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", " hospitalisations");
  styleTable(head, table);
  table1.style.display = 'none';
  head1.style.display = 'none';
  hideSelects();
}

const fillSelectHosParPatient = () => {
  fillSelectHosPatient(select, patients, "Dossier", "Prenom", "Nom");
  styleSelect(select, "20%", "block", "block", head, table, "none", "none", "none", titre, "Choisir le patient", "auto auto 0px 350px", "5px auto auto 350px", "0");
  select1.style.display = 'none';
  select2.style.display = 'none';
  titre2.style.display = 'none';
  table1.style.display = 'none';
  table.style.display = 'none';
  head.style.display = 'none';
  head1.style.display = 'none';

}

const fillSelectHosParEtab = () => {
  fillSelectHosEtab(select1, etablissements, "Etablissement", "Nom");
  styleSelect(select1, "20%", "block", "block", head, table, "none", "none", "none", titre, "Choisir l'établissement", "0px auto 0px 350px", "-2px auto 30px 350px", "0");
  titre2.style.display = 'none';
  select.style.display = 'none';
  table.style.display = 'none';
  table1.style.display = 'none';
  head1.style.display = 'none';
}
select.addEventListener('change', (e) => {
  fillTableFromSelect(head, table, select, titre, hospitalisations, "No dossier patient", "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "hospitalisation(s)");
  console.log(select.selectedIndex);

});

select1.addEventListener('change', (e) => {
  fillOtherSelect(select1, select2, hospitalisations, "Code etablissement", "Specialite", "Choisir spécialité");
  styleSelect(select2, "20%", "block", "block", head, table, "none", "none", "none", titre2, "Choisir spécialité", "30px auto 0px 350px", "10px auto 0px 350px", "0");
  console.log(select1.choixEtab);
});
select2.addEventListener('change', (e) => {

  fillTableEtabFromSelect(head, table, select1, etablissements, "Etablissement", "Etablissement", "Nom", "Adresse", "CodePostal", "Telephone", "Etablissement", "Nom", "Adresse", "CodePostal", "Telephone", "hospitalisation(s)");
  fillTableHosFromSelect(head1, table1, select2, select1, hospitalisations, "Code etablissement", "Specialite", "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "test");
  //if (tableau[i][value] == choix1 && tableau [i] [value1] == choixText) {
  console.log(select1.selectedIndex);
  console.log(select2.selectedIndex);
  hideSelects();
});

navPatients.addEventListener('click', fillSelectHosParPatient);
navEtabs.addEventListener('click', fillTableEtablissements);
navHospitalisations.addEventListener('click', fillTableHospitalisations);
navListePatients.addEventListener('click', fillTablePatients);
navHosEtabs.addEventListener('click', fillSelectHosParEtab); 
