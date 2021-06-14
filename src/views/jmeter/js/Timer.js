import {AbstractJSR223, AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function ConstantTimer(){
    AbstractTestElement.call(this, TestElements.ConstantTimer)
    this.delay = 300
}


export function UniformRandomTimer(){
    AbstractTestElement.call(this, TestElements.UniformRandomTimer)
    this.delay = 0
    this.range = 100.0
}


export function PreciseThroughputTimer(){
    AbstractTestElement.call(this, TestElements.PreciseThroughputTimer)
    this.allowedThroughputSurplus = 1.0
    this.exactLimit = 10000
    this.throughput = 100.0
    this.throughputPeriod = 3600
    this.duraton = 3600
    this.batchSize = 1
    this.batchThreadDelay = 0
    this.randomSeed = 0
}


export function ConstantThroughputTimer(){
    AbstractTestElement.call(this, TestElements.ConstantThroughputTimer)
    this.calcMode = 0
    this.throughput = 0.0
}


export function JSR223Timer(){
    AbstractJSR223.call(this, TestElements.JSR223Timer)
}


export function SyncTimer(){
    AbstractTestElement.call(this, TestElements.SyncTimer)
    this.groupSize = 0
    this.timeoutInMs = 0
}


export function PoissonRandomTimer(){
    AbstractTestElement.call(this, TestElements.PoissonRandomTimer)
    this.delay = 300
    this.range = 100
}


export function GaussianRandomTimer(){
    AbstractTestElement.call(this, TestElements.GaussianRandomTimer)
    this.delay = 300
    this.range = 100.0
}
