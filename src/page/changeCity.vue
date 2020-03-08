<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotCityList" />
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="rencentList" />
        </el-row>
        <el-row>
            <cate-gory />    
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue';
import Hot from '@/components/changeCity/hot.vue';
import CateGory from '@/components/changeCity/categroy.vue';
import api from '@/api/index.js';
export default {
    data() {
        return {
            hotCityList: ["西安", "北京", "上海", "深圳"],
            rencentList: ["西安", "黑龙江"]
        }
    },
    created() {
        api.getHotCity().then(res=> {
            // console.log(res.data.data);
            this.hotCityList = res.data.data.map(item => item.name);
        });
        api.getRecents().then(res=> {
            // console.log(res.data.data);
            this.rencentList = res.data.data.map(item => item.name);
        })
    },
    components: {
        Province,
        Hot,
        CateGory,
    }
}
</script>