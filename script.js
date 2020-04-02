window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
        console.log(json);
        const div = document.getElementById("astronaut");
        let x = "";
        for (let i = 0; i < json.length; i++){
            let obj = json[i];
          x += 
          `
          <div class="bio">
            <h3>${obj.firstName}</h3>
             <ul>
                <li>Hours in space: ${obj.hoursInSpace}</li>
                <li>Active: ${obj.active}</li>
                <li>Skills: ${obj.skills}</li>
             </ul>
          
          <img class="avatar" src="${obj.picture}">
          </div>
          `;
          
        };
        div.innerHTML = x;
       });
    });
 });