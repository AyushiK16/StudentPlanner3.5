class Syllabus{
    constructor(){
    //greetings
    //this.sstSyllabus = createInput("SST Syllabus");

    }


    /*
    reactnative = java + html
    static getcreaturelist(name){ 
        var templist='Creatures/'+name; 
        console.log("templist "+templist); 
        var playerCountRef = database.ref(templist); 
        playerCountRef.on("value",(data)=>{ 
            creaturelistdb = data.val(); 
            });
        */

    

    
    display(){
        input1 = createInput("Subject 1");
        inputDetail1 = createInput("Enter the details");
        inputExtra1 = createInput("Add anything extra here, such as exam dates, important information, etx");

        this.greeting = createElement('h4');
        this.greeting2 = createElement('h4');
        //Subject Dropbox Options

        this.input1.position(displayWidth/2 - 40, displayHeight/4);
        this.inputDetail1.position(displayWidth/2 - 40, displayHeight/4 + 30)
        this.inputExtra1.position(displayWidth/2 - 40, displayHeight/4 + 60);

        
        this.subjectDropbox = createSelect();
        this.subjectDropbox.option(valueDropbox1);
        this.subjectDropbox.option(valueDropbox2);

        
        /*
    
        this.subjectDropbox.option("Maths");
        this.subjectDropbox.option("Science")
        this.subjectDropbox.option("SST")
        this.subjectDropbox.option("ICT")
        this.subjectDropbox.option("English")
        this.subjectDropbox.option("II Language")
        */

        //Term Dropbox Options
        this.termDropbox = createSelect();
        this.termDropbox.option("Term 1")
        this.termDropbox.option("Half-Yearly")
        this.termDropbox.option("Term 2")
        this.termDropbox.option("Final")


        //Subject DropBox
        this.greeting.html("Please choose the subject:");
        this.greeting.position(10, 80);
        //this.subjectDropbox.position(190,100);

        //Term Dropbox
        this.greeting2.html("Please choose the term:");
        this.greeting2.position(10, 55);
        //this.termDropbox.position(190, 75);

        //console.log(chosenSubject);
        
    }

    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.subjectDropbox.hide();
        this.termDropbox.hide();

        //this.mathSyllabus.hide();
        //this.englishSyllabus.hide();
        //this.sstSyllabus.hide();
        //this.scienceSyllabus.hide();
        //this.secLangSyllabus.hide();
        //this.ictSyllabus.hide();
    }
    

    update(){
        var syllabusUpdate = "Subject/Syllabus1";
        database.ref(syllabusUpdate).set({
            Syllabus1 = this.inputDetail1
        });
      }

    
    /*
    CODES THAT DONT WORK / NOT NEEDED 
    switch(chosenSubject){
            case "Maths":
                this.mathsSyllabus = createInput("Maths Syllabus");
                this.mathsSyllabus.position(10,140);
                break;
            case "Science":
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
                this.mathsSyllabus.visible() = false;
                console.log("SCIENCEEEEEE")
                break;
        }


        if(chosenTerm === "Term 1"){
            
            if(chosenSubject === "Maths"){
                this.mathsSyllabus = createInput("Science Syllabus");
                this.mathsSyllabus.position(10,140);
              
            }

            else if(chosenSubject === "Science"){
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
                this.mathsSyllabus.visible() = false;
                console.log("SCIENCEEEEEE")
                
            }

            else if(chosenSubject === "SST"){
                this.sstSyllabus = createInput("SST Syllabus");
                this.sstSyllabus.position(10,140);
            }

            else if(chosenSubject === "ICT"){
                this.ictSyllabus = createInput("ICT Syllabus");
                this.ictSyllabus.position(10,140);
            }

            else if(chosenSubject === "English"){
                this.englishSyllabus = createInput("English Syllabus");
                this.englishSyllabus.position(10,140);
            }

            else if(chosenSubject === "II Language"){
                this.secLangSyllabus = createInput("II Language Syllabus");
                this.secLangSyllabus.position(10,140);
            }
        }



        updateNOPE(){
        var trialIndex = "Syllabus/Trial"
        database.ref(trialIndex).set({
          engSyllabus :this.engSyllabus,
        });
        //console.log(engSyllabus);
    }

    readtrial(){
        var trialRef = database.ref('Trial');
        trialRef.on("value",(data)=>{
            Trial = data.val();
        })
        //console.log(Trial);
    }

    getSubject(){
        var subjectRef = database.ref('Syllabus/Subjects/English/engSyllabus');
        subjectRef.on("value",(data)=>{
            engSyllabus = data.val();
        })
        //console.log(engSyllabus);
    }


    updateSylabus(){
        var updatingNode = "English/Syllabus"
        database.ref(updatingNode).set({
          Syllabus :this.mathsSyllabus,
        });
    }

    updateNO(){
        var syllName = "English/Syllabus"
        database.ref(syllName).set({
          Syllabus :this.mathsSyllabus
        });
        //console.log(engSyllabus);
    }


    readSyllabus(){
        var syllabusRef = database.ref('English/Syllabus');
        syllabusRef.on("value", (data)=>{
            gottenSyllabus = data.val();
        })

        //console.log(gottenSyllabus);
    }
//CURRENTLY WORKING ON THIS ONE =======>>>
    readDropbox(){
        var dropboxRef = database.ref('SubjectDropbox/English');
        dropboxRef.on("value", (data)=>{
            valueDropbox1 = data.val();
        })
        //console.log(valueDropbox);

        var dropboxRefA = database.ref('SubjectDropbox/Maths');
        dropboxRefA.on("value", (data)=>{
            valueDropbox2 = data.val();
        })

    }

    checkOptions(){
        chosenSubject = this.subjectDropbox.value();
        console.log(chosenSubject);

        chosenTerm = this.termDropbox.value();
        console.log(chosenTerm);
    }

    */
}