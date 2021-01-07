import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
            <h1> Welcome Back </h1>
            <p> This is the Suited dev blog Settings Page</p>
            
        `;
    }
} 