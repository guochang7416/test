<script setup>
import { computed,ref } from "vue";
import dayjs from "dayjs";
let time = ref(dayjs().format('YYYY/M/DD HH:mm:ss'))

setInterval(() => {
    time.value = dayjs().format('YYYY/M/DD HH:mm:ss')
}, 1000)


</script>

<template>
    <div class="footer">
        <el-icon><Bell /></el-icon>
        <span style="margin-left: 5px;">{{ time }}</span>
    </div>
</template>

<style scoped>
.footer {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: rgba(240, 248, 255,0.6);
}
</style>