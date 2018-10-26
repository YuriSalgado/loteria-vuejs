var concurse = new Vue({
    el: '#concurse',
    data: {
        concurse: {
            concurse: Math.floor(Math.random() * 5000) + 1,
            concurses: 1,
            type: "LOTOFACIL"
        },
        concurseTypeTotal: {
            QUINA: 5, 
            LOTOMANIA: 50, 
            LOTOFACIL: 15
        }
    },
    methods: {
    	saveData: function(event) {
    		var url = 'https://luckybox-prod.herokuapp.com/luckybox/bet/toBet';

        	axios.post(url, this.concurse)
            	.then(res => {
				console.log(res);
            });

            event.preventDefault();
    	}
    }
});