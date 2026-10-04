
const balance = 160;
const isLoggeedIn = false

// if(isLoggeedIn){console.log('Valid user');}
// if(balance < 1000){console.log('Your balance is < 1000');}
// if(balance > 1000){console.log('Your balance is > 1000');}
// if(balance >= 1000){console.log('Your balance is > 1000');}
// if(balance >= 1000){console.log('Your balance is > 1000');}
// if(!isLoggeedIn){console.log('Invalid user');}
// if(balance !== 600){console.log('Your balance is not 600');}

// if(isLoggeedIn && balance == 500){console.log('valid user having 500 balance')}
// if(isLoggeedIn || balance == 500){console.log('invalid user having 500 balance')}


if(balance <= 500){
    console.log(`Your balce is less then 500`);
}else if(balance <= 1000){
    console.log(`Your balance is less than 1000 and above 500`);
}else{
    console.log(`Your balance is gater than 1000`)
}