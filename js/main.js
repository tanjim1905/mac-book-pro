let isCouponCodeApplied = false;

// function for Product Price
function productPrice(product, price){
    const productCost = document.getElementById(product + '-cost')
    productCost.innerText = price;
    calculateTotal()
}

// function for calculate and update total price
function calculateTotal(){
    // get elements
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = bestPrice + memoryCost + storageCost + deliveryCost;
    
    isCouponCodeApplied = false;

    const totalDiscountCost = document.getElementById('discount-total');
    totalDiscountCost.innerText = parseInt(totalCost.innerText);
}

// event listeners
// memory cost
document.getElementById('memory-one').addEventListener('click', function(){
    productPrice('memory', 0);
})

document.getElementById('memory-two').addEventListener('click', function(){
    productPrice('memory', 180);
})

// storage cost
document.getElementById('storage-one').addEventListener('click', function(){
    productPrice('storage', 0);
})

document.getElementById('storage-two').addEventListener('click', function(){
    productPrice('storage', 100);
})
document.getElementById('storage-three').addEventListener('click', function(){
    productPrice('storage', 180);
})

// shipping cost
document.getElementById('delivery-one').addEventListener('click', function(){
    productPrice('delivery', 0);
})

document.getElementById('delivery-two').addEventListener('click', function(){
    productPrice('delivery', 20);
})

// total with discount
const couponInput = document.getElementById('coupon-input');
const couponButton = document.getElementById('coupon-button');
const totalDiscountCost = document.getElementById('discount-total');

// apply coupon code button event
couponButton.addEventListener('click', function(){
    if(couponInput.value == 'stevekaku'){
        if(!isCouponCodeApplied){
            const discount = (parseInt(totalDiscountCost.innerText) * 20) / 100;
            totalDiscountCost.innerText = parseInt(totalDiscountCost.innerText) - discount;
            couponInput.value = '';
            isCouponCodeApplied = true;
        }
        
    } else{
        alert('Please Type Correct Coupon Code!');
    }
})
