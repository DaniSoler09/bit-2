"use strict";
let siguiente = 0;
let globalInfo;

fetch('../info.json')
  .then((res) => res.json())
  .then((info) => {
    console.log(info)

    globalInfo = info

    // for (let index = 0; index < info.length; index++) {
    //     console.log(index);
    document.getElementById("student").innerHTML = info[siguiente].student
    document.getElementById("intensity").innerHTML = info[siguiente].intensity
    document.getElementById("code").innerHTML = info[siguiente].code
    document.getElementById("git").href = info[siguiente].usernameGithub;
    document.getElementById("projects").innerHTML = info[siguiente].projects[0].name + " / " + info[0].projects[1].name

    
//}

  })
  .catch((err) => {
    console.log('error:', err);
  });

document.getElementById("next").addEventListener("click", function(){
    siguiente++
    document.getElementById("picStudent").src = "https://github.com/" + globalInfo[siguiente].usernameGithub + ".png";

    document.getElementById("student").innerHTML = globalInfo[siguiente].student
    document.getElementById("intensity").innerHTML = globalInfo[siguiente].intensity
    document.getElementById("code").innerHTML = globalInfo[siguiente].code
    document.getElementById("git").href = "https://github.com/" + globalInfo[siguiente].usernameGithub
     document.getElementById("git").innerHTML = "https://github.com/" + globalInfo[siguiente].usernameGithub
    document.getElementById("projects").innerHTML = globalInfo[siguiente].projects[0].name + " / " + globalInfo[0].projects[1].name

    if (globalInfo[siguiente].projects[0].score[0] < 3.5){
        document.getElementById("titulo").innerHTML = "FALLEN"
    }else if (globalInfo[siguiente].intensity === "100 hours") {
        document.getElementById("titulo").innerHTML = "FALLEN"
    }else { 
        document.getElementById("titulo").innerHTML = "SURVIVER"
    }

    if (globalInfo[siguiente].projects[0].score[0] < 3.5)
      document.getElementById("xImg").style.display = "block"
    else if (globalInfo[siguiente].intensity === "100 hours"){
      document.getElementById("xImg").style.display = "block"
    }
    else document.getElementById("xImg").style.display = "none"
  });

  document.getElementById("back").addEventListener("click", function(){
    siguiente--
    document.getElementById("picStudent").src = "https://github.com/" + globalInfo[siguiente].usernameGithub + ".png";

    document.getElementById("student").innerHTML = globalInfo[siguiente].student
    document.getElementById("intensity").innerHTML = globalInfo[siguiente].intensity
    document.getElementById("code").innerHTML = globalInfo[siguiente].code
    document.getElementById("git").href = "https://github.com/" + globalInfo[siguiente].usernameGithub
     document.getElementById("git").innerHTML = "https://github.com/" + globalInfo[siguiente].usernameGithub
    document.getElementById("projects").innerHTML = globalInfo[siguiente].projects[0].name + " / " + globalInfo[0].projects[1].name

    if (globalInfo[siguiente].projects[0].score[0] < 3.5){
        document.getElementById("titulo").innerHTML = "FALLEN"
    }else if (globalInfo[siguiente].intensity === "100 hours") {
        document.getElementById("titulo").innerHTML = "FALLEN"
    }else { 
        document.getElementById("titulo").innerHTML = "SURVIVER"
    }
  });


    
  

  
  