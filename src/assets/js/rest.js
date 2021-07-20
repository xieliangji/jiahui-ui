/**
 *  后台服务接口地址
 */

const httpDomain = process.env.VUE_APP_BASEURL
const wsDomain = process.env.VUE_APP_WSURL
export default {
    sugarJMeterFunctions: httpDomain.concat("/sugar-jmeter/functions"),
    sugarJMeterExecuteFunction: httpDomain.concat("/sugar-jmeter/execute-function"),
    sugarJMeterExecuteTestPlan: httpDomain.concat("/sugar-jmeter/execute-test-plan-start"),
    sugarJMeterExecuteTestPlanStop: httpDomain.concat("/sugar-jmeter/execute-test-plan-stop"),
    sugarJMeterSampleEventWS: wsDomain.concat("/sample-event-websocket"),

    sugarJMXSave: httpDomain.concat("/sugar-test-plan/save"),
    sugarJMXQuery: httpDomain.concat("/sugar-test-plan/query"),
    sugarJMXUpdate: httpDomain.concat("/sugar-test-plan/update"),
    sugarJMXDelete: httpDomain.concat("/sugar-test-plan/delete"),
    sugarJMXExecute: httpDomain.concat("/sugar-test-plan/execute"),
    sugarJMXFetch: httpDomain.concat("/sugar-test-plan/fetch-test-plans"),

    sugarAccountSingUp: httpDomain.concat("/sugar-account/signUp"),
    sugarAccountSignIn: httpDomain.concat("/sugar-account/signIn"),
    sugarAccountList: httpDomain.concat("/sugar-account/all"),

    sugarProjectList: httpDomain.concat("/sugar-project/query"),
    sugarProjectSave: httpDomain.concat("/sugar-project/save"),
    sugarProjectUpdate: httpDomain.concat("/sugar-project/update"),
    sugarProjectDelete: httpDomain.concat("/sugar-project/delete"),
    sugarProjectFetch: httpDomain.concat("/sugar-project/fetch"),

    sugarReportList: httpDomain.concat("/sugar-report/query"),
    sugarReportDelete: httpDomain.concat("/sugar-report/delete"),
    sugarReportFetch: httpDomain.concat("/sugar-report/fetchReport"),

    sugarFileUpload: httpDomain.concat("/sugar-file/upload"),
    sugarFileQuery: httpDomain.concat("/sugar-file/query"),
    sugarFileDelete: httpDomain.concat("/sugar-file/delete"),
    sugarFileUpdate: httpDomain.concat("/sugar-file/update"),

    sugarTaskSave: httpDomain.concat("/sugar-task/save"),
    sugarTaskQuery: httpDomain.concat("/sugar-task/query"),
    sugarTaskFetch: httpDomain.concat("/sugar-task/fetch"),
    sugarTaskUpdate: httpDomain.concat("/sugar-task/update"),
    sugarTaskDelete: httpDomain.concat("/sugar-task/delete"),
    sugarTaskEnable: httpDomain.concat("/sugar-task/enable"),
    sugarTaskDisable: httpDomain.concat("/sugar-task/disable"),

    sugarTestPlanFileUpload: httpDomain.concat("/sugar-test-file/upload"),

}