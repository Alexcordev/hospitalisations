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
const afficheInfos = document.getElementById("display");
const closeIcon = document.getElementById("close");
const container = document.querySelector('.container-fluid');
const selectDossier = document.createElement('select');
const select = document.createElement('select');
const titre = document.getElementById('titre');
const selectHosParPatient = document.createElement('select');
const labelDossiersPatients = document.createElement('p');
const wholeTable = document.getElementById('tablePatiens');


const styleTable = () => {
   afficheInfos.style.color = 'teal';
   afficheInfos.style.textShadow = '1px 1px #000';
   afficheInfos.style.fontSize = '30px';
   head.style.display = 'table-header-group';
   head.style.backgroundColor = 'teal';
   head.style.color = '#fff';
   table.style.display = 'table-row-group';
   closeIcon.style.display = 'block';
   closeIcon.style.margin = 'auto auto auto 220px';
   closeIcon.style.width = '2%';
}

const closeTable = () => {
  table.style.display = 'none';
}

const fillTableHeader = (titre1, titre2, titre3, titre4, titre5) => {
  let outputHeader = '';
  outputHeader += `
                 <th scope="col">${titre1}</th>
                 <th scope="col">${titre2}</th>
                 <th scope="col">${titre3}</th>
                 <th scope="col">${titre4}</th>
                 <th scope="col">${titre5}</th> <tr>
                  `;
 head.innerHTML = outputHeader;
}

const fillTableBody = (tableName, prop1, prop2, prop3, prop4, prop5, message) => {
  let outputTable = "";
  let compte = 0;
  for (let i = 0; i < tableName.length; i++) {
    outputTable += `
    
                    <td> ${tableName[i] [prop1]} </td>
                    <td> ${tableName[i] [prop2]} </td>
                    <td> ${tableName[i] [prop3]} </td>
                    <td> ${tableName[i] [prop4]} </td>
                    <td> ${tableName[i] [prop5]} </td> <tr>
                    `;
    compte++;
    table.innerHTML = outputTable;
    afficheInfos.innerHTML = 'Il y a un total de ' + compte + ' ' + message;
  }
}
const fillSelect = (tableau, prop1, prop2, selectValue) => {
  
  let output = '<option>Choisir...</option>';
  
  for (let i = 0; tabSize = tableau.length, i < tabSize; i++) {
    output += ` 
              <option> (${tableau[i] [prop1]} ${tableau[i] [prop2]})</option>
              `;
    
  }
   
   select.append(output);
}
const styleSelect = (selectDisplayType, titreDisplayType, tableDisplayType, headDisplayType, IconDisplayType, selectLabel, marginTitle, selectMargin, selectBorder) => {
  select.style.display = selectDisplayType;
  titre.style.display = titreDisplayType;
  table.style.display = tableDisplayType;
  head.style.display = headDisplayType;
  closeIcon.style.display = IconDisplayType;
  titre.innerHTML = selectLabel;
  titre.style.margin = marginTitle;//'auto auto 0px 350px';
  select.style.margin = selectMargin; //'5px auto auto 350px';
  select.style.border = selectBorder;
}

const fillTableFromSelect = (tableau, value, headerVal1, headerVal2, headerVal3, headerVal4, headerVal5, tabValue1, tabValue2, tabValue3, tabValue4, tabValue5, message) => {
  let outputTable = ' ';
  let compte = 0;
  let choix = select.selectedIndex;
  let choixText = select.options[choix].text;
  
  for (let i = 0; tableSize = tableau.length, i < tableSize; i++) {
    if (tableau[i][value] == choix) {
      
      fillTableHeader(headerVal1, headerVal2, headerVal3, headerVal4, headerVal5);
      outputTable += `
                    <td> ${tableau[i] [tabValue1]} </td>
                    <td> ${tableau[i] [tabValue2]} </td>
                    <td> ${tableau[i] [tabValue3]} </td>
                    <td> ${tableau[i] [tabValue4]} </td>
                    <td> ${tableau[i] [tabValue5]} </td><tr>
                    
                    `;
                    
      styleTable();
      
      select.style.display = 'none';
      titre.style.display = 'none';
      compte++;
    }
    
  }
  afficheInfos.innerHTML = choixText + ' a un total de ' + compte + ' ' + message;  
  table.innerHTML = outputTable;


}

const fillTableEtablissements = () => {
  fillTableHeader("Établissement", "Nom", "Adresse", "Code Postal", "Téléphone");
  fillTableBody(etablissements, "Etablissement", "Nom", "Adresse", "CodePostal", "Telephone", "établissements");
  styleTable();
  select.style.display = 'none';
  titre.style.display = 'none';
}

const fillTablePatients = () => {
  fillTableHeader("Dossier", "Nom", "Prénom", "Naissance", "Sexe");
  fillTableBody(patients, "Dossier", "Nom", "Prenom", "Naissance", "Sexe", "patients qui sont présentement hospitalisés");
  styleTable();
  select.style.display = 'none';
  titre.style.display = 'none';
}

const fillTableHospitalisations = () => {
  fillTableHeader("Code établissement", "No dossier patient", "Date admission", "Date sortie", "Spécialité");
  fillTableBody(hospitalisations, "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", " hospitalisations");
  styleTable();
  select.style.display = 'none';
  titre.style.display = 'none';
}

const fillSelectHosParPatient = () => {
  fillSelect(patients, "Prenom", "Nom", "sel");
  styleSelect("block", "block", "none", "none", "none", "Choisir le patient", "auto auto 0px 350px", "5px auto auto 350px", "0");
  select.addEventListener('change', (e) => {
    fillTableFromSelect(hospitalisations, "No dossier patient", "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "hospitalisation(s)");
    
    console.log(select.selectedIndex);
  });
}

const fillSelectHosParEtab = () => {
  fillSelect(etablissements, "Etablissement", "Nom", "sel");
  styleSelect("block", "block", "none", "none", "none", "Choisir l'établissement", "auto auto 0px 350px", "5px auto auto 350px", "0");
  
}



  
select.addEventListener('change', (e) => {
  fillSelect(etablissements, "", "Specialite", "sel1");
  styleSelect("block", "block", "none", "none", "none", "Choisir la spécialité", "auto auto 0px 350px", "5px auto auto 350px", "0");
  
  console.log(select.selectedIndex);
});



