<template>
    <div class="header">
        <div class="shouye">
            <el-icon><Link /></el-icon>
            <span style="margin-left: 5px;">首页</span>
        </div>
        <div class="chicang">
            <span style="margin-left: 5px;">持仓查询</span>
        </div>
    </div>
    
</template>

<style scoped>
.header {
    height: 30px;
    display: flex;
}
.shouye {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #377ecc;
    align-items: center;
    border-radius: 5px;
}
.chicang {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(to right,#5161af, #3e6db5);
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 20px;
    margin-left: 10px;
}
</style>