<template>
    <div class="main">
        <div class="top">
            <div class="title">
                <span v-for="(title, index) in titles1" :key="index" :class="{ isSelected: index == titles1Selected }">{{
                    title
                }}</span>
            </div>
            <div class="content">
                <div class="select">
                    <span>投资账户：</span>

                    <el-select v-model="value" class="m-2" placeholder="全选">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <span>查询日期：</span>
                    <el-date-picker v-model="date" type="date" :placeholder="date" />
                    <el-button :icon="Search" style="margin-left: 20px;">查询</el-button>
                    <el-button>导出</el-button>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="序号" width="70" align="center" />
                    <el-table-column prop="account" label="投资账户" width="110" align="center" />
                    <el-table-column prop="name" label="名称" align="center" />
                    <el-table-column label="盈亏" header-align="center">
                        <el-table-column prop="profitLoss.all" label="期货全部持仓" width="120" align="right" />
                        <el-table-column prop="profitLoss.straddle" label="套利持仓" width="100px" align="right" />
                        <el-table-column prop="profitLoss.open" label="敞口持仓" width="120" align="right" />
                        <el-table-column prop="profitLoss.shareOption" label="期权" width="150" align="right" />
                    </el-table-column>
                    <el-table-column label="保证金（资金占比）" header-align="center">
                        <el-table-column prop="bail.all" label="期货全部持仓" width="120" align="right" />
                        <el-table-column prop="bail.straddle" label="套利持仓" width="100px" align="right" />
                        <el-table-column prop="bail.open" label="敞口持仓" width="120" align="right" />
                        <el-table-column prop="bail.shareOption" label="期权" width="150" align="right" />
                    </el-table-column>
                    <el-table-column label="盈亏" header-align="center">
                        <el-table-column prop="storage.all" label="期货全部持仓" width="120" align="right" />
                        <el-table-column prop="storage.straddle" label="套利持仓" width="100px" align="right" />
                        <el-table-column prop="storage.open" label="敞口持仓" width="120" align="right" />
                        <el-table-column prop="storage.shareOption" label="期权" width="150" align="right" />
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="bottom">
            <div class="title">
                <span v-for="(title, index) in titles2" :key="index" :class="{ isSelected: index == titles2Selected }">{{
                    title
                }}</span>
            </div>
            <div class="content">
                <div class="select">
                    <div class="left">
                        <el-radio-group v-model="radio">
                            <el-radio :label="0">全部明细</el-radio>
                            <el-radio :label="1">投机/保值</el-radio>
                        </el-radio-group>
                    </div>

                    <div class="right">
                        <span>资金账户：</span>
                        <el-select v-model="value" class="m-2" placeholder="全选">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <span>交易所：</span>
                        <el-select v-model="value" class="m-2" placeholder="全选">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <span>品种：</span>
                        <el-select v-model="value" class="m-2" placeholder="全选">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <span>合约：</span>
                        <el-select v-model="value" class="m-2" placeholder="全选">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <el-button :icon="Search" style="margin-left: 20px;">查询</el-button>
                    </div>

                </div>
                <el-table :data="tableData2" style="width: 100%">
                    <el-table-column type="index" label="序号" width="70" />
                    <el-table-column property="account" label="资金账户" />
                    <el-table-column property="name" label="名称" />
                    <el-table-column property="kind" label="品种" />
                    <el-table-column property="contract" label="合约" />
                    <el-table-column property="duokong" label="多空" />
                    <el-table-column property="allWare" label="总仓" />
                    <el-table-column property="available" label="可用" />
                    <el-table-column property="todyWare" label="今仓" />
                    <el-table-column property="todyWare" label="今可用" />
                    <el-table-column property="aveOpenPrice" label="开仓均价" />
                    <el-table-column property="earnSpread" label="盈利价差" />
                    <el-table-column property="brush" label="逐笔浮盈" />
                    <el-table-column property="value" label="价值" />
                    <el-table-column property="earnest" label="保证金" />
                    <el-table-column property="fundsProp" label="资金占比" />
                    <el-table-column property="chicangjunjia" label="持仓均价" />
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Search } from '@element-plus/icons-vue'
export default {
    data() {
        return {
            titles1: ["持仓总览", "投资账户持仓查询", "资金账户持仓查询", "产品持仓查询"],
            titles2: ["期货全部持仓", "套利持仓", "敞口持仓", "期权持仓"],
            titles1Selected: 1,
            titles2Selected: 0,
            tableData: [],
            tableData2: [],
            date: '',
            radio: 0,
            value: '',
            Search,
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ]
        }
    },
    methods: {
        // 当日日期
        today() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return `${year}-${month}-${day}`
        },
        async getTableData() {
            const res = await axios.get('/data.json')
            this.tableData = res.data.tableData
            this.tableData2 = res.data.tableData2
        },
    },
    mounted() {
        this.date = this.today()
        this.getTableData()
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #1c1e2a;
}

.top,
.bottom {
    flex: 1;
}

.title {
    color: #fff;
}

span {
    display: inline-block;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
}

.isSelected {
    color: #409eff;
    border-bottom: 2px solid #409eff;
}

.select {
    color: #ccc;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 10px;
}

.bottom .select {
    justify-content: space-between;
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
}

:deep(.el-input) {
    border: 0;
    outline: none;
}

:deep(.bottom .el-input) {
    border: 0;
    outline: none;
    width: 100px;
}

:deep(.el-button) {
    color: #909399;
}
</style>