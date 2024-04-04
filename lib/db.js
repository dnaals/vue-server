let mysql = require('mysql2');

const db_info = {
    host     : "127.0.0.1",
    user     : 'root',
    password : 'dnals153',
    database : 'test',
    port:'3306'
}

module.exports = {
    queryExecute : async (query,values)=>{
        const connection = mysql.createConnection(db_info);
            connection.connect();
        return await new Promise((resolve,reject)=>{
            connection.query(query,values, function (error, results, fields) {
                if (error) console.log(error);
                resolve(results);
                connection.end();
            });
        })
    }
};