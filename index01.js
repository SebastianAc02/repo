"use strict";
function search (){
            var site = "Wikipedia.org";
            
            var lookfor = document.getElementById("txtlookfor").value;

            if(lookfor.length > 0){

              

               var ddchoice = document.getElementById("dropdown").value;
               if(ddchoice === "1"){
                   var query = "https://www.bing.com/search?q="+ encodeURIComponent(lookfor)+"site:"+site;
               }
               else{

                var query = "http://www.google.com/search?q="+ encodeURIComponent(lookfor)+"site"+site;
               }

               location.href = query;

            }
            else{
                alert("Please enter some keywords");
            }
          
        }