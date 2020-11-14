const axios = require("axios");
const fs = require("fs");

function fetchCSV(){
    return new Promise(function(resolve, reject){
        axios.get("https://data.montpellier3m.fr/sites/default/files/ressources/TAM_MMM_TpsReel.csv")
        .then(function(result){
            resolve(result);
        })
        .catch(function(err){
            reject(result);
        });
    });
}

fetchCSV()
.then(function(csv){
    console.log(csv);
    fs.writeFileSync('result.csv', Object.entries(csv));
})