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
            axios.get("https://tool.mintimate.cn/api/mcStatus?serverIP=mc.szzz666.top&serverType=BE")
                .then(result => {
                    this.online = result.data.message.players.online;
                    setTimeout(this.getonline, 50000); 
                })
                .catch(error => {
                    this.online = "...";
                    setTimeout(this.getonline, 1000); 
                });
        }
    }
});

