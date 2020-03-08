<template>
    <div class="m-products-list">
        <ul>
            <li 
            v-for="(item, index) in nav" :key="index"
            :class="{'s-nav-active': item.active}"
            >{{item.name}}</li>
        </ul>
        <el-row>
            <pd-item 
            v-for="(item, index) in productList" :key="index"
            :meta="item"
            />
        </el-row>
    </div>
</template>

<script>
import PdItem from './item.vue';
import api from '@/api/index.js';
export default {
    data() {
        return {
            nav: [{
                key: "s-default",
                name: '智能排序',
                active: true
            }, {
                key: 's-price',
                name: '价格排序',
                active: false
            }, {
                key: 's-sale',
                name: '人气最高',
                active: false
            }, {
                key: 's-comment',
                name: '评价最高',
                active: false
            }],
            productList: []
        }
    },
    components: {
        PdItem,
    },
    created() {
        api.getProductList().then(res => {
            console.log(res.data.data);
            this.productList = res.data.data;
        })
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/list.scss';
</style>