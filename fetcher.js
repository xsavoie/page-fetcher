// need to use node's fs module
// takes 2 CL args --> url and local file path
// download resource at the url and save to local file path
// on completion log a message to console
const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];
// console.log("url:", url)
// console.log("path:", path)



const fetchAndSave = function (url, path) {

  request(`${url}`, (err, response, body) => { 
    if (err) {
      console.error(err)
      return
    }
    fs.writeFile(`${path}`, body, err => {
      if (err) {
        console.log("Failed to write to local path: ", path)
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
      }
    })
  });
  
}
if (!url || !path) {
  console.log("Two parameters required")
} else {
  fetchAndSave(url, path)
}
