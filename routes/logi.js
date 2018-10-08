var pg = require('pg');
//var config = require('./routes/config');
var config = {
    host: 'localhost',
    port:'5432',
    user:'divya',
    password:'divya',
    database:'TMS',
    ssl:true,
    idleTimeoutMillis: 100 // how long a client is allowed to remain idle before being closed
};
/*
 * Checks the availability of the USN during registration
 * @param {USN of the student} usn 
 * @param {USN of the student} pass
 * @returns Promise<object> 
 */
const doesUSNExist =  (usn,pass) => {
   // var usnExist = false;
   var object1={};
    var client = new pg.Client(config)
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => {
                console.log('here');
                var query = client.query(`SELECT name , password FROM stu_per_data WHERE usn='${usn}'AND password='${pass}';`)
                    .then( res => {
                        console.log(query);
                        res.rows.forEach(row => {
                            sname = res.rows.name;
                            spass= res.rows.password;
                            object1.push({usn :sname, pass:spass});
                            console.log(object1);

                        });
                    })
                    .catch(err => {
                        console.log(`Fetch error: ${err}`);
                        reject(err);
                    })
                    .then(() => {
                        client.end();
                        console.log('here2');
                        resolve(object1);
                    });
            })
            .catch(err => {
                console.log(`Connection error: ${err}`);
                reject(err);
            });
    });
}
module.exports = doesUSNExist;