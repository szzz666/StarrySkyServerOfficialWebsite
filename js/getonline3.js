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
            axios.get("https://tool.mintimate.cn/api/mcStatus?serverIP=mc.szzz666.top&serverType=BE")
                .then(result => {
                    this.online = result.data.message.players.online;
                    setTimeout(this.getonline, 10000); 
                })
                .catch(error => {
                    if(c = 0){
                        this.online = "";
                    }
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

