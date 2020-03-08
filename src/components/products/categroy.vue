<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="item in menuList" :key="item.type">
                <product-select :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="item in areaList" :key="item.type">
                <product-select :name="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
    </div>
</template>

<script>
import ProductSelect from "./select.vue";
import api from '@/api/index.js';
export default {
    data() {
        return {
            menuList: [],
            areaList: [{
                title: '推荐商圈',
                sub_list: [
                    {
                        name: "望京",
                        id: 2333333,
                    }, {
                        name: "昌平",
                        id: 122222
                    }
                ]               
            }]
        }
    },
    components: {
        ProductSelect,
    },
    created() {
        api.getClassify().then(res => {
            // console.log(res.data.data);
            this.menuList = res.data.data;
        });
        api.getAreaList().then(res => {
            // 获取的数据格式有问题
            // this.areaList = res.data.data;
        });
    }
}
</script>