(function(){
	var app = angular.module('store', [ ]);	

	app.controller('StoreController', function() {
		this.product = gem;
	});

	var gems = [  //bracket for array

	{
		name: 'america',
		price: 2.96,
		description: '....',
		canPurchase: false,
		soldOut: false
	},
	{
		name: 'the beautify',
		price: 42.96,
		description: '....',
		canPurchase: false,
		soldOut: false
	}
	];

})();




