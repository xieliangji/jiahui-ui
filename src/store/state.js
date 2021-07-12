// const serviceIp = "192.168.17.234"
const serviceIp = "122.51.180.68"
// const serviceIp = "localhost"
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

        sugarJMXSave: serviceDomain.concat("/sugar-test-plan/save"),
        sugarJMXQuery: serviceDomain.concat("/sugar-test-plan/query"),
        sugarJMXUpdate: serviceDomain.concat("/sugar-test-plan/update"),
        sugarJMXDelete: serviceDomain.concat("/sugar-test-plan/delete"),
        sugarJMXExecute: serviceDomain.concat("/sugar-test-plan/execute"),

        sugarAccountSingUp: serviceDomain.concat("/sugar-account/signUp"),
        sugarAccountSignIn: serviceDomain.concat("/sugar-account/signIn"),
        sugarAccountList: serviceDomain.concat("/sugar-account/all"),

        sugarProjectList: serviceDomain.concat("/sugar-project/query"),
        sugarProjectSave: serviceDomain.concat("/sugar-project/save"),
        sugarProjectUpdate: serviceDomain.concat("/sugar-project/update"),
        sugarProjectDelete: serviceDomain.concat("/sugar-project/delete"),

        sugarReportList: serviceDomain.concat("/sugar-report/query"),
        sugarReportDelete: serviceDomain.concat("/sugar-report/delete"),

        sugarFileUpload: serviceDomain.concat("/sugar-file/upload"),
        sugarFileQuery: serviceDomain.concat("/sugar-file/query"),
        sugarFileDelete: serviceDomain.concat("/sugar-file/delete"),
        sugarFileUpdate: serviceDomain.concat("/sugar-file/update"),

    }
}