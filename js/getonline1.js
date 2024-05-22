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
            axios.get("http://mc.szzz666.top:8662/motd?serverIp=127.0.0.1")
                .then(result => {
                    this.online = result.data.players_online;
                    setTimeout(this.getonline, 10000); // 获取成功后，一分钟执行一次
                })
                .catch(error => {
                    this.online = "...";
                    setTimeout(this.getonline, 1000); // 获取失败后，五秒执行一次
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
        ping_time: null,
        ping_time2: null,
    },
    mounted() {
        this.getdata(); // 首次加载先执行一次
        this.getdata2(); // 首次加载先执行一次
    },
    methods: {
        getdata() {
            axios.get("http://mc.szzz666.top:8662/motd?serverIp=127.0.0.1")
                .then(result => {
                    this.motd = result.data.motd_html;
                    this.online = result.data.online;
                    this.players_online = result.data.players_online;
                    this.players_max = result.data.players_max;
                    this.version = result.data.version_name;
                    this.ping_time = result.data.ping_time;
                    setTimeout(this.getdata, 10000); // 获取成功后，一分钟执行一次
                })
                .catch(error => {
                    this.online = false;
                    setTimeout(this.getdata, 1000); // 获取失败后，五秒执行一次
                });
        },
        getdata2() {
            axios.get("http://mc.szzz666.top:8662/motd?serverIp=127.0.0.1:19134")
                .then(result => {
                    this.motd2 = result.data.motd_html;
                    this.online2 = result.data.online;
                    this.players_online2 = result.data.players_online;
                    this.players_max2 = result.data.players_max;
                    this.version2 = result.data.version_name;
                    this.ping_time2 = result.data.ping_time;
                    setTimeout(this.getdata2, 10000); // 获取成功后，一分钟执行一次
                })
                .catch(error => {
                    this.online = false;
                    setTimeout(this.getdata2, 1000); // 获取失败后，五秒执行一次
                });
        }
    }
});