document.getElementById('btn-deposite').addEventListener('click',function (){

    //for get new deposite(depositefield)
 const newdepositeammount=getinputfieldvalueById('deposite');
//  for get previous deposite(deposite store)
const previousdepositeammount= getElementValuebyid ('depositestorefield');
// console.log(newdepositeammount,previousdepositeammount);
const newdepositetotal= newdepositeammount+previousdepositeammount;
settextelementvalue ('depositestorefield',newdepositetotal);

//get previous total balance
const previousbalancetotal=getElementValuebyid ('balancefield');
const newbalancetotal=previousbalancetotal+newdepositeammount;
settextelementvalue ('balancefield',newbalancetotal);

})