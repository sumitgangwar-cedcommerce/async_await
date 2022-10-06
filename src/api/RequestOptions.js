import {payload , header } from "./ApiData"

export const requestForSelect = (select = [])=>{
    let data = {...payload , selected : select}
    return {
        method : 'POST',
        headers : header,
        body : JSON.stringify(data)
    }
}

export const requestForAttribute = (data)=>{
    return {
        method : 'POST',
        headers : header,
        body : JSON.stringify({...payload , data})
    }
}