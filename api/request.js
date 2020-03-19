// uni.request封装

// sign
import md5 from 'js-md5'
let signfn = function(action) {
		let app_key = 'e70891ddafa5e012828c143390cdad9e';
		let key = 'c733e71b9b83908fc7278f04ea0b6bfc';
		let act = action;
		// 时间戳
		let ts = _=> new Date().getTime().toString();
		// 随机32位数
		let nonce = ()=> {
			let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E'];
			let res = '';
			for (let i = 0; i < 32; i++) {
				let pos = Math.round(Math.random( ) * (arr.length-1));
				res += arr[pos]
			}
			return res;
		}
		function getSign(params, app_key, key) {
		    if (typeof params == "string") {
		        return paramsStrSort(params);
		    } else if (typeof params == "object") {
		        let arr = [];
		        for (let i in params) {
		            arr.push((i + "=" + params[i]));
		        }
				return paramsStrSort(arr.join(("&")))
		    }
		}
		function paramsStrSort(paramsStr) {
		   let url = paramsStr;
		   let  arr = [];
		   let p = url.split("&") ;
		   for(let i in p){
			   let temp_arr = p[i].split("=");
			   arr.push((temp_arr[0].toLowerCase() + "=" + temp_arr[1]));
		   }
		    let urlStr = arr.sort().join("&");
		    let newUrl = urlStr + '&key=' + key;
		    return md5(newUrl);
		}
		let params = { act, 'ts': ts(), 'nonce': nonce(), app_key };
		// 转成字符串
		let signstr = JSON.stringify(params);
		let finalsign = signstr.replace(/{|}|"/g, '').replace(/:/g, '=').replace(/,/g, '&');
		let sign = getSign(params, app_key, key);
		return finalsign+'&sign='+sign;
}


const BASE_URL = 'https://apis.183read.cc/wx_api/v1/?'

export const myRequest = (options)=> {
	return new Promise((resovle, reject)=>{
		uni.request({

			url: BASE_URL + signfn(options.url),
			method: options.method || 'GET',
			data: options.data || {},
			success: res => {
				if(res.data.status_info.status_code !== 100) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resovle(res.data)
			},
			fail: err => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}