document.getElementById('btn-withdraw').addEventListener('click',function(){

    //get new withdraw
   const  newwithdrawammount=getinputfieldvalueById('withdrawfield');
   //get previous withdraw
   const previouswithdrawammount= getElementValuebyid ('withdrawstorefield')

   const newwithdrawtotal= previouswithdrawammount+newwithdrawammount;

    // value set
    settextelementvalue ('withdrawstorefield',newwithdrawtotal);

    // total balance
    const previoustotalbalance=getElementValuebyid ('balancefield');
    const newtotalbalance=previoustotalbalance-newwithdrawammount;
    
    settextelementvalue ('balancefield',newtotalbalance);
}) 