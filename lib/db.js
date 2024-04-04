let mysql = require('mysql2');

const db_info = {
    host     : "svc.sel5.cloudtype.app",
    user     : 'root',
    password : 'dnals15#',
    database : 'test',
    port:'32099'
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