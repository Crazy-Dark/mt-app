import axios from '@/axios.js';

let api = {
    searchHotWords(params) {
        return axios.get('/api/meituan/header/searchHotWords.json', params);
    },
    getSearchList(params) {
        return axios.get('/api/meituan/header/search.json', params);
    },
    getMenuList(params) {
        return axios.get('/api/meituan/index/nav.json', params);
    },
    getResultProducts(params) {
        return axios.get('/api/meituan/index/resultsByKeywords.json', params);
    },
    getProductList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getClassify() {
        return axios.get('/api/meituan/list/classify.json');
    },
    getAreaList() {
        return axios.get('/api/meituan/list/areaList.json');
    },
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    }, 
    getRecents() {
        return axios.get('/api/meituan/city/recents.json');
    }, 
    getProvince() {
        return axios.get('/api/meituan/city/province.json');
    }, 
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params) {
        return axios.get('/api/meituan/login', {params})
    },
    register(params) {
        return axios.get('/api/meituan/register', params)
    }
}

export default api;