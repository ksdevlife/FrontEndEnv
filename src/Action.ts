export const MSGS = {
    TEST: 'TEST',
    INPUT_LOCATION: 'INPUT_LOCATION',
    ADD_LOCATION: 'ADD_LOCATION',
    DELETE_LOCATION: 'DELETE_LOCATION'
}
export class ActionMessage {
    type: string;
    payload: any;
}
export function testMsg(input: string) {
    const msg = new ActionMessage();
    return {...msg, type: MSGS.TEST, payload: input};
}
export function inputLocationMsg(location: string) {
    const msg = new ActionMessage();
    return {...msg, type: MSGS.INPUT_LOCATION, payload: location};
}
export function addlocationMsg(location: string) {
    const msg = new ActionMessage();
    return {...msg, type: MSGS.ADD_LOCATION, payload: location};
}
export function deletelocationMsg(id: number) {
    const msg = new ActionMessage();
    return {...msg, type: MSGS.DELETE_LOCATION, payload: id};
}
