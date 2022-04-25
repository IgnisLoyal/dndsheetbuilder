'use strict'

const getLocalStorage = () => JSON.parse(localStorage.getItem("dbSheet")) ?? []
const setLocalStorage = (dbSheet) => localStorage.setItem("dbSheet", JSON.stringify(dbSheet))

var inputAllForm = document.querySelectorAll("select,input");

//create
const createSheet = (sheet) => {
    const dbSheet = getLocalStorage()
    dbSheet.push(sheet)
    setLocalStorage(dbSheet)
}
//read
const readSheet = (sheet) => getLocalStorage()

//update
const updateSheet = (index, sheet) => {
    const dbSheet = readSheet()
    dbSheet[index] = sheet
    setLocalStorage(dbSheet)

}
//delete
const deleteSheet = (index) => {
    const dbSheet = readSheet()
    dbSheet.splice(index, 1)
    setLocalStorage(dbSheet)
}
//checks the valid fields in the form
const isValidFields = () => {
    return document.querySelector('#form').reportValidity()
}
const isCheckHandled = (selected) => {
    if (value == "yes") {
        console.log('')
        return selected
    }
}
// fields to be filled in the form
const saveSheet = () => {

    if (isValidFields()) {
        const sheet = {

            //toprow
            characterName: document.querySelector('#characterName').value,
            class: document.querySelector('#class').value,
            level: document.querySelector('#level').value,
            races: document.querySelector('#races').value,
            background: document.querySelector('#background').value,
            alignment: document.querySelector('#alignment').value,
            playerName: document.querySelector('#playerName').value,
            experience: document.querySelector('#experience').value,
            //first column
            //first status column
            strength: document.querySelector('#strength').value,
            strMod: document.querySelector('#strMod').value,
            dexterity: document.querySelector('#dexterity').value,
            dexMod: document.querySelector('#dexMod').value,
            constitution: document.querySelector('#constitution').value,
            conMod: document.querySelector('#conMod').value,
            intelligence: document.querySelector('#intelligence').value,
            intMod: document.querySelector('#intMod').value,
            wisdom: document.querySelector('#wisdom').value,
            wisMod: document.querySelector('#wisMod').value,
            charisma: document.querySelector('#charisma').value,
            chaMod: document.querySelector('#chaMod').value,
            passiveWis: document.querySelector('#passiveWis').value,
            inspiration: document.querySelector('#inspiration').value,
            proficiencyBonus: document.querySelector('#proficiencyBonus').value,
            //second status column
            check_strST: document.querySelector('#check_strST').value,
            num_strST: document.querySelector('#num_strST').value,
            check_dexST: document.querySelector('#check_dexST').value,
            num_dexST: document.querySelector('#num_dexST').value,
            check_conST: document.querySelector('#check_conST').value,
            num_conST: document.querySelector('#num_conST').value,
            check_intST: document.querySelector('#check_intST').value,
            num_intST: document.querySelector('#num_intST').value,
            check_wisST: document.querySelector('#check_wisST').value,
            num_wisST: document.querySelector('#num_wisST').value,
            check_chaST: document.querySelector('#check_chaST').value,
            num_chaST: document.querySelector('#num_chaST').value,
            //skills colummn
            check_acrobatics: document.querySelector('#check_acrobatics').value,
            num_acrobatics: document.querySelector('#num_acrobatics').value,
            check_animalH: document.querySelector('#check_animalH').value,
            num_animalH: document.querySelector('#num_animalH').value,
            check_arcana: document.querySelector('#check_arcana').value,
            num_arcana: document.querySelector('#num_arcana').value,
            check_athletics: document.querySelector('#check_athletics').value,
            num_athletics: document.querySelector('#num_athletics').value,
            check_deception: document.querySelector('#check_deception').value,
            num_deception: document.querySelector('#num_deception').value,
            check_history: document.querySelector('#check_history').value,
            num_history: document.querySelector('#num_history').value,
            check_insight: document.querySelector('#check_insight').value,
            num_insight: document.querySelector('#num_insight').value,
            check_intimidation: document.querySelector('#check_intimidation').value,
            num_intimidation: document.querySelector('#num_intimidation').value,
            check_investigation: document.querySelector('#check_investigation').value,
            num_investigation: document.querySelector('#num_investigation').value,
            check_medicine: document.querySelector('#check_medicine').value,
            num_medicine: document.querySelector('#num_medicine').value,
            check_nature: document.querySelector('#check_nature').value,
            num_nature: document.querySelector('#num_nature').value,
            check_perception: document.querySelector('#check_perception').value,
            num_perception: document.querySelector('#num_perception').value,
            check_performance: document.querySelector('#check_performance').value,
            num_performance: document.querySelector('#num_performance').value,
            check_persuasion: document.querySelector('#check_persuasion').value,
            num_persuasion: document.querySelector('#num_persuasion').value,
            check_religion: document.querySelector('#check_religion').value,
            num_religion: document.querySelector('#num_religion').value,
            check_sleightOfHand: document.querySelector('#check_sleightOfHand').value,
            num_sleightOfHand: document.querySelector('#num_sleightOfHand').value,
            check_stealth: document.querySelector('#check_stealth').value,
            num_stealth: document.querySelector('#num_stealth').value,
            check_survival: document.querySelector('#check_survival').value,
            num_survival: document.querySelector('#num_survival').value,
            otherPLanguages: document.querySelector('#otherPLanguages').value,
            //second column
            armorClass: document.querySelector('#armorClass').value,
            initiative: document.querySelector('#initiative').value,
            speed: document.querySelector('#speed').value,
            hitpointM: document.querySelector('#hitpointM').value,
            hitpointA: document.querySelector('#hitpointA').value,
            hitpointT: document.querySelector('#hitpointT').value,
            hitDLevel: document.querySelector('#hitDLevel').value,
            hitDicesT: document.querySelector('#hitDicesT').value,
            hitDice: document.querySelector('#hitDice').value,
            succOne: document.querySelector('#succOne').value,
            succTwo: document.querySelector('#succTwo').value,
            succThree: document.querySelector('#succThree').value,
            failOne: document.querySelector('#failOne').value,
            failTwo: document.querySelector('#failTwo').value,
            failThree: document.querySelector('#failThree').value,
            nameFr: document.querySelector('#nameFr').value,
            atkFr: document.querySelector('#atkFr').value,
            typeFr: document.querySelector('#typeFr').value,
            nameSr: document.querySelector('#nameSr').value,
            atkSr: document.querySelector('#atkSr').value,
            typeSr: document.querySelector('#typeSr').value,
            nameTr: document.querySelector('#nameTr').value,
            atkTr: document.querySelector('#atkTr').value,
            typeTr: document.querySelector('#typeTr').value,
            atkSpellText: document.querySelector('#atkSpellText').value,
            //coins
            copperP: document.querySelector('#copperP').value,
            silverP: document.querySelector('#silverP').value,
            electrumP: document.querySelector('#electrumP').value,
            goldP: document.querySelector('#goldP').value,
            platinumP: document.querySelector('#platinumP').value,
            equipText: document.querySelector('#equipText').value,
            //third column
            pTraits: document.querySelector('#pTraits').value,
            idealsD: document.querySelector('#idealsD').value,
            bondsD: document.querySelector('#bondsD').value,
            flawsD: document.querySelector('#flawsD').value,
            fAndT: document.querySelector('#fAndT').value
        }
        createSheet(sheet)
        console.log('ficha cadastrada')
    }
}

//row creation for each of the saved forms
const createRow = (sheet, sheets) => {
    const newRow = document.createElement('tr')
    const test = document.querySelector('tableSheet>tbody')
    
    const newTd = newRow.innerHTML =`
    <td>${sheet.characterName}</td>
    <td>${sheet.class}</td>
    <td>${sheet.level}</td>
    <td>
        <button type="button" class="editButton" id="edit-${sheets}">editar</button>
        <button type="button" class="deleteButton" id="delete-${sheets}">deletar</button>
        <button type="button" class="printButton id="print-${sheets}">print</button>
    </td>`
    for(var j = 0; j < sheet.length; j++)
        {
            newTd = parent.document.createElement
        }


    test.appendChild(newRow);
}
const updateTable = () => {
    const dbSheet = readSheet()
    dbSheet.forEach(createRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('tableSheet>body tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

//dictates which fields with be filled in the form
const fillFields = (sheet) => {
    //toprow
    document.querySelector('#characterName').value = sheet.characterName
    document.querySelector('#class').value = sheet.class
    document.querySelector('#level').value = sheet.level
    document.querySelector('#races').value = sheet.races
    document.querySelector('#background').value = sheet.background
    document.querySelector('#alignment').value = sheet.alignment
    document.querySelector('#playerName').value = sheet.playerName
    document.querySelector('#experience').value = sheet.experience
    //first column
    //first status column
    document.querySelector('#strength').value = sheet.strength
    document.querySelector('#strMod').value = sheet.strMod
    document.querySelector('#dexterity').value = sheet.dexterity
    document.querySelector('#dexMod').value = sheet.dexMod
    document.querySelector('#constitution').value = sheet.constitution
    document.querySelector('#conMod').value = sheet.conMod
    document.querySelector('#intelligence').value = sheet.intelligence
    document.querySelector('#intMod').value = sheet.intMod
    document.querySelector('#wisdom').value = sheet.wisdom
    document.querySelector('#wisMod').value = sheet.wisMod
    document.querySelector('#charisma').value = sheet.charisma
    document.querySelector('#chaMod').value = sheet.chaMod
    document.querySelector('#passiveWis').value = sheet.passiveWis
    document.querySelector('#inspiration').value = sheet.inspiration
    document.querySelector('#proficiencyBonus').value = sheet.proficiencyBonus
    //second status column
    document.querySelector('#check_strST').value = sheet.check_strST
    document.querySelector('#num_strST').value = sheet.num_strST
    document.querySelector('#check_dexST').value = sheet.check_dexST
    document.querySelector('#num_dexST').value = sheet.num_dexST
    document.querySelector('#check_conST').value = sheet.check_conST
    document.querySelector('#num_conST').value = sheet.num_conST
    document.querySelector('#check_intST').value = sheet.check_intST
    document.querySelector('#num_intST').value = sheet.num_intST
    document.querySelector('#check_wisST').value = sheet.check_wisST
    document.querySelector('#num_wisST').value = sheet.num_wisST
    document.querySelector('#check_chaST').value = sheet.check_chaST
    document.querySelector('#num_chaST').value = sheet.num_chaST
    //skills colummn
    document.querySelector('#check_acrobatics').value = sheet.check_acrobatics
    document.querySelector('#num_acrobatics').value = sheet.num_acrobatics
    document.querySelector('#check_animalH').value = sheet.check_animalH
    document.querySelector('#num_animalH').value = sheet.num_animalH
    document.querySelector('#check_arcana').value = sheet.check_arcana
    document.querySelector('#num_arcana').value = sheet.num_arcana
    document.querySelector('#check_athletics').value = sheet.check_athletics
    document.querySelector('#num_athletics').value = sheet.num_athletics
    document.querySelector('#check_deception').value = sheet.check_deception
    document.querySelector('#num_deception').value = sheet.num_deception
    document.querySelector('#check_history').value = sheet.check_history
    document.querySelector('#num_history').value = sheet.num_history
    document.querySelector('#check_insight').value = sheet.check_insight
    document.querySelector('#num_insight').value = sheet.num_insight
    document.querySelector('#check_intimidation').value = sheet.check_intimidation
    document.querySelector('#num_intimidation').value = sheet.num_intimidation
    document.querySelector('#check_investigation').value = sheet.check_investigation
    document.querySelector('#num_investigation').value = sheet.num_investigation
    document.querySelector('#check_medicine').value = sheet.check_medicine
    document.querySelector('#num_medicine').value = sheet.num_medicine
    document.querySelector('#check_nature').value = sheet.check_nature
    document.querySelector('#num_nature').value = sheet.num_nature
    document.querySelector('#check_perception').value = sheet.check_perception
    document.querySelector('#num_perception').value = sheet.num_perception
    document.querySelector('#check_performance').value = sheet.check_performance
    document.querySelector('#num_performance').value = sheet.num_performanc
    document.querySelector('#check_persuasion').value = sheet.check_persuasion
    document.querySelector('#num_persuasion').value = sheet.num_persuasion
    document.querySelector('#check_religion').value = sheet.check_religion
    document.querySelector('#num_religion').value = sheet.num_religion
    document.querySelector('#check_sleightOfHand').value = sheet.check_sleightOfHand
    document.querySelector('#num_sleightOfHand').value = sheet.num_sleightOfHand
    document.querySelector('#check_stealth').value = sheet.check_stealth
    document.querySelector('#num_stealth').value = sheet.num_stealth
    document.querySelector('#check_survival').value = sheet.check_survival
    document.querySelector('#num_survival').value = sheet.num_survival
    document.querySelector('#otherPLanguages').value = sheet.otherPLanguages
    //second column
    document.querySelector('#armorClass').value = sheet.armorClass
    document.querySelector('#initiative').value = sheet.initiative
    document.querySelector('#speed').value = sheet.speed
    document.querySelector('#hitpointM').value = sheet.hitpointM
    document.querySelector('#hitpointA').value = sheet.hitpointA
    document.querySelector('#hitpointT').value = sheet.hitpointT
    document.querySelector('#hitDLevel').value = sheet.hitDLevel
    document.querySelector('#hitDicesT').value = sheet.hitDicesT
    document.querySelector('#hitDice').value = sheet.hitDice
    document.querySelector('#succOne').value = sheet.succOne
    document.querySelector('#succTwo').value = sheet.succTwo
    document.querySelector('#succThree').value = sheet.succThree
    document.querySelector('#failOne').value = sheet.failOne
    document.querySelector('#failTwo').value = sheet.failTwo
    document.querySelector('#failThree').value = sheet.failThree
    document.querySelector('#nameFr').value = sheet.nameFr
    document.querySelector('#atkFr').value = sheet.atkFr
    document.querySelector('#typeFr').value = sheet.typeFr
    document.querySelector('#nameSr').value = sheet.nameSr
    document.querySelector('#atkSr').value = sheet.atkSr
    document.querySelector('#typeSr').value = sheet.typeSr
    document.querySelector('#nameTr').value = sheet.nameTr
    document.querySelector('#atkTr').value = sheet.atkTr
    document.querySelector('#typeTr').value = sheet.typeTr
    document.querySelector('#atkSpellText').value = sheet.atkSpellText
    //coins
    document.querySelector('#copperP').value = sheet.copperP
    document.querySelector('#silverP').value = sheet.silverP
    document.querySelector('#electrumP').value = sheet.electrumP
    document.querySelector('#goldP').value = sheet.goldP
    document.querySelector('#platinumP').value = sheet.platinumP
    document.querySelector('#equipText').value = sheet.equipText
    //third column
    document.querySelector('#pTraits').value = sheet.pTraits
    document.querySelector('#idealsD').value = sheet.idealsD
    document.querySelector('#bondsD').value = sheet.bondsD
    document.querySelector('#flawsD').value = sheet.flawsD
    document.querySelector('#fAndT').value = sheet.fAndT
    document.querySelector('#characterName').dataset.index = sheet.index

}
const editSheet = (sheets) => {
    const sheet = readSheet()[sheets]
    sheet.sheets = sheets
    filldFields(sheet)
}
const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, sheets] = event.target.id.split('-')

        if (action == 'edit') {
            editSheet(index)
        } else {
            const sheet = readSheet()[sheets]
            const response = confirm('Deseja realmente excluir a ficha $(sheet.characterName)')
            if (response) {
                deleteSheet(sheets)
                updateTable()
            }

        }
    }

}



// set the value of the checkboxes in the form
function isChecked(el) {
    var checkO = document.querySelector('.form ,input[type=checkbox]');
    var checkA = document.querySelectorAll('.form ,input[type=checkbox]');

    checkA.forEach(checkO => checkO.addEventListener("input", () => {
        checkO.value = true;
    }))
}

function sendHome() {
    window.location = 'index.html'
}
function sendSheets() {
    window.location = 'sheets.html'
}


updateTable()
//Events
//Save interaction with the form
document.querySelector('#characterSubmit').addEventListener('click', saveSheet);
//finish last section