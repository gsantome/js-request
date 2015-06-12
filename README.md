# js-request

### Version
1.0.0

If you are like you are trying to remove jQuery from your projects so this is your plugin.

With this plugin you could execute ajax request from javascript in an easy way using **ES6 promises**... I'm sure you will need this **Polyfill** to run it [Promises](https://github.com/paulmillr/es6-shim)

This is under development because I'm using this on my projects, if someone want to make a change I will be so happy... =)

BTW, I'm using **RequireJS** so if someone want to make a modification to work with **WebPack** or **CommonJS**, make a PullRequest.

And now... this is how works:

### GET method
```sh
define([ 
	'js-request'
	], function( JSRequest ) {
	    API.reqest('http://localhost')
	        .get()
	        .then(function(response) {
	            console.log(response);
	        });
	});
```

### GET method (with parameters on QueryString)
```sh

define([ 
	'js-request'
	], function( JSRequest ) {
	    API.reqest('http://localhost')
	        .get({
	            'param1': 'bar',
	            'param2': 'foo'
	        })  //will generate "http://localhost?param1=bar&param2=foo"
	        .then(function(response) {
	            console.log(response);
	        });
	});
```

### POST method
```sh
define([ 
	'js-request'
	], function( JSRequest ) {
	    API.reqest('http://localhost')
	        .post({
	            'param1': 'bar',
	            'param2': 'foo'
	        })
	        .then(function(response) {
	            console.log(response);
	        });
	});
```

### POST method (upload a file)
```sh
define([ 
	'js-request'
	], function( JSRequest ) {
	    API.reqest('http://localhost')
	        .upload(formData)   //previusly you need to generate the formData object
	        .then(function(response) {
	            console.log(response);
	        });
	});
```

### PUT method
```sh
define([ 
	'js-request'
	], function( JSRequest ) {
	    API.reqest('http://localhost')
	        .put({
	            'param1': 'bar',
	            'param2': 'foo'
	        })
	        .then(function(response) {
	            console.log(response);
	        });
	});
```

