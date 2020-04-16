export class Db {

    /**
     * class variables 
     * @param db 
     */
    private db : any;

    /* 
        public Field : String | Number | undefined | null ;
        private Object_Field_Id : Field ; 
    */
    constructor(db : any){
        this.db = db;
    }

    // methods 

    /* 
     search and view one or more fields 
     depends on Query 
    */

    getAllFields = async () => {
        const results = await this.db.find();
        if(!results) throw new Error("no result found")
        return results
    }

    /**
     * search by query in one field
     */
    getOneByQuery = async(q : any) =>{
        const results = await this.db.findOne(q);
        if(!results) throw new Error("no result found")
        return results
    }

    /**
     * manage returned data
     */
    manageReturnedResult = (results : any) => {        
        if(!results) throw new Error("no result found")
        return results
    }
    getAllFieldsFromArray = () => {}

    getAllFieldsFromObject = () => {}

    getOneField = async (field: string, query : string, cb: (r : any )=>any) => {
        
        const result = await this.db.findOne({[field] : query});

        if(!result) return "there is no user match this query"
        
        return cb(result)
    }


    getOneFieldsFromArray = () => {}

    getOneFieldsFromObject = () => {}

    /* 
     Search and modify one or more fields 
     depends on Query
    */
   
    setAllFields = () => {}
    setAllFieldsFromArray = () => {}
    setAllFieldsFromObject = () => {}
    setOneField = () => {}
    setOneFieldsFromArray = () => {}
    setOneFieldsFromObject = () => {}

    /**
     * Update fields
     */

    /**
     * Compare fields
     */
}