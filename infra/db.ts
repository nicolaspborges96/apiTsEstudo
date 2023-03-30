import * as mongoose from 'mongoose';

class Database {
    private DB_URL = 'mongodb://root:12345@172.18.0.1:27017/portal';

    createConnection(){
        mongoose.connect(this.DB_URL)

        
    }
}

export default Database;