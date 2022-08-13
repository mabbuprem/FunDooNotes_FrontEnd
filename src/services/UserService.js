import { postService } from './Axios_service'
import { getService } from './Axios_service'


export function registration(reqData) {
  let authOption = {
    Headers: {
      'Authorisation': 'token',
      'contant-Type': 'application/json'
    }
  }
  return postService('/register', reqData, false, authOption)
}

export function login(reqData) {
  let authOption = {
    Headers: {
      'Authorisation': 'token',
      'contant-Type': 'application/json'
    }
  }
  return postService('/login', reqData, false, authOption)
}

export function forgetPass(reqData) {
  let authOption = {
    Headers: {
      'Authorisation': 'token',
      'contant-Type': 'application/json'
    }
  }
  return postService('/forgotPassword', reqData, false, authOption)
}


export function ResetPass(reqData) {
  let authOption = {
    Headers: {
      'Authorisation': 'token',
      'contant-Type': 'application/json'
    }
  }
  return postService('/resetPassword', reqData, false, authOption)
}



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

export function GetAllNotes(reqData) {
  let authOption = {
    headers: {
      'Authorization': 'token',
      'content-Type': 'application/json'
    }
  }
  return getService('/getAllNotes', reqData, false, authOption)
}

// export function Updatenotes(reqData) {
//   let authOption = {
//     headers: {
//       'Authorization': 'token',
//       'content-Type': 'application/json'
//     }
//   }
//   return postService('/updateNoteById', reqData, false, authOption)
// }







