<template>
    <div class="increase">
        <div class="title">
            <span>新增资金监控</span>
            <span @click="closeTheWindow"> × </span>
        </div>
        <div class="content">
            <div class="left">
                <el-form :model="ruleForm" label-width="100px">
                    <el-form-item label="风险名称" prop="riskName">
                        <el-input type="textarea" v-model="ruleForm.riskName"></el-input>
                    </el-form-item>

                    <el-form-item label="状态" prop="state">
                        <el-radio-group v-model="ruleForm.state">
                            <el-radio label="启用"></el-radio>
                            <el-radio label="点赞"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="时间范围" prop="timeRange">
                        <el-checkbox-group v-model="ruleForm.timeRange">
                            <el-checkbox label="白盘" name="timeRange"></el-checkbox>
                            <el-checkbox label="夜盘" name="timeRange"></el-checkbox>
                            <el-checkbox label="节假日" name="timeRange"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>

                    <el-form-item label="判断逻辑" prop="judegment">
                        <el-radio-group v-model="ruleForm.judegment">
                            <el-radio label="all">条件同时成立,系统进行触警操作</el-radio>
                            <el-radio label="random" style="margin-top: 20px;">条件任意一条成立,系统进行触警操作</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="触警操作" prop="operation">
                        <el-select v-model="ruleForm.operation">
                            <el-option label="手动强平" value="handle"></el-option>
                            <el-option label="自动强平" value="auto"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="right">
                <el-table ref="singleTable" :data="tableData">
                    <el-table-column type="index" width="50" label="序号" align="center">
                    </el-table-column>
                    <el-table-column property="type" label="风险类型" width="180" align="center">

                        <template slot-scope="scope">
                            <el-select v-model="scope.row.type.value">
                                <el-option v-for="item in scope.row.type.options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column property="formula" label="计算公式" width="280" align="center">
                        <template slot-scope="scope">
                            <el-select v-model="scope.row.formula.value">
                                <el-option v-for="item in scope.row.formula.options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column property="direction" label="比较方向" width="120" align="center">
                        <template slot-scope="scope">
                            <el-select v-model="scope.row.direction.value">
                                <el-option v-for="item in scope.row.direction.options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column property="alarm" label="触警值" align="center">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.alarm" placeholder=""></el-input>
                        </template>

                    </el-table-column>
                    <el-table-column property="operation" label="操作" align="center">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <p>风险提示1: 触发手动强平后投资账户不再允许交易，如允许投资账户再次交易，请通过投资账户交易权限再次授权（菜单位置: 投递账户管理/右键/交易权限/交易）</p>
        <hr />
        <div class="button">
            <el-button type="primary" plain @click="closeTheWindow">确认</el-button>
            <el-button type="primary" plain @click="closeTheWindow">取消</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: {
                riskName: "",
                state: "启用",
                timeRange: [],
                judegment: "random",
                operation: "handle"
            },
            tableData: [
                {
                    type: {
                        value: "选项1",
                        options: [{
                            value: '选项1',
                            label: '净值监控'
                        }, {
                            value: '选项2',
                            label: 'value2'
                        }, {
                            value: '选项3',
                            label: 'value3'
                        }, {
                            value: '选项4',
                            label: 'value4'
                        }, {
                            value: '选项5',
                            label: 'value5'
                        }],
                    },
                    formula: {
                        value: "选项1",
                        options: [{
                            value: '选项1',
                            label: '当日单位净值'
                        }, {
                            value: '选项2',
                            label: 'value2'
                        }, {
                            value: '选项3',
                            label: 'value3'
                        }, {
                            value: '选项4',
                            label: 'value4'
                        }, {
                            value: '选项5',
                            label: 'value5'
                        }],
                    },
                    direction: {
                        value: "选项1",
                        options: [{
                            value: '选项1',
                            label: '>'
                        }, {
                            value: '选项2',
                            label: '<'
                        }, {
                            value: '选项3',
                            label: '='
                        }, {
                            value: '选项4',
                            label: '≥'
                        }, {
                            value: '选项5',
                            label: '≤'
                        }],
                    },
                    alarm: "0.8",
                },
                {
                    type: {
                        value: "选项1",
                        options: [{
                            value: '选项1',
                            label: '净值监控'
                        }, {
                            value: '选项2',
                            label: 'value2'
                        }, {
                            value: '选项3',
                            label: 'value3'
                        }, {
                            value: '选项4',
                            label: 'value4'
                        }, {
                            value: '选项5',
                            label: 'value5'
                        }],
                    },
                    formula: {
                        value: "选项1",
                        options: [{
                            value: '选项1',
                            label: '当日单位净值'
                        }, {
                            value: '选项2',
                            label: 'value2'
                        }, {
                            value: '选项3',
                            label: 'value3'
                        }, {
                            value: '选项4',
                            label: 'value4'
                        }, {
                            value: '选项5',
                            label: 'value5'
                        }],
                    },
                    direction: {
                        value: "选项1",
                        options: [{
                            value: '选项1',
                            label: '>'
                        }, {
                            value: '选项2',
                            label: '<'
                        }, {
                            value: '选项3',
                            label: '='
                        }, {
                            value: '选项4',
                            label: '≥'
                        }, {
                            value: '选项5',
                            label: '≤'
                        }],
                    },
                    alarm: "0.8",
                }
            ]

        }
    },
    emits: ['closeTheWindow'],
    methods: {
        closeTheWindow() {
            this.$emit('closeTheWindow');
        }
    },
}
</script>
<style scoped>
.increase {
    position: absolute;
    width: 1200px;
    height: 600px;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    background-color: #30384b;
    border: 2px solid #4a556e;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    color: #fff;
    padding: 0 20px;
    border-bottom: 1px solid #4a556e;
}

.content {
    display: flex;
    padding: 10px 30px;

}

.left {
    width: 30%;
    display: flex;
    flex-direction: column;
}

.right {
    margin-left: 20px;
}

p {
    font-size: 14px;
    text-align: center;
    color: rgba(255, 0, 0, 0.8);
}

hr {
    width: 1000px;
    margin: 30px auto 10px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

/deep/ .el-form-item__label {
    color: rgb(230, 227, 227);
}

/deep/ .el-textarea__inner {
    resize: none;
    background-color: #272a3a;
    border: 1px solid #ccc;
}

/deep/ .el-checkbox,
/deep/ .el-radio {
    margin-right: 40px;
}

/deep/ .el-input__inner {
    background-color: #272a3a;
}

/deep/ .cell .el-input .el-input__inner {
    height: 30px;
    border: 1px solid #ccc;
}

/deep/ .right .el-table .el-table__cell {
    padding: 4px 0;

}

/deep/ .content .right .el-table td.el-table__cell div {
    width: 100%;
}

/deep/ .content .right .el-table .cell {
    padding: 0 2px;
}

/deep/ .el-table::before {
    height: 0;
}

/deep/ .el-table--border,
.el-table--group {
    border: 0;
}

/deep/ .el-table--border th.el-table__cell,
.el-table__fixed-right-patch {
    border: 0;
}

/deep/ .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
    border: 0;
}

/deep/ .el-table--border .el-table__cell,
.el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border: 0;
}</style>