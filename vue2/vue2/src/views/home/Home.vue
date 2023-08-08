<template>
    <div class="main">
        <div class="left">
            <div class="top content">
                <div class="title">
                    账户总览
                </div>
                <div class="data">
                    <div class="zhanghu-item" v-for="item in zhanghu" :key="zhanghu.number">
                        <span>{{ item.title }}</span>
                        <span>{{ item.number }}</span>
                    </div>
                </div>
            </div>
            <div class="bottom content">
                <div class="title">
                    <span>投资账户</span>
                    <span>交易通道</span>
                    <span>产品</span>
                    <span>交易组</span>
                </div>
                <el-button type="primary" plain @click="isShow=true">新增</el-button>
                <el-table :data="tableData">
                    <el-table-column type="selection" width="28" />
                    <el-table-column property="serial" label="序号" />
                    <el-table-column property="account" label="投资账户" width="120" />
                    <el-table-column property="right" label="权益" />
                    <el-table-column property="earnings" label="当日收益" />
                </el-table>

            </div>
        </div>

        <div class="right">
            <div class="bottom content">
                <div class="title">
                    <span>总权益图</span>
                    <span>总盈亏图</span>
                    <span>总收益图</span>
                    <span>总净值图</span>
                </div>
                <div class="tu tu1" ref="tu1"></div>
            </div>
            <div class="bottom content">
                <div class="title">
                    <span>权益图</span>
                    <span>盈亏图</span>
                    <span>收益图</span>
                    <span>净值图</span>
                </div>
                <div class="tu tu2" ref="tu2"></div>
            </div>
        </div>

        <Increase v-show="isShow" @closeTheWindow="closeTheWindow"></Increase>
    </div>
</template>

<script>
import Increase from '@/components/Increase.vue';
import * as echarts from 'echarts';
export default {
    data() {
        return {
            activeName: 'fist',
            zhanghu: [
                { title: "总权益", number: "100,009,475.39" },
                { title: "当日收益", number: "2,640.00" },
                { title: "单位净值", number: "1" },
                { title: "净值增长率", number: "0%" },
                { title: "收益率", number: "0%" },
                { title: "回撤率", number: "0%" },
                { title: "资金使用率", number: "0.01%" },
                { title: "可用资金", number: "99,996,488.39" },
            ],
            tableData: [
                {
                    serial: '1',
                    account: 'wenhua',
                    right: '0.00',
                    earnings: '60.00'
                }
            ],
            isShow: true
        };
    },
    mounted() {
        this.$refs.tu1.style.width = '100%';
        this.$refs.tu1.style.height = '320px';
        const myChart1 = echarts.init(this.$refs.tu1);
        myChart1.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['11:02:40', '11:12:40', '11:22:40', '13:01:40',
                    '13:11:40', '13:12:40', '13:22:40',
                    '13:31:40', '13:42:40', '13:52:40',
                    '14:02:40', '14:12:40', '14:22:40', '14:01:40'
                ],
            },
            yAxis: {
                type: 'value',
                max: 12000.00,
                splitNumber: 6,
                axisLabel: {
                    formatter: '{value}.00'
                },
                name: "权益/万元"
            },
            series: [
                {
                    name: 'jiner',
                    type: 'line',
                    stack: 'Total',
                    data: [0, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000]
                }
            ]
        });
        this.$refs.tu2.style.width = '100%';
        this.$refs.tu2.style.height = '340px';
        const myChart2 = echarts.init(this.$refs.tu2);
        myChart2.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['11:02:40', '11:12:40', '11:22:40', '13:01:40',
                    '13:11:40', '13:12:40', '13:22:40',
                    '13:31:40', '13:42:40', '13:52:40',
                    '14:02:40', '14:12:40', '14:22:40', '14:01:40'
                ],
            },
            yAxis: {
                type: 'value',
                max: 1,
                splitNumber: 6,
                axisLabel: {
                    // formatter:'{value}.00'
                    formatter: function (value) {
                        return value < 1 ? `${value}0` : `${value}.00`;
                    }
                },
                name: "权益/万元"
            },
            series: [
                {
                    name: 'jiner',
                    type: 'line',
                    stack: 'Total',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            ]
        });
    },
    components: { Increase },
    methods: {
        closeTheWindow() {
            this.isShow = false;
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    height: 100%;
    background-color: #1c1e2a;
}

.left {
    width: 325px;
    display: flex;
    flex-direction: column;
}

.content {
    /* background-color: #212735; */
    color: #fff;
}

.top {
    height: 360px;
}

.top .title {
    width: 70px;
    text-align: center;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: #409eff;
    border-bottom: 1px solid #409eff;
}

.data {
    display: flex;
    flex-direction: column;
    background-color: #212735;
}

.zhanghu-item {
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
}

.zhanghu-item span:nth-child(1) {
    color: #8590a8;
    flex: 4;
}

.zhanghu-item span:nth-child(2) {
    color: #aab5cc;
    flex: 6;
}

.bottom {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.bottom .title {
    display: flex;
}

.bottom .title span {
    width: 70px;
    text-align: center;
    color: #fff;
    height: 30px;
    line-height: 30px;
}

.bottom .title span:nth-child(1) {
    color: #409eff;
    border-bottom: 1px #409eff solid;
}

.right {
    background-color: #1b1f2a;
    flex: 1;
    margin-left: 15px;
}

.right .bottom:nth-child(1) .title {
    height: 40px;
}

.tu1,
.tu2 {
    background-color: #212735;
}
/deep/ .el-button {
    width: 50px;
    margin: 5px 0;
    padding: 8px 0 ;
    text-align: center;

}
/deep/ .el-button--primary.is-plain {
    color: #409eff;
    background-color: #212735;
}
/* #212735 */
/* :deep(.el-tabs__header) {
    margin: 0 !important;
}

:deep(.el-table) {
    height: 340px;
    background-color: #212735;
    overflow-x: scroll;
}

:deep(.el-table::-webkit-scrollbar) {
    background-color: #212735;
}

:deep(.el-table::-webkit-scrollbar-thumb) {
    background-color: #465673;
} */

/deep/ .el-table {
    height: 340px;
    background-color: #212735;
    overflow-x: scroll;
}

/deep/ .el-table tr{
    background-color: #212735;
}
/deep/ .el-table__row:hover{
    background-color: #212735;
}
/deep/ .el-table th.el-table__cell {
    background-color: #212735;
}

/deep/ .el-table::-webkit-scrollbar {
    background-color: #212735;
}

/deep/ .el-table::-webkit-scrollbar-thumb {
    background-color: #465673;
}
/deep/ .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: transparent !important;
}
    /deep/ .el-table__body-wrapper::-webkit-scrollbar {
	    height: 5px; /*滚动条高度*/
	}
	/*定义滚动条轨道 内阴影+圆角*/
	/deep/ .el-table__body-wrapper::-webkit-scrollbar-track {
	    border-radius: 10px; /*滚动条的背景区域的圆角*/
	    background-color: #071e4a; /*滚动条的背景颜色*/
	}
	/*定义滑块 内阴影+圆角*/
	/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
	    border-radius: 10px; /*滚动条的圆角*/
	    background-color: #465673; /*滚动条的背景颜色*/
	}
</style>