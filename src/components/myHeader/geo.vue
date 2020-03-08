<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            西安
            <router-link :to="{name: 'changeCity'}" class="changeCity">
                切换城市
            </router-link>
                [
                <a href="#">西安</a>
                <a href="#" class="specific">蓝田</a>
                <a href="#">孟村</a>
                ]
        </div>
        <div class="m-user">
            <template v-if="!this.$store.state.userName">
                <router-link :to="{name: 'login'}" class="login">
                    立即登录
                </router-link>                
                <router-link :to="{name: 'register'}" class="register">
                    注册
                </router-link>
            </template>
            <template v-if="this.$store.state.userName">
                <span>你好，{{this.$store.state.userName}}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>