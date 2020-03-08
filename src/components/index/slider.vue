<template>
  <div class="slide">
    <el-carousel>
        <el-carousel-item v-for="(item, index) in imagesList" :key="index">
            <img :src="item" alt />
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imagesList: [
                "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
                "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
                "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
            ]
        }
    }
}
</script>