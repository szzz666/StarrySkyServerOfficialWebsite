new Vue({
	el: '.zzb',
	data: {
		sponsor_datas: []
	},
	mounted() {
		this.getdata(); // 首次加载先执行一次
	},
	methods: {
		getdata() {
			axios.get("data/sponsor_data.json")
				.then(result => {
					this.sponsor_datas = result.data;
					setTimeout(this.getdata, 60000); // 获取成功后，一分钟执行一次
				})
				.catch(error => {
					this.sponsor_datas = "请求失败";
					setTimeout(this.getdata, 5000); // 获取失败后，五秒执行一次
				});
		}
	}
});								
