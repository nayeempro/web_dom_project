// Function that is globally
function getInputValueById(id){
    let value = document.getElementById(id).value;
    // parseFloat give 9kk ---> 9 so it's a problem
    if(isNaN(value) === false){
        value = parseFloat(value);
    }
    
    if(isNaN(value) || value<=0) {
        //alert("Invalid Amount");
        return 'Invalid';
    }else{
        return value;
    }
    
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
    if(netBalace < 0 ){
        alert("Balance not available")
    }else{
        // set main Balance
      document.getElementById('mainBalance').innerText = netBalace;
    }
    
}

//global function for history section

function updateHistory(dtitleforlocation,dvalue){
    const historyItem = document.createElement("div");
     historyItem.className = 'border-2 border-gray-300 rounded-lg p-2 mb-4';
     const historyTitle = document.getElementById(dtitleforlocation).innerText;
     
     historyItem.innerHTML = `
     <p class="text-xl font-semibold">${dvalue} Taka is donated for ${historyTitle}</p>
     <p class="text-xl font-normal opacity-70">Date: ${new Date()}</p>`;
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);

}
// global function for popup modal

function modalOpen(){
    const modal = document.getElementById('modal-click');
    const closeModalBtn = document.getElementById('closeModalBtn');
    modal.showModal();
    closeModalBtn.addEventListener('click', function(){
        modal.close();
      });
}


// click for Noakhali
document.getElementById('dBtnForNoakhali').addEventListener('click',function(){
    const dNoakhali = getInputValueById('dValueForNoakhali');
    const balanceNoakhali = getTextValueById('balanceNoakhali');
    console.log("This for noakhali",dNoakhali,balanceNoakhali);
    if (dNoakhali !== 'Invalid'){
        const netbalanceNoakhali = dNoakhali + balanceNoakhali;

    // update donation for Noakhali
    document.getElementById('balanceNoakhali').innerText = netbalanceNoakhali;

    // update available main balance
    updateMainBalance('dValueForNoakhali');
    // update history
    updateHistory('donate-title-noakhali',dNoakhali);

    // model open
    modalOpen();
    }else{
        alert("Invalid Amount");
    }
    

})

// click for Feni
document.getElementById('dBtnForFeni').addEventListener('click',function(){
    const dFeni = getInputValueById('dValueForFeni');
    const balanceFeni = getTextValueById('balanceFeni');
    console.log("This for feni",dFeni,balanceFeni)
    if( dFeni !== 'Invalid'){
    const netbalanceFeni = dFeni + balanceFeni;
    //const mainBalance = getTextValueById('mainBalance');
    // update donation for Feni
    document.getElementById('balanceFeni').innerText = netbalanceFeni;
    // update available main balance
    updateMainBalance('dValueForFeni');
    // update historydonate-title-noakhali
    updateHistory('donate-title-feni',dFeni);
        // model open
        modalOpen();
    }else{
        alert("Invalid Amount");
    }

})
// click for quota
document.getElementById('dBtnForQuota').addEventListener('click',function(){
    const dQuota = getInputValueById('dValueForQuota')
    const balanceQuota = getTextValueById('balanceQuota');
    console.log("This for quata",dQuota,balanceQuota)

    if(dQuota !== 'Invalid'){
    const netbalanceQuota = dQuota + balanceQuota;
    // update donation for quota 
    document.getElementById('balanceQuota').innerText = netbalanceQuota;
    // update available main balance
    updateMainBalance('dValueForQuota');
    // update historydonate-title-noakhali
    updateHistory('donate-title-quota',dQuota);
        // model open
        modalOpen();
    }else{
        alert("Invalid Amount");
    }
})

// =========== Click for History Button =============
const historyBtn = document.getElementById('historyBtn')
const donateBtn = document.getElementById('donationBtn')

historyBtn.addEventListener('click',function(){

    historyBtn.classList.add('py-3', 'px-4', 'rounded-lg', 'bg-[#B4F461]', 'text-xl', 'font-semibold', 'mr-3');
    historyBtn.classList.remove('opacity-70')
    donateBtn.classList.remove('bg-[#B4F461]');
    donateBtn.classList.add('border-2', 'border-gray-300','opacity-70');

    // donate section hide 
    document.getElementById('donate-section').classList.add('hidden');
    // show the by default history section
    document.getElementById('history-section').classList.remove('hidden');
})

// =========== Click for Donate Button =============
donateBtn.addEventListener('click',function(){
    donateBtn.classList.add('py-3', 'px-4', 'rounded-lg', 'bg-[#B4F461]', 'text-xl', 'font-semibold', 'mr-3');
    donateBtn.classList.remove('opacity-70')
    historyBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('border-2', 'border-gray-300','opacity-70');

    // show the by default history section
    document.getElementById('history-section').classList.add('hidden'); 
    // donate section hide 
    document.getElementById('donate-section').classList.remove('hidden');
    
})


