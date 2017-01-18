class Program{
    constructor(private message:string){

    }
    showDetails(){
        console.log("Your message is:"+this.message);
    }
}

let obj=new Program("I am Ahasan");
obj.showDetails();