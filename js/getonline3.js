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
                    setTimeout(this.getonline, 5000); 
                })
                .catch(error => {
                    if(c = 1){
                        this.online = ".";
                    }
                    if(c = 2){
                        this.online = "..";
                    }
                    if(c => 3){
                        this.online = "...";
                        c = 0;
                    }
                    c++;
                    setTimeout(this.getonline, 1000); 
                });
        }
    }
});

