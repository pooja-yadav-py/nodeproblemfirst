//import http module
const http = require('http');
const url = require("url");
  
//creation of http server
http.createServer(function(req,res){
 const path = req.url;
 console.log("path",path);
 const query = url.parse(path,true).query;
 
 console.log(query);
 //create routes
 if(path.includes("age")) {
     
     const dateString = `${query.year}/${query.month}/${query.date}`;
     const birth_date = new Date(dateString);
     console.log(birth_date);
     const birth_date_year = birth_date.getFullYear();
     const birth_date_month =birth_date.getMonth();
     const birth_date_day = birth_date.getDate();

     const today_date = new Date();
     const today_day = today_date.getDate();
     const today_month = today_date.getMonth();
     const today_year = today_date.getFullYear();

     let calculated_age =0;
     if(today_month > birth_date_month){
    	calculated_age = today_year - birth_date_year;
    }

    else if(today_month == birth_date_month){
    	if(today_day >= birth_date_day){
    		calculated_age = today_year - birth_date_year;
    	}else{
    		calculated_age = today_year - birth_date_year-1;
    	}
    }

    else{
    	calculated_age = today_year - birth_date_year-1;
    }

    let output_value = calculated_age;
    console.log(output_value);
     
     //set the Header
     res.setHeader("Content-Type","text/html");
     res.write(`<p>hello ${query.name}</p><p>you are ${output_value} year old</p>`);
     res.end();
 }
 
}).listen(8080);