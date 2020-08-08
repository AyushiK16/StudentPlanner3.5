class Reminder {
    constructor(){
        
        this.greeting = createElement('h4');
        //this.greeting.html("Enter your reminders in the spaces below!");
        
        this.reminder1 = createInput("Reminder 1");
       
    }

    hide(){
        this.greeting.hide();
        this.reminder1.hide();
        //console.log("hide is working");

    }

    display(){
        this.greeting.html("Enter your reminders in the spaces below!");
        this.greeting.position(100,30);
        console.log("hello");

        this.reminder1.position(75,110);
    }

    

}