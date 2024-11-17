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
            axios.get("https://api.mcstatus.io/v2/status/bedrock/mc.szzz666.top")
                .then(result => {
                    this.online = result.data.players.online;
                    setTimeout(this.getonline, 5000); 
                })
                .catch(error => {
                    this.online = "...";
                    setTimeout(this.getonline, 1000); 
                });
        }
    }
});

