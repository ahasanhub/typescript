var Program = (function () {
    function Program(message) {
        this.message = message;
    }
    Program.prototype.showDetails = function () {
        console.log("Your message is:" + this.message);
    };
    return Program;
}());
var obj = new Program("I am Ahasan");
obj.showDetails();
//# sourceMappingURL=hello.js.map