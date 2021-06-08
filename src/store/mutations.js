import {TestPlan} from "@/views/jmeter/js/TestPlan";

export default {
    setSugarAccount: (state, payload) => {
        state.sugarAccount = payload
        state.isLogin = true
    },

    /**
     * 初始化测试计划
     * @param state
     */
    initTestPlan: state => {
        state.testPlan = new TestPlan()
        state.currentTestElement = state.testPlan
    },

    /**
     * 设置当前测试计划节点元素
     * @param state
     * @param jmeterTestElement
     */
    setCurrentTestElement: (state, jmeterTestElement) => {
        state.currentTestElement = jmeterTestElement
    }
}