<template>
    <div class="choose-wrap" @click="showWapper" v-document-click="documentClick">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content': true, 'active': showWapperActive}">
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col" v-for="(ele, index) in renderList" :key="index">
                        <span class="mt-item" 
                        v-for="(ele, index) in ele" :key="index">{{ele}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // showWapperActive: false,
        }
    },
    props: [
        "list",
        "value",
        "title",
        "showWapperActive",
    ],
    computed: {
        renderList: function() {
            let col = Math.ceil(this.list.length / 12);
            let resultData = [];
            for(let i = 0; i < col; i++) {
                let data = this.list.slice(i * 12, i * 12 + 12);
                resultData.push(data);
            }
            return resultData;
        }
    },
    methods: {
        showWapper(e) {
            e.stopPropagation();
            this.$emit('change_active', true);
            // this.showWapperActive = true;
        },
        documentClick() {
            this.$emit('change_active', false);
            // this.showWapperActive = false;
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>