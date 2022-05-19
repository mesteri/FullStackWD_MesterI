var budgetForm = document.querySelector('#budgetForm');

var currentTime = new Date().toLocaleString();


//  setting the Firebase database values based on our form:
budgetForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    db.collection('budget').doc().set({
        entryDate: currentTime,
        date: budgetForm.date.value,
        housing: budgetForm.housing.value,
        councilTax: budgetForm.councilTax.value,
        serviceCharges:budgetForm.serviceCharges.value,
        fuelBill: budgetForm.fuelBill.value,
        waterBill: budgetForm.waterBill.value,
        TVLicense: budgetForm.TVLicense.value,
        phoneBill: budgetForm.phoneBill.value,
        insuranceFee: budgetForm.insuranceFee.value,
        groceries: budgetForm.groceries.value,
        clothing: budgetForm.clothing.value,
        petrolPrice: budgetForm.petrolPrice.value,
        otherFee: budgetForm.otherFee.value,

        salary: budgetForm.salary.value,
        earnedProfits: budgetForm.earnedProfits.value,
        investments: budgetForm.investments.value,
        pension: budgetForm.pension.value,
        benefits: budgetForm.benefits.value,
        otherIncome: budgetForm.otherIncome.value,
     
        }).then(()=>{
        location.reload();
    })
});

    // retrieving the database values for the last entry and inserting these in our table:

    db.collection('budget').orderBy('entryDate','desc').limit(1).get().then((querysnapshot) => {
        querysnapshot.forEach((doc) =>{
            
            housing.innerHTML = doc.data().housing;
            councilTax.innerHTML = doc.data().councilTax;
            serviceCharges.innerHTML = doc.data().serviceCharges;
            fuelBill.innerHTML = doc.data().fuelBill;
            waterBill.innerHTML = doc.data().waterBill;
            TVLicense.innerHTML = doc.data().TVLicense;
            phoneBill.innerHTML = doc.data().phoneBill;
            insuranceFee.innerHTML = doc.data().insuranceFee;
            groceries.innerHTML = doc.data().groceries;
            clothing.innerHTML = doc.data().clothing;
            petrolPrice.innerHTML = doc.data().petrolPrice;
            otherFee.innerHTML = doc.data().otherFee;

            salary.innerHTML = doc.data().salary;
            earnedProfits.innerHTML = doc.data().earnedProfits;
            investments.innerHTML = doc.data().investments;
            pension.innerHTML = doc.data().pension;
            benefits.innerHTML = doc.data().benefits;
            otherIncome.innerHTML = doc.data().otherIncome;
            
            // calculation to check whether we save or whether our budget has a shortfall:

            result = (Number(doc.data().salary) + Number(doc.data().earnedProfits) + Number(doc.data().pension) + Number(doc.data().benefits) + Number(doc.data().otherIncome) + Number(doc.data().investments)) - (Number(doc.data().housing) + Number(doc.data().councilTax) + Number(doc.data().serviceCharges) + Number(doc.data().fuelBill) + Number(doc.data().waterBill) + Number(doc.data().TVLicense) + Number(doc.data().phoneBill) + Number(doc.data().insuranceFee) + Number(doc.data().groceries) + Number(doc.data().clothing) + Number(doc.data().petrolPrice) + Number(doc.data().otherFee));
            if (result > 0) {
                document.getElementById("saving").innerHTML = result;
                document.getElementById("deficit").innerHTML = 0;
            } else if (result < 0){
                document.getElementById("saving").innerHTML = 0;
                document.getElementById("deficit").innerHTML = result;
            } else {
                document.getElementById("saving").innerHTML = 0;
                document.getElementById("deficit").innerHTML = 0;
            }

        })
    })
