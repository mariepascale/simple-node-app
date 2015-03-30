var AuthorLoader = function() {
	
};


// function getLibrary(callback)
// @callback {Function}
AuthorLoader.prototype.getLibrary = function(callback) {
	var db = req.db;
	var collection = db.get('usercollection');

	collection.find({},{},function(e,docs){
		callback(docs);
	});
	
};