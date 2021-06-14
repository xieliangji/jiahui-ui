export default {
    testElementId: state => () => {
        return state.testElementId++
    }
}