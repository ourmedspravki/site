const fs = require('fs');
const refList = {
  getItem: (str)=>{
      let res = fs.readFileSync('./reflist.txt', 'utf8', function(err, contents) {});
      let contArr = res.split(',');
      let counter = 0;

      for (let i = 0; i < contArr.length; i++){
          if(contArr[i] === str){
              counter++;
          }
      }
      return str + " : " + --counter;

  },
  setItem: (str)=>{
      let res = fs.readFileSync('./reflist.txt', 'utf8', function(err, contents) {});
      let contArr = res.split(',');
      let counter = 0;

      for (let i = 0; i < contArr.length; i++){
          if(contArr[i] === str){
              counter++;
          }
      }
      console.log(counter);
      if (!counter) {
          fs.appendFile("./reflist.txt", str + ',', function (err) {
              if (err) {
                  return console.log(err);
              }
              console.log("Succes write!")
          });
      }
  },
  updateItem: (str)=>{
      fs.appendFile("./reflist.txt", str + ",", function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("Succes write!")
      });
  }
};
module.exports = refList;