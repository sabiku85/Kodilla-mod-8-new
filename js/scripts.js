function rysujChoinke(m) {
	for (var k = 1; k <= m; k++) {
		var star = "";
			for (var n = 1; n <= (k*2-1); n++) {
    			star += "*";
    		}
    	console.log(star);
    }
}

rysujChoinke(8);