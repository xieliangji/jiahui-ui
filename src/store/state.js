const serviceDomain = "http://192.168.17.234:8512"

export default {
    sugarAccount: undefined,
    isLogin: false,


    testPlan: undefined,
    currentTestElement: undefined,
    testElementId: 0,

    restApi: {
        sugarJMeterFunctions: serviceDomain.concat("/sugar-jmeter/functions"),
        sugarJMeterExecuteFunction: serviceDomain.concat("/sugar-jmeter/execute-function")
    }
}