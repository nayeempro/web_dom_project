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

    // history section
     const historyItem = document.createElement("div");
     historyItem.className = 'border-2 border-gray-300 rounded-lg p-1';
     historyItem.innerHTML = `
     <p class="text-xl font-semibold">${dNoakhali} Taka is donated for Noakhali</p>
     <p class="text-xl font-normal opacity-70">Date: ${new Date()}</p>`;
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);

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
const historyBtn = document.getElementById('historyBtn')
const donateBtn = document.getElementById('donationBtn')

historyBtn.addEventListener('click',function(){

    historyBtn.classList.add('py-3', 'px-4', 'rounded-lg', 'bg-[#B4F461]', 'text-xl', 'font-semibold', 'mr-3');
    historyBtn.classList.remove('opacity-70')
    donateBtn.classList.remove('bg-[#B4F461]');
    donateBtn.classList.add('border-2', 'border-gray-300','opacity-70');

    // donate section hide 
    document.getElementById('donate-section').classList.add('hidden');
})


