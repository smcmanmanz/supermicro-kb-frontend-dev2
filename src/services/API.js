import axios from "axios";

export default class API {
    constructor(){
        this.client = null;
        this.url = process.env.REACT_APP_API_ENDPOINT;
    }
    init = ()=>{
        //skip access_token for now
        let headers ={
            Accept: "application/json"
        };
        this.client = axios.create({baseURL: this.url, timeout: 30000, headers: headers, responseType: "json"});
        return this.client;
    }
    getEntries = (params)=>{
        console.log(params);
        //http://xxxx/entry/?search=yyy
       return this.init().get("/entry/?", {params:{search: params}});
    }

    getKeywords = ()=>{
        console.log("Hi from API.js getKeywords()");
        return this.init().get("/entries");
    }
}