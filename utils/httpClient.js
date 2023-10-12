/**
 * @param {string} endpoint 
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} method 
 * @param {JSON | FormData} data 
 * @returns 
 */
const httpClient = async(endpoint, method, data =  null,type=null) => {
    const baseUrl = process.env.supabaseApi
  
    const headers = {
      apikey: process.env.supabaseKey,
    }

    if (type){
        headers.authorization = `bearer ${process.env.supabaseAuth}`
    }
    if (method === "POST" || method === "PATCH") {
      headers.Prefer = "return=representation"
      if(!type){
        headers["Content-Type"] = "application/json"
      }
    }
  
    if (data) {
      return await fetch(baseUrl + endpoint, {
        method,
        headers,
        body: type ? data : JSON.stringify(data) 
      })
    }
  
    return await fetch(baseUrl + endpoint, {
      method,
      headers
    })
  }
  
  export default httpClient
  