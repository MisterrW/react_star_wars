class Querier {
	make(url, callback){
    console.log(callback);
		let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200) {
        var jsonString = request.responseText;
        var response = JSON.parse(jsonString);
        callback(response);
      }
    }.bind(this);
    request.send(null);
	}

  // update(){

  // }

  // test(){
  //   console.log(this);
  // }
}

export default Querier;