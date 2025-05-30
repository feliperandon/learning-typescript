// Type Assertion
const productName: any = "Hat";

let itemId = productName as string;
// let itemId2 = <string>productName

let res: any = "100";
let numRes: number = (res as string).length;
