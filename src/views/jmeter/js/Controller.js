import {AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function IfController(){
    AbstractTestElement.call(this, TestElements.IfController)
    this.condition = '' // string Expression
    this.useExpression = true // bool Interpret Condition as Variable Expression?
    this.evaluateAll = false // bool Evaluate for all children
}