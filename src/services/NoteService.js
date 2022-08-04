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