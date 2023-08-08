
<template>
    <div class="footer">
        <el-icon><Bell /></el-icon>
        <span style="margin-left: 5px;">{{ time }}</span>
    </div>
</template>

<script>
import dayjs from "dayjs";
export default {
    data() {
        return {
            time: dayjs().format('YYYY/M/DD HH:mm:ss')
        }
    },
    mounted() {
        setInterval(() => {
            this.time = dayjs().format('YYYY/M/DD HH:mm:ss')
        }, 1000)
    }
    
}
</script>

<style scoped>
.footer {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: rgba(240, 248, 255,0.6);
}
</style>