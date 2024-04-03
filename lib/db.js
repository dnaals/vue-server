let mysql      = require('mysql');

const db_info = {
    host     : 'localhost',
    user     : 'root',
    password : 'dnals153',
    database : 'test',
    port:'3306'
}

module.exports = {
    queryExecute : async (query)=>{
        const connection = mysql.createConnection(db_info);
            connection.connect();
        
        return await new Promise((resolve,reject)=>{
            connection.query(query, function (error, results, fields) {
                resolve(results);
                connection.end();
            });
        })
    }
};