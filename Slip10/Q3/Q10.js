const mysql = require('mysql');

var con = mysql.createConnection(
{
    host:"localhost",
    user:"root",
    database:"db"
});

con.connect(function(err)
{
    if (err) throw err;
    console.log("connected");
    var sql = 'insert into customer values(5,"sham","Talegaon",26),(6,"seeta","Chinchwad",27),(7,"geeta","Mumbai",29)';
    con.query(sql, function (err, result,fields){
    if (err) throw err;
            console.log(result);
    });
    var sql1 = "select * from customer";
    con.query(sql1, function (err, result,fields){
    if (err) throw err;
       console.log(result);
    });
});