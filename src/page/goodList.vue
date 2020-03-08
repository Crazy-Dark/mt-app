<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <my-crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <p-categroy />
                </el-row>
                <el-row>
                    <pd-list />
                </el-row>   
            </el-col>
            <el-col :span="5">
                地图 + 推荐
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MyCrumbs from '../components/products/crumbs.vue';
import PCategroy from '../components/products/categroy.vue';
import PdList from '../components/products/list.vue';
export default {
    components: {
        MyCrumbs,
        PCategroy,
        PdList
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>
