// Function that is globally
function getInputValueById(id){
    const value = parseFloat(document.getElementById(id).value); 
    return value;
}
function getTextValueById(id){
    const value = parseFloat(document.getElementById(id).innerText); 
    return value;
}
// function for update main balance
function updateMainBalance(id){
    const mainBalance = getTextValueById('mainBalance');
    const donateValue = getInputValueById(id)
    // update main value
    const netBalace = mainBalance - donateValue;
    // set main Balance
    document.getElementById('mainBalance').innerText = netBalace;
}

// click for Noakhali
document.getElementById('dBtnForNoakhali').addEventListener('click',function(){
    const dNoakhali = getInputValueById('dValueForNoakhali')
    const balanceNoakhali = getTextValueById('balanceNoakhali');
    const netbalanceNoakhali = dNoakhali + balanceNoakhali;

    // update donation for Noakhali
    document.getElementById('balanceNoakhali').innerText = netbalanceNoakhali;

    // update available main balance
    updateMainBalance('dValueForNoakhali');
})

// click for Feni
document.getElementById('dBtnForFeni').addEventListener('click',function(){
    const dFeni = getInputValueById('dValueForFeni');
    const balanceFeni = getTextValueById('balanceFeni')
    const netbalanceFeni = dFeni + balanceFeni;
    const mainBalance = getTextValueById('mainBalance');
    // update donation for Feni
    document.getElementById('balanceFeni').innerText = netbalanceFeni;
    // update available main balance
    updateMainBalance('dValueForFeni');

})
// click for quota
document.getElementById('dBtnForQuota').addEventListener('click',function(){
    const dQuota = getInputValueById('dValueForQuota')
    const balanceQuota = getTextValueById('balanceQuota');
    const netbalanceQuota = dQuota + balanceQuota;
    // update donation for quota 
    document.getElementById('balanceQuota').innerText = netbalanceQuota;
    // update available main balance
    updateMainBalance('dValueForQuota');
})

// =========== Click for History Section =============


