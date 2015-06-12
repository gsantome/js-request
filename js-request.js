define([], function() {

	var API = {

		request: function(url) {
 
	 		var core = {

				ajax : function( method, url, args, formData ) {

					var promise = new Promise( function( resolve, reject ) {
						
						var httpRequest = new XMLHttpRequest();
						var uri = url;

						httpRequest.open(method, uri);

						if (args && method === 'GET') {
							uri += '?';
							var argcount = 0;
							for (var key in args) {
								if (args.hasOwnProperty(key)) {
									if (argcount++) {
										uri += '&';
									}
									uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
								}
							}

							httpRequest.send();
						}
						else if( (args !== undefined || formData !== undefined) && (method === 'PUT' || method === 'POST') ) {
							
							if( formData !== undefined ) {
								httpRequest.overrideMimeType("multipart/form-data");
								httpRequest.send(formData);
							}
							else {
								httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
								httpRequest.send(JSON.stringify(args));	
							}
						}
						else {
							httpRequest.send();
						}


						httpRequest.onload = function () {
							if (this.status == 200) {
								
								resolve(JSON.parse(this.response));
							
							}
							else {

								reject(this.statusText);

							}
						};

						httpRequest.onerror = function () {
							
							reject(this.statusText);
						
						};
					});

					return promise;
				}
			};

			// Adapter
			return {
				upload: function( formData ) {
					return core.ajax('POST', url, undefined, formData);
				},
				get : function( args ) {
					return core.ajax('GET', url, args);
				},
				post : function( args ) {
					return core.ajax('POST', url, args);
				},
				put : function( args ) {
					return core.ajax('PUT', url, args);
				},
				delete : function( args ) {
					return core.ajax('DELETE', url, args);
				}
			};
		}

	};

	return API;

});