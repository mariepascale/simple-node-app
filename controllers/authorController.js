var authorModel = require('../models/').authorModel;


// ### function AuthorController()
// #### @req {object} request object
// #### @res {object} response object
// Returns Rendered Author page.
function AuthorController(req, res)
{
	var _self = this;
	
	//return rendered HTML
	return _self.render(req, res);
}


// ### function render(req, res)
// #### @req {object} request object
// #### @res {object} response object
// Render html page.
AuthorController.prototype.render = function(req, res) {
	var _self = this;

    async.parallel({
		authors: function(callback) {
			authorModel.getLibrary(function(libraryData){
				if (libraryData.error) {
					callback(null, {'error': 'no library data'});
				}
				else {
					callback(null, libraryData);
				}
			});
		}
	},
	function(err, results){

		var libraryData = results.authors;

		res.render('authors', {
			libraryData: libraryData
		});
	});
}


module.exports = AuthorController;