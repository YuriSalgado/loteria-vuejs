var concurse = new Vue({
    el: '#concurse',
    data: {
        concurse: {}
    },
    methods: {
    	saveData: function(event) {
    		event.preventDefault();

    		var url = 'https://luckybox-prod.herokuapp.com/luckybox/bet/toBet';
    		var dataAddiction = {
    			concurse: Math.floor(Math.random() * 5000) + 1,
    			concurses: 1000,
    			type:"LOTOFACIL"};

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