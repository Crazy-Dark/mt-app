<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <my-menu />
            </el-col>
            <el-col :span="19">
                <my-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <my-container v-for="item in dataList" :key="item.id" :nav="item"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MyMenu from '@/components/index/menu.vue';
import MyLife from '@/components/index/life.vue';
import MyContainer from '@/components/index/container.vue';
export default {
    data() {
        return {
            dataList: [{
                title: "有格调",
                tab: null,
                class: "istyle",
                id: "0001",
                tabs: [{
                    tab: "all",
                    text: "全部"
                }, {
                    tab: "food",
                    text: "约会聚餐"
                }, {
                    tab: "spa",
                    text: "丽人SPA"
                }]
            }, {
                title: "狠优惠",
                tab: null,
                class: "youhui",
                id: "0002",
                tabs: [{
                    tab: "all",
                    text: "全部"
                }, {
                    tab: "food",
                    text: "美食"
                }, {
                    tab: "spa",
                    text: "休闲"
                }]
            }]
        }
    },
    components: {
        MyMenu,
        MyLife,
        MyContainer,
    }
}
</script>