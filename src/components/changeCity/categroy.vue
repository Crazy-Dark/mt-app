<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择:</dt>
            <dd v-for="(item, index) in str" :key="index">
                <a :href="'#city-'+ item">{{item}}</a>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // str: "ABCDEFGHIJKLMNOPQRSTYVWXYZ",
            str: "ABCDEFGHIJKLMNOPQRSTYVWXYZ".split(''),
        }
    },
    created() {
        let data = [{
            "msg": "成功",
            "status": "success",
            "data": [{
                "id": 1,
                "name": "北京",
                "pinyin": "beijing",
                "acronym": "bj",
                "rank": "S",
                "firstChar": "b"
            }, {
                "id": 10,
                "name": "上海",
                "pinyin": "shanghai",
                "acronym": "sh",
                "rank": "S",
                "firstChar": "s"
            }]
        }]
    },
    methods: {
        
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/categroy.scss';
</style>
