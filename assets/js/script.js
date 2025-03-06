import { moneyRenderer } from "./moneyhead-component/moneyRender.js";
import { setMoney } from "./moneyhead-component/moneyCalc.js";

init()
function init(){
    moneyRenderer(setMoney());
    

}