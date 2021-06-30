const serviceIp = "192.168.17.234"
const servicePort = 8512
const serviceDomain = `http://${serviceIp}:${servicePort}`
const serviceWebSocketDomain = `ws://${serviceIp}:${servicePort}`

export default {
    sugarAccount: undefined,


    testPlan: undefined,
    currentTestElement: undefined,
    testElementId: 0,
    executorId: undefined,


    restApi: {
        sugarJMeterFunctions: serviceDomain.concat("/sugar-jmeter/functions"),
        sugarJMeterExecuteFunction: serviceDomain.concat("/sugar-jmeter/execute-function"),
        sugarJMeterExecuteTestPlan: serviceDomain.concat("/sugar-jmeter/execute-test-plan-start"),
        sugarJMeterExecuteTestPlanStop: serviceDomain.concat("/sugar-jmeter/execute-test-plan-stop"),
        sugarJMeterSampleEventWS: serviceWebSocketDomain.concat("/sample-event-websocket"),

        sugarAccountSingUp: serviceDomain.concat("/sugar-account/signUp"),
        sugarAccountSignIn: serviceDomain.concat("/sugar-account/signIn"),
        sugarAccountList: serviceDomain.concat("/sugar-account/all"),

        sugarProjectList: serviceDomain.concat("/sugar-project/query"),
        sugarProjectSave: serviceDomain.concat("/sugar-project/save"),
        sugarProjectUpdate: serviceDomain.concat("/sugar-project/update"),
        sugarProjectDelete: serviceDomain.concat("/sugar-project/delete"),


    }
}