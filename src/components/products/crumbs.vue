<template>
    <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
            <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>