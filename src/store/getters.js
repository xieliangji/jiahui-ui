export default {
    testElementId: state => () => {
        return state.testElementId++
    },


    /**
     * 返回值作为新的jmeter元素组件的ID
     * @param state
     * @returns {function(): number}
     */
    jmeterElementId: state => () => {
        return state.jmeterElementId++
    }
}