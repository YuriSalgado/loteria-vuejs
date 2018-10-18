var concurse = new Vue({
    el: '#concurse',
    data: {
        concurse: {
            concurse: Math.floor(Math.random() * 5000) + 1,
            concurses: 1
        }
    },
    methods: {
    	saveData: function(event) {
    		event.preventDefault();

    		var url = 'https://luckybox-prod.herokuapp.com/luckybox/bet/toBet';
    		var dataAddiction = {
    			/*concurse: Math.floor(Math.random() * 5000) + 1,
    			concurses: 8,*/
    			type:"LOTOFACIL"};
debugger;
			for (var attrname in dataAddiction) { 
				this.concurse[attrname] = dataAddiction[attrname]; 
			}

        	axios.post(url, this.concurse)
            	.then(res => {
				console.log(res);
            })	
    	},
    }
});