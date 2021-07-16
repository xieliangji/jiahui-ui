export default {
    sugarAccount: JSON.parse(sessionStorage.getItem('sugarAccount')), // as current signed in user/account.

    testPlan: undefined,
    currentTestElement: undefined,
    testElementId: 0,
    executorId: undefined,


    jmeterElementId: 0, // as new jmeter element's id.
    jmeterTestPlan: undefined, // as test plan tree root element.
    jmeterCurrentElement: undefined, // as current setting/editing element.

    jmeterExecutorId: undefined, // as using backend jmeter engine's id.
}