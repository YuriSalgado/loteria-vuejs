var concurse = new Vue({
    el: '#concurse',
    data: {
        concurse: null
    },
    methods: {
    	saveData: function() {
    		var url = 'https://luckybox-prod.herokuapp.com/luckybox/bet/toBet';
    		var data = {
    			alreadyDrawn: "true",
    			combinationId:"string",
    			concurse: 0,
    			concurseDate:"2018-10-12T01:35:05.186Z",
    			concurses: 0,
    			date:"2018-10-12T01:35:05.186Z",
    			dozen1: 0,
    			dozen10: 0,
    			dozen11: 0,
    			dozen12: 0,
    			dozen13: 0,
    			dozen14: 0,
    			dozen15: 0,
    			dozen16: 0,
    			dozen17: 0,
    			dozen18: 0,
    			dozen19: 0,
    			dozen2: 0,
    			dozen20: 0,
    			dozen21: 0,
    			dozen22: 0,
    			dozen23: 0,
    			dozen24: 0,
    			dozen25: 0,
    			dozen26: 0,
    			dozen27: 0,
    			dozen28: 0,
    			dozen29: 0,
    			dozen3: 0,
    			dozen30: 0,
    			dozen31: 0,
    			dozen32: 0,
    			dozen33: 0,
    			dozen34: 0,
    			dozen35: 0,
    			dozen36: 0,
    			dozen37: 0,
    			dozen38: 0,
    			dozen39: 0,
    			dozen4: 0,
    			dozen40: 0,
    			dozen41: 0,
    			dozen42: 0,
    			dozen43: 0,
    			dozen44: 0,
    			dozen45: 0,
    			dozen46: 0,
    			dozen47: 0,
    			dozen48: 0,
    			dozen49: 0,
    			dozen5: 0,
    			dozen50: 0,
    			dozen6: 0,
    			dozen7: 0,
    			dozen8: 0,
    			dozen9: 0,
    			id: 0,
    			type:"LOTOFACIL"};

        	axios.post(url, data)
            	.then(res => res.data)
            	.then(res => {
                this.concurses = res.content;
            })	
    	},
    }
});