<template>
    <el-row>
        <el-col>
            <h5 class="mb-2">TMS 交易系统管理</h5>
            <el-menu unique-opened="true" router="true" background-color="#293042" text-color="#fff">
                <el-submenu :index="firstMenuItem.index" v-for="firstMenuItem in menu" :key="firstMenuItem.index">
                    <template slot="title">
                        <i :class="`el-icon-${firstMenuItem.icon}`"></i>
                        <span>{{ firstMenuItem.title }}</span>
                    </template>
                    <el-menu-item :index="secondMenuItem.index" v-for="secondMenuItem in firstMenuItem.subs" :key="secondMenuItem.index" :route="secondMenuItem.route">{{
                        secondMenuItem.title }}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    index: '/',
                    title: '账户管理',
                    icon: 'location',
                    subs: [
                        {
                            index: '/',
                            title: '交易通道管理账户',
                        },
                        {
                            index: '1-2',
                            title: '投资账户管理',
                        },
                        {
                            index: '1-3',
                            title: '产品管理',
                        },
                        {
                            index: '1-4',
                            title: '交易组管理',
                        },
                        {
                            index: '1-5',
                            title: '资金调拨',
                        },
                        {
                            index: '1-6',
                            title: '持仓划转',
                        },
                        {
                            index: '1-7',
                            title: '外部投顾',
                        },
                        {
                            index: '1-8',
                            title: '同步策略',
                        },
                    ],
                },
                {
                    index: '2',
                    title: '风控管理',
                    icon: 'menu',
                    subs: [
                        {
                            index: '2-1',
                            title: '交易所风控设置',
                        },
                        {
                            index: '2-2',
                            title: '交易通道风控设置',
                        },
                        {
                            index: '2-3',
                            title: '产品风控设置',
                        },
                        {
                            index: '2-4',
                            title: '交易组风控设置',
                        },
                        {
                            index: '2-5',
                            title: '风险日志查询',
                        },
                        {
                            index: '2-6',
                            title: '流程审批策略',
                        },
                        {
                            index: '2-7',
                            title: '流程审批',
                        },
                        {
                            index: '2-8',
                            title: '风险监控',
                        },
                    ],
                },
                {
                    index: '3',
                    title: '资产分析',
                    icon: 'document',
                    subs: [
                        {
                            index: '3-1',
                            title: '资产分析报告',
                        },
                        {
                            index: '3-2',
                            title: '资金查询',
                        },
                        {
                            index: '/chicang',
                            title: '持仓查询',
                        },
                        {
                            index: '3-4',
                            title: '委托查询',
                        },
                        {
                            index: '3-5',
                            title: '成交查询',
                        },
                        {
                            index: '3-6',
                            title: '条件单/损盈单查询',
                        },
                    ],
                },
                {
                    index: '4',
                    title: '系统结算',
                    icon: 'setting',
                    subs: [
                        {
                            index: '4-1',
                            title: '结算账单',
                        },
                        {
                            index: '4-2',
                            title: '差异数据处理',
                        },
                        {
                            index: '4-3',
                            title: '出入金流水',
                        }
                    ],
                }
                ,
                {
                    index: '5',
                    title: '费率管理',
                    icon: 'setting',
                    subs: [
                        {
                            index: '5-1',
                            title: '交易通道保证金',
                        },
                        {
                            index: '5-2',
                            title: '交易通道手续费',
                        },
                        {
                            index: '5-3',
                            title: '投资账户保证金',
                        },
                        {
                            index: '5-4',
                            title: '投资账户手续费',
                        },
                    ],
                }
                ,
                {
                    index: '6',
                    title: '系统管理',
                    icon: 'setting',
                    subs: [
                        {
                            index: '6-1',
                            title: '数据权限管理',
                        },
                        {
                            index: '6-2',
                            title: '登录白名单管理',
                        },
                        {
                            index: '6-3',
                            title: '操作日志查询',
                        },
                        {
                            index: '6-4',
                            title: '系统日志查询',
                        },
                        {
                            index: '6-5',
                            title: '登录日志查询',
                        },
                        {
                            index: '6-6',
                            title: '系统运行监控',
                        },
                        {
                            index: '6-7',
                            title: '板块管理',
                        },
                        {
                            index: '6-8',
                            title: '节假日管理',
                        },
                    ],
                }
            ]
        }
    },

}
</script>

<style scoped>
h5 {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
}

:deep(.el-menu) {
    background-color: #293042;
    border-right: 0;
}

:deep(.el-sub-menu__title:hover) {
    background-color: #293042;
}</style>