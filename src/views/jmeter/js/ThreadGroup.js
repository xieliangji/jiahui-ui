import {AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

function AbstractThreadGroup(element){
    AbstractTestElement.call(this, element)
    this.onSampleError = 'continue' // string 取样器出错后执行动作 continue | startnextloop | stopthread | stoptest | stoptestnow
    this.numThreads = '1'     // string 线程数
    this.rampTime = '1'       // string ramp-up时间
    this.continueForever = false // bool 是否永远   [LoopController]
    this.loops = '1' // string  循环次数            [LoopController]
    this.sameUserOnNextIteration = true // bool 每次迭代使用同一用户
    this.scheduler = false // bool 调度器
    this.duration = '' // string 持续时间
    this.delay = '' // string 启动延迟
}

/**
 * 线程组
 * @constructor
 */
export function ThreadGroup(){
    AbstractThreadGroup.call(this, TestElements.ThreadGroup)
    this.delayedStart = false // bool 延迟创建线程直至需要 （仅线程组有）
}


/**
 * Setup线程组
 * @constructor
 */
export function SetupThreadGroup(){
    AbstractThreadGroup.call(this, TestElements.SetupThreadGroup)
}


/**
 * Teardown线程组
 * @constructor
 */
export function PostThreadGroup(){
    AbstractThreadGroup.call(this, TestElements.PostThreadGroup)
}