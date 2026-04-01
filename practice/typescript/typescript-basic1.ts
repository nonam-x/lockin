    
    interface User {
        id:number
        fname:string
        lname:string
        contact :{
       mobile:string
        }
        address:{
            street:number
            pin:number
            country:string
        }
    
    }
    
    
    
    
    
    class DataBay {
        private _db: Map<string, string>

        constructor (){

        }
        public insertUser ()
    }

