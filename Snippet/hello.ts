class Program{
    constructor(private message:string){

    }
    showDetails(){
        console.log("Your message is:"+this.message);
    }
}

let obj=new Program("My name is Ahasan Habib");
obj.showDetails();