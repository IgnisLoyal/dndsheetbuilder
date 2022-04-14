'use strict'

const getLocalStorage = () => JSON.parse(localStorage.getItem("dbSheet")) ?? []
const setLocalStorage = (dbSheet) => localStorage.setItem("dbSheet", JSON.stringify(dbSheet))

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
            experience: document.querySelector('#experience').value
        }
        createSheet(sheet)
        console.log('ficha cadastrada')
    }
}
//row creation for each of the saved forms
const createRow = (sheet, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${sheet.characterName}</td>
    <td>${sheet.class}</td>
    <td>${sheet.level}</td>
    <td>
        <button type="button" class="editButton">editar</button>
        <button type="button" class="deleteButton" id="edit"${index}>deletar</button>
        <button type="button" class="printButton id="delete"${index}>editar</button>
    </td>`
    document.querySelector('#tableSheet>body').appendChild(newRow)//1:07:06
}
const clearTable = () => {
    const rows = document.querySelectorAll('tableSheet>body tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
//table update with the row creation
const updateTable = () => {
    const dbSheet = readSheet()
    clearTable()
    dbSheet.forEach(createRow)
}
//dictates which fields with be filled in the form
const fillFields = (client) =>{
            //toprow
            document.querySelector('#characterName').value = sheet.characterName
            document.querySelector('#class').value = sheet.class
            document.querySelector('#level').value = sheet.level
            document.querySelector('#races').value = sheet.races
            document.querySelector('#background').value = sheet.background
            document.querySelector('#alignment').value = sheet.alignment
            document.querySelector('#playerName').value = sheet.playerName
            document.querySelector('#experience').value = sheet.experience
        }

const editSheet = (index) => {
    const sheet = readSheet()
    fillFields(client)
}

const editDelete = (event) => {
    if (event, target, type == 'button') {
        const [action, index] = event.target.id.splice('-')

        if (action == 'edit') {
            editSheet(index)
        } else {
            
        }
    }

}

updateTable()

//Events
//Save interaction with the form
document.querySelector('#characterSubmit').addEventListener('click', saveSheet)
//edit button
document.querySelector('#tableSheet>body').addEventListener('click', editDelete)

//finish last section