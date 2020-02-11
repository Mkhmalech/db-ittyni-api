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

    getAllFields = () => {}

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