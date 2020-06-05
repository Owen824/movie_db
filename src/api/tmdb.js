const tmdb ={
    "api_key": "ca1103b1a873f037e36542087b6c0e7d",
    "base_url":"https://api.themoviedb.org/3",
    "images_url": "https://image.tmdb.org/t/p",
    apiCall: function(url,params,success){
        let params_str=`api_key=${this.api_key}${params}`;
        fetch(`${this.base_url}${url}?${params_str}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            success(data);
        })
    }
}

export default tmdb