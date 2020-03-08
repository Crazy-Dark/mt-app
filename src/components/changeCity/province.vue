<template>
    <div class="province">
        <span class="name">按省份选择:</span>
        <my-select 
        :list="provinceList" 
        :value="province" title="省份" 
        :showWapperActive="provinceActive"
        @change_active="changeProvinceActive"
        />
        <my-select 
        :list="cityList" 
        :value="city" title="城市" 
        :showWapperActive="cityActive"
        @change_active="changeCityActive"
        :disable="cityDisable"
        />
        <span class="name">直接搜索:</span>
        <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
            <el-option
            v-for="(item, index) in searchList"
            :key="index"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import MySelect from './select.vue';
import api from '@/api/index.js';
export default {
    data() {
        return {
            provinceList: ["山东", "山西", "河南", "河北"],
            province: "省份",
            cityList: ["西安", "咸阳", "汉中", "临潼"],
            city: "城市",
            provinceActive: false,
            cityActive: false,
            searchList: ["西安", "咸阳", "汉中", "临潼"],
            searchWord: '',
            loading: false,
            cityDisable: true,
            // ajax请求时在变成true
        }
    },
    created() {
        api.getProvince().then(res => {
            // console.log(res.data.data);
            this.provinceList = res.data.data.map(ele => ele.provinceName);
        });
        api.getCityList().then(res => {
            // console.log(res);
            this.cityList = res.data.data.map(ele => ele.name);
        })
    },
    components: {
        MySelect,
    },
    methods: {
        changeProvinceActive(flag) {
            this.provinceActive = flag;
            if(flag) {
               this.cityActive = false; 
            }
        },
        changeCityActive(flag) {
            this.cityActive = flag;
            if(flag) {
               this.provinceActive = false; 
            }
        },
        changeProvince(val) {
            cityDisable = false;
            this.province = val
        },
        changeCity(val) {
            this.city = val;
        },
        remoteMethod(val) {
            // val就是输入的值，然后发送ajax
            console.log(e);
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';
</style>