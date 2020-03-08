<template>
    <div>
        <div class="m-istyle">
            <dl @mouseover="over" :class="nav.class">
                <dt>{{nav.title}}</dt>
                <dd 
                v-for="(v, i) in nav.tabs" :key="i + '_' + v" 
                :class="{active: kind == v.tab}"
                :data-type="v.tab"
                >{{v.text}}</dd>
            </dl>
            <ul class="ibody">
                <li v-for="(item, index) in resultsData[kind]" :key="index">
                    <el-card :body-style="{ padding: '0px' }" shadow="never">
                        <img :src="item.image" class="image">
                        <div class="cbody">
                            <div class="title" :title="item.title">{{item.title}}</div>
                            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
                            <div class="price-info">
                                <span class="current-price-wrapper">
                                    <span class="price-symbol numfont">¥</span>
                                    <span class="current-price numfont">
                                        {{item.price}}
                                    </span>
                                </span>
                                <span class="sold bottom-right-info">{{item.address}}</span>
                            </div>
                        </div>
                    </el-card>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js';
export default {
    data() {
        return {
            kind: "all",
            resultsData: {},
        }
    },
    props: ['nav'],
    created() {
        api.getResultProducts().then(res => {
            this.resultsData = res.data.data;
        })
    },
    methods: {
        over(e) {
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            if(tagName != 'dd') {
                return false;
            } 
            this.kind = dom.getAttribute('data-type');
            // 动态的获取数据 ajax请求
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/artistic.scss';
</style>