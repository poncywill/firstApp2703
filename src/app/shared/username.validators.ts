import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control:AbstractControl):{[s:string]:any}|null{
// const forbidden=/admin/.test(control.value)
const forbidden=['admin','user']
if(forbidden.includes(control.value)){
    return {forbidden:{value:control.value}}
}
else return null;

}