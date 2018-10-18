var bet = new Vue({
    el: '#bet',
    data: {
        concurses: [],
        currentSort: 'concurse',
        currentSortDir: 'asc',
        page: 1,
        currentPage: 1
    },
    created: function() {
    	this.fetchData();
    },
    methods: {
    	fetchData: function() {
    		var url = 'https://luckybox-prod.herokuapp.com/luckybox/bet/list/LOTOFACIL';
    		url += '&page='+this.currentPage;
        	axios.get(url)
            	.then(res => res.data)
            	.then(res => {
                this.concurses = res.content;
            })	
    	},
        sort: function(s) {
            //if s == current sort, reverse
            if (s === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currentSort = s;
        },
        nextPage: function() {
        	if ((this.currentPage * this.page) < this.concurses.length) {
        		this.currentPage++;
        		this.fetchData();
        	}
        },
        prevPage: function() {
        	if (this.currentPage > 1) {
        		this.currentPage--;
        		this.fetchData();
        	}
        }
    },
    filters: {
        moment: function(date) {
            return moment(date).format('DD/MM/YYYY');
        }
    },
    computed: {
        sortedConcurses: function() {
            return this.concurses.sort((a, b) => {
                var modifier = 1;
                if (this.currentSortDir === 'desc') modifier = -1;
                if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            }).filter((row, index) => {
                var start = (this.currentPage - 1) * this.page;
                var end = this.currentPage * this.page;
                if (index >= start && index < end) return true;
            });
        }
    }
})