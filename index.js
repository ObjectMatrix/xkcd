var request = require('request');


const img = () => {
const getXkcdTotal = new Promise((resolve, reject) => {
  const url = 'http://xkcd.com/info.0.json';
  request(url, function (error, response, body) {
     if(!error && response.statusCode == 200)
     {
       const data       = JSON.parse(body);
       const max_num    = data['num'];
       let rand       =  Math.floor((Math.random() * max_num) + 1);
       if (rand         == 404) {
          rand          = Math.floor((Math.random() * 403));
       } // Avoid 404 page ;)
       const xkcd_url   = 'http://xkcd.com/' + rand + '/info.0.json';
       resolve ({
         'url': xkcd_url,
       });
     }
  });
}).then( d => {
const img = new Promise((resolve, reject) => {
  request(d.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const img_url = data['img'];
            const img_title = data['alt'];
            resolve ({
              'img_url': img_url,
              'img_title': img_title,
              'url': d.url,
            });
        }
    });
  }).then( d => {
    //exports.img = d;
    console.log(d);
  });
});

}

exports.img = img;
