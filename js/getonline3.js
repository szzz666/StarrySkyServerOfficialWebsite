var c = 0;
new Vue({
    el: '#players_num',
    data: {
        online: null
    },
    mounted() {
        this.getonline(); // 首次加载先执行一次
    },
    methods: {
        getonline() {
            axios.get("https://motdbe.blackbe.work/api?host=szzz666.x3322.net:19132")
                .then(result => {
                    this.online = result.data.online;
                    setTimeout(this.getonline, 10000); 
                })
                .catch(error => {
                        this.online = "...";
                    setTimeout(this.getonline, 2000); 
                });
        }
    }
});

