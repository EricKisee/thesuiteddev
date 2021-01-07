import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Viewing Posts");
    }

    async getHtml(){
        const id = this.params.id;
        console.log(id);

        return `
            <h1> Welcome Back </h1>
            <p> Viewing a post from some unique day</p>
            <a><a>
        `;
    }
}