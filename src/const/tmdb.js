const tmdb ={
    "api_key": "ca1103b1a873f037e36542087b6c0e7d",
    "base_url":"https://api.themoviedb.org/3",
    "images_url": "https://image.tmdb.org/t/p",
    "timeout":5000,
    apiCall: function(url, success , error){
        let params_str=`api_key=${this.api_key}`;
        let xhr = new XMLHttpRequest();
        xhr.timeout=this.timeout;
        xhr.ontimeout = function(){
            throw(`Request time out: ${url}  ${params_str}`);
        }
        console.log(`${this.base_url}${url}?${params_str}`);
        xhr.open("GET",`${this.base_url}${url}?${params_str}`,true);
        xhr.setRequestHeader('Accept', 'application/json');
	    xhr.responseType = "text";
        xhr.onreadystatechange=function(){
            if(this.readyState===4&&this.status===200){
                if(typeof success == "function"){
                    success(JSON.parse(this.response));
                }else{
                    throw('No success callback')
                }
            }
        };
        xhr.send();

    }
}

export default tmdb