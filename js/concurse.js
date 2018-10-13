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
    			alreadyDrawn: "true",
    			combinationId:"string",
    			concurse: 0,
    			concurseDate:"2018-10-12T01:35:05.186Z",
    			concurses: 0,
    			date:"2018-10-12T01:35:05.186Z",
    			id: 0,
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