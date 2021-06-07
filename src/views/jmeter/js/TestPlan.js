import {AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function TestPlan(){
    AbstractTestElement.call(this, TestElements.TestPlan)
    this.arguments = [] // 用户自定义变量
    this.serializeThreadgroups = false // 是否独立运行每个线程组
    this.teardownOnShutdown = true // 主线程结束后运行tearDown线程组
    this.functionalMode = false // 函数测试模式
    this.userDefineClasspath = '' // 添加目录或jar包到classpath
}