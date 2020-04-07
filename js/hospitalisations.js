'use_strict'

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
  afficheInfos.style.color = '#cc3300';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  tableHead.style.display = 'table-header-group';
  tableHead.style.backgroundColor = '#009999';
  tableHead.style.color = '#fff';
  tableBody.style.display = 'table-row-group';
  closeIcon.style.display = 'block';
  closeIcon.style.margin = 'auto auto auto 220px';
  closeIcon.style.width = '2%';

}

const afficherDonnees = (reponse, tableHead, tableBody, title1, title2, title3, title4, title5, mainTag, tag1, tag2, tag3, tag4, tag5, message) => {
  let tab = reponse.getElementsByTagName(mainTag);
  console.log(tab);
  let outputTable = "";
  let compte = 0;
  fillTableHeader(tableHead, title1, title2, title3, title4, title5);
  
  for (let i = 0; i < tab.length; i++) {
    
   outputTable += `
      <tr>
      <td> ${tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue} </td>
      <td> ${tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue} </td>
      <td> ${tab[i].getElementsByTagName(tag3)[0].firstChild.nodeValue} </td>
      <td> ${tab[i].getElementsByTagName(tag4)[0].firstChild.nodeValue} </td>
      <td> ${tab[i].getElementsByTagName(tag5)[0].firstChild.nodeValue} </td>
      </tr>                                                                      
      `;
      compte++;
  }
  
  tableBody.innerHTML = outputTable;
  afficheInfos.innerHTML = 'Il y a un total de ' + compte + ' ' + message;
  
}

const getTableData = (method, url, type, tableHead, tableBody, title1, title2, title3, title4, title5, mainTag, tag1, tag2, tag3, tag4, tag5, message) => {
  
  $.ajax({
    type : method,
    url : url,
    dataType : type,
    success : (reponse) => {
       //xmlFichier = reponse;
      afficherDonnees(reponse, tableHead, tableBody, title1, title2, title3, title4, title5, mainTag, tag1, tag2, tag3, tag4, tag5, message);
    },
    fail : () => {
      alert("Erreur lors de la requête");
    }
  });
} 

const getSelectData = (method, url, type, elem, elem1, functionName, mainTag, tag1, tag2, tag3) => {
  tag3 = tag3 || ' ';
  elem1 = elem1 || ' ';
  $.ajax({
    type : method,
    url : url,
    dataType : type,
    success : (reponse) => {
       //xmlFichier = reponse;
       
      functionName(elem, elem1, reponse, mainTag, tag1, tag2, tag3);
    },
    fail : () => {
      alert("Erreur lors de la requête");
    }
  });
} 
const closeTable = () => {
  table.style.display = 'none';
}

const getSelectedIndexAndFillTable = (method, url, type, functionName, mainTag, tableHead, tableBody, elemSelect, elemSelect1, elemTitre, titre1, titre2, titre3, titre4, titre5, tag1, tag2, tag3, tag4, tag5, message) => {
  elemSelect1 = elemSelect1 || ' ';
  message = message || ' ';
  $.ajax({
    type : method,
    url : url,
    dataType : type,
    success : (reponse) => {
       //xmlFichier = reponse;
      fillTableHeader(tableHead, titre1, titre2, titre3, titre4, titre5)
      functionName(reponse, mainTag, elemSelect, elemSelect1, elemTitre, tableHead, tableBody, titre1, titre2, titre3, titre4, titre5, tag1, tag2, tag3, tag4, tag5, message);
    },
    fail : () => {
      alert("Erreur lors de la requête");
    }
  });
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
    }
    compte++;
    tableBody.innerHTML = outputTable;
    afficheInfos.innerHTML = 'Il y a un total de ' + compte + ' ' + message;
  };

     
const fillSelectHosPatient = (elem, elem1, reponse, mainTag, tag1, tag2, tag3) => {
  let tab = reponse.getElementsByTagName(mainTag);
  console.log(tab);
  let output = '<option>Choisir...</option>';
      
  for (let i = 0; tabSize = tab.length, i < tabSize; i++) {
    
   output += `
              <option>${tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue} (${tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue} ${tab[i].getElementsByTagName(tag3)[0].firstChild.nodeValue})</option>
   `;
  
  }

  elem.innerHTML = output;
  afficheInfos.style.color = '#cc3300';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  afficheInfos.innerHTML = ' Sélectionner un patient pour consulter ses hospitalisations ';
}

const fillSelectHosEtab = (elem, elem1, reponse, mainTag, tag1, tag2, tag3) => {

  let tab = reponse.getElementsByTagName(mainTag);
  console.log(tab);
  let output = '<option>Choisir...</option>';
      
  for (let i = 0; i < tab.length; i++) {
    
   output += `
              <option>${tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue} ${tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue}</option>
   `;

  }

  elem.innerHTML = output;
  afficheInfos.style.color = '#cc3300';
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

const fillTableFromSelect = (reponse, mainTag, elemSelect, elemSelect1, elemTitre, tableHead, tableBody, titre1, titre2, titre3, titre4, titre5, tag1, tag2, tag3, tag4, tag5, message) => {
  let tab = reponse.getElementsByTagName(mainTag);
  console.log(tab);
  let outputTable = ' ';
  let compte = 0;
  let choix = elemSelect.selectedIndex;
  let choixText = elemSelect.options[choix].text;
  console.log(choixText);
  for (let i = 0; tableSize = tab.length, i < tableSize; i++) {
    if (tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue == choix) {
      console.log(choix);
      
      outputTable += `
                    <td> ${tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag3)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag4)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag5)[0].firstChild.nodeValue} </td><tr>
                    
                    `;
      elemSelect.style.display = 'none';
      elemTitre.style.display = 'none';

      compte++;
      
    } 
  }
  if (compte > 0) {
    fillTableHeader(tableHead, titre1, titre2, titre3, titre4, titre5);
    styleTable(tableHead, tableBody);
  }
  
  
  tableBody.innerHTML = outputTable;
  afficheInfos.innerHTML = choixText + ' a un total de ' + compte + ' ' + message;
}

const fillTableEtabFromSelect = (reponse, mainTag, elemSelect, elemSelect1, elemTitre, tableHead, tableBody, titre1, titre2, titre3, titre4, titre5, tag1, tag2, tag3, tag4, tag5, message) => {
  let tab = reponse.getElementsByTagName(mainTag);
  let outputTable = ' ';
  let compte = 0;
  let choix = elemSelect.selectedIndex;
  let choixText = elemSelect.options[choix].text.substring(0, 4);
  console.log(choixText);
  for (let i = 0; tableSize = tab.length, i < tableSize; i++) {

    if (tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue == choixText) {
      console.log(tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue);
      fillTableHeader(tableHead, titre1, titre2, titre3, titre4, titre5);
      outputTable += `
                    <td> ${tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag3)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag4)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag5)[0].firstChild.nodeValue} </td><tr>
                    
                    `;

      compte++;
    }

  }
  elemTitre.style.display = 'none';
  elemSelect.style.display = 'none';
  styleTable(tableHead, tableBody);
  afficheInfos.innerHTML = choixText + ' a un total de ' + compte + ' ' + message;
  tableBody.innerHTML = outputTable;
}

const fillTableHosFromSelect = (reponse, mainTag, elemSelect, elemSelect1, elemTitre, tableHead, tableBody, titre1, titre2, titre3, titre4, titre5, tag1, tag2, tag3, tag4, tag5) => {
  let tab = reponse.getElementsByTagName(mainTag);
  let outputTable = ' ';
  let compte = 0;
  let indexEtab = elemSelect1.selectedIndex;
  let indexHos = elemSelect.selectedIndex;
  let choixEtab = elemSelect1.options[indexEtab].text;
  let choixHos = elemSelect.options[indexHos].text;
  console.log(choixEtab);
  console.log(choixHos);
  for (let i = 0; tableSize = tab.length, i < tableSize; i++) {

    if (tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue === choixEtab.substring(0, 4) && tab[i].getElementsByTagName(tag5)[0].firstChild.nodeValue === choixHos) {
      console.log(tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue);
      console.log(choixEtab);
      console.log(choixHos);
      fillTableHeader(tableHead, titre1, titre2, titre3, titre4, titre5);
      outputTable += `
                    <td> ${tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag3)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag4)[0].firstChild.nodeValue} </td>
                    <td> ${tab[i].getElementsByTagName(tag5)[0].firstChild.nodeValue} </td><tr>
                    
                    `;
      compte++;
      
    }
    
  }
  elemTitre.style.display = 'none';
    elemSelect.style.display = 'none';
    styleTable(tableHead, tableBody);
    afficheInfos.innerHTML = 'Il y a ' + compte + " hospitalisations pour l'établissement " + choixEtab.substring(0, 4) + '(' + choixEtab.substring(5) + ') ' + 'avec la spécialité ' + choixHos;
    tableBody.innerHTML = outputTable;
}


const fillOtherSelect = (elem, elem1, reponse, mainTag, tag1, tag2, tag3) => {
  let tab = reponse.getElementsByTagName(mainTag);
  console.log(tab);
  let uniquesArray = [];
  let counting = 0;
  let found = false;
  let compte = 0;
  let choix = elem.selectedIndex;
  console.log(choix);
  let choixText = elem.options[choix].text.substring(0, 4);
  console.log(choixText);
  let output = '<option>Choisir...</option>';
  for (let i = 0; tableSize = tab.length, i < tableSize; i++) {
    if (tab[i].getElementsByTagName(tag1)[0].firstChild.nodeValue == choixText) {
      for (y = 0; y < uniquesArray.length; y++) {
        if (tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue == uniquesArray[y]) {
          found = true;
        }
        console.log(uniquesArray[y]);
      }
      counting++;
      if (counting == 1 && found == false) {
        uniquesArray.push(tab[i].getElementsByTagName(tag2)[0].firstChild.nodeValue);
        console.log(uniquesArray[y]);
        console.log(tab[i]);
        
        output += `
                    <option> ${uniquesArray[y]} </option>
                                       
                    `;
        compte++;

      }

      found = false;
      counting = 0;

    }

  }
  elem1.innerHTML = output;
  afficheInfos.style.color = '#cc3300';
  afficheInfos.style.textShadow = '1px 1px #000';
  afficheInfos.style.fontSize = '30px';
  afficheInfos.innerHTML = 'Choisir la spécialité';

  }
  

const fillTableEtablissements = () => {
  getTableData("GET", "donnees/etablissements.xml", "xml", head, table, "Établissement", "Nom", "Adresse", "Code Postal", "Téléphone", "Etablissement", "Num", "Nom", "Adresse", "CodePostal", "Telephone", "établissement(s)");
  styleTable(head, table);
  table1.style.display = 'none';
  head1.style.display = 'none';
  hideSelects();
}

const fillTablePatients = () => {
  getTableData("GET", "donnees/patients.xml", "xml", head, table, "Dossier", "Nom", "Prenom", "Naissance", "Sexe", "patient", "Dossier", "Nom", "Prenom", "Naissance", "Sexe", "patient(s) qui sont hospitalisé(es)");
  styleTable(head, table);
  table1.style.display = 'none';
  head1.style.display = 'none';
  hideSelects();
}

const fillTableHospitalisations = () => {
  getTableData("GET", "donnees/hospitalisations.xml", "xml", head, table, "Code établissement", "No dossier patient", "Date admission", "Date sortie", "Spécialité", "Hospitalisation", "Code", "NoDossierPatient", "DateAdmission", "DateSortie", "Specialite", "hospitalisation(s)");
  styleTable(head, table);
  table1.style.display = 'none';
  head1.style.display = 'none';
  hideSelects();
}

const fillSelectHosParPatient = () => {
  getSelectData("GET", "donnees/patients.xml", "xml", select, " ", fillSelectHosPatient, "patient", "Dossier", "Nom", "Prenom", " ");
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
  getSelectData("GET", "donnees/etablissements.xml", "xml", select1, " ", fillSelectHosEtab, "Etablissement", "Num", "Nom", " ");
  styleSelect(select1, "20%", "block", "block", head, table, "none", "none", "none", titre, "Choisir l'établissement", "0px auto 0px 350px", "-2px auto 30px 350px", "0");
  titre2.style.display = 'none';
  select.style.display = 'none';
  table.style.display = 'none';
  table1.style.display = 'none';
  head1.style.display = 'none';
}
select.addEventListener('change', (e) => {
  getSelectedIndexAndFillTable("GET", "donnees/hospitalisations.xml", "xml", fillTableFromSelect, "Hospitalisation", head, table, select," ", titre, "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "Code", "NoDossierPatient", "DateAdmission", "DateSortie", "Specialite", "hospitalisations");
  
});

select1.addEventListener('change', (e) => {
  getSelectData("GET", "donnees/hospitalisations.xml","xml", select1, select2, fillOtherSelect, "Hospitalisation", "Code", "Specialite", " ");
  styleSelect(select2, "20%", "block", "block", head, table, "none", "none", "none", titre2, "Choisir spécialité", "30px auto 0px 350px", "10px auto 0px 350px", "0");
  
});
select2.addEventListener('change', (e) => {
  getSelectedIndexAndFillTable("GET", "donnees/etablissements.xml", "xml", fillTableEtabFromSelect, "Etablissement", head, table, select1," " , titre, "Code", "Nom", "Adresse", "CodePostal", "Telephone", "Num", "Nom", "Adresse", "CodePostal", "Telephone", "test");
  getSelectedIndexAndFillTable("GET", "donnees/hospitalisations.xml", "xml", fillTableHosFromSelect, "Hospitalisation", head1, table1, select2, select1, titre, "Code etablissement", "No dossier patient", "Date admission", "Date sortie", "Specialite", "Code", "NoDossierPatient", "DateAdmission", "DateSortie", "Specialite", " ");
  console.log(select1.selectedIndex);
  console.log(select2.selectedIndex);
  hideSelects();
});

navPatients.addEventListener('click', fillSelectHosParPatient);
navEtabs.addEventListener('click', fillTableEtablissements);
navHospitalisations.addEventListener('click', fillTableHospitalisations);
navListePatients.addEventListener('click', fillTablePatients);
navHosEtabs.addEventListener('click', fillSelectHosParEtab); 
