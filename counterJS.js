
        let count = 0;

        Document.getElementById("decreasebtn").onClick = function(){
            count-=1;
            document.getElementById("countLabel").innerHTML=count;
        }

        Document.getElementById("resetbtn").onClick = function(){
            count=0;
            document.getElementById("countLabel").innerHTML=count;

        }

        Document.getElementById("increasebtn").onClick = function(){
            count+=1;
            document.getElementById("countLabel").innerHTML=count;
        }
   const decreasebtn=document.querySelector("#decreasebtn");
   