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
                    setTimeout(this.getonline, 60000); // 获取成功后，一分钟执行一次
                })
                .catch(error => {
                    this.online = "...";
                    setTimeout(this.getonline, 5000); // 获取失败后，五秒执行一次
                });
        }
    }
});

new Vue({
    el: '#fwqcx',
    data: {
        online: null,
        motd: null,
        players_online: null,
        players_max: null,
        version: null,
        online2: null,
        motd2: null,
        players_online2: null,
        players_max2: null,
        version2: null,
    },
    mounted() {
        this.getdata(); // 首次加载先执行一次
        this.getdata2(); // 首次加载先执行一次
    },
    methods: {
        getdata() {
            axios.get("https://api.mcstatus.io/v2/status/bedrock/mc.szzz666.top")
                .then(result => {
                    this.motd = result.data.motd.html.split("\n")[0];
                    this.online = result.data.online;
                    this.players_online = result.data.players.online;
                    this.players_max = result.data.players.max;
                    this.version = result.data.version.name;
                    setTimeout(this.getdata, 60000); // 获取成功后，一分钟执行一次
                })
                .catch(error => {
                    this.online = false;
                    setTimeout(this.getdata, 5000); // 获取失败后，五秒执行一次
                });
        },
        getdata2() {
            axios.get("https://api.mcstatus.io/v2/status/bedrock/mc.szzz666.top:19134")
                .then(result => {
                    this.motd2 = result.data.motd.html.split("\n")[0];
                    this.online2 = result.data.online;
                    this.players_online2 = result.data.players.online;
                    this.players_max2 = result.data.players.max;
                    this.version2 = result.data.version.name;
                    setTimeout(this.getdata2, 60000); // 获取成功后，一分钟执行一次
                })
                .catch(error => {
                    this.online = false;
                    setTimeout(this.getdata2, 5000); // 获取失败后，五秒执行一次
                });
        }
    }
});
