var validate = ( function () {
	var toValidate = [ 'INPUT', 'SELECT', 'TEXTAREA' ];

	var run = function ( f ) {
		var isValid = true;

		for ( var i = 0, l = f.elements.length; i < l; i++ ) {
			var el = f.elements[ i ];
			if ( toValidate.indexOf( el.tagName ) < 0 ) {
				continue;
			}

			if ( !el.checkValidity() ) {
				isValid = false;

				if ( el.offsetParent ) {
					el.focus();
				} else {
					alert( 'Algum elemento inválido está escondido!' );
				}
				
				break;
			}
		}

		return isValid;
	};

	return {
		run: run
	}
})();

( function () {
	var f = document.getElementById( 'form' );

	f.noValidate = true;
	
	f.onsubmit = function ( event ) {
		event.preventDefault();

		console.warn( 'is valid:', validate.run( f ) );
		return false;
	};
})();