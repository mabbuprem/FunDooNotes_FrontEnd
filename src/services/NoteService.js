import { postService } from './Axios_service'
import { getService } from './Axios_service'

export function CreateNotes(reqData) {
    let token = localStorage.getItem('token')
    console.log(token)
    let authOption = {
      headers: {
        'Authorization': "Bearer " +token,
        'content-Type': 'application/json'
      }
    }
    return postService('/createNote', reqData, true, authOption)
  }
  
  export function GetAllNotes() {
    let token = localStorage.getItem('token')
    console.log(token)
    let authOption = {
      headers: {
        'Authorization': "Bearer " +token,
        'content-Type': 'application/json'
      }
    }
    return getService('/getAllNotes', true, authOption)
  }

  export function UpdateNotes(reqData) {
    let token = localStorage.getItem('token')
    console.log(token)
    let authOption = {
      headers: {
        'Authorization': "Bearer " +token, 
        'content-Type': 'application/json'
      }
    }
    return postService('/updateNoteById', reqData, true, authOption)
  }

  export function trashNoteById(reqData) {
    let token = localStorage.getItem('token')
    console.log(token)
    let authOption = {
      headers: {
        'Authorization': "Bearer " +token, 
        'content-Type': 'application/json'
      }
    }
    return postService('/trashNoteById', reqData, true, authOption)
  }

  export function colourNoteById(reqData) {
    let token = localStorage.getItem('token')
    console.log(token)
    let authOption = {
      headers: {
        'Authorization': "Bearer " +token, 
        'content-Type': 'application/json'
      }
    }
    return postService('/colournote', reqData, true, authOption)
  }

  export function archiveNoteById(reqData) {
    let token = localStorage.getItem('token')
    console.log(token)
    let authOption = {
      headers: {
        'Authorization': "Bearer " +token, 
        'content-Type': 'application/json'
      }
    }
    return postService('/archivenote', reqData, true, authOption)
  }