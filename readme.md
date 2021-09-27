[1]- Installing  
[2]- Usage  
[3]- Output  
[4]- Requirements + Notes
# [1]> Installing___ [ adding to dependencies ]

    "dependencies" : {
      "v_req": "https://github.com/V-core9/__fetch-"
    }

# [2]> Demo use__ [ how to make a request using it ]
    const vReq = require('v_req')


    const demoGetGoogle = {
      options: {
        hostname: 'www.google.com',
        port: 443,
        path: '/',
        method: 'GET',
        headers: {
          'Content-Type': 'text/html'
        }
      }
    };

    vReq(demoGetGoogle);


# [3]> Output ___[ request response ]

    Host:  www.google.com
    Status Code: 200
    Path: /
    Method: GET
    Port: 443
    keepAliveMsecs: 1000
    keepAlive: false

# [4]> Requirements__ [ must haves ]
- [Node HTTPS Module](https://nodejs.org/api/https.html)
> NOTE: Well this is using node HTTPS module to make requests. I'm still not exactly sure how this will work with something like webpack...or web browser loading of it. Probably not so I might adjust it to use fetch for it when loading for web/exporting.
