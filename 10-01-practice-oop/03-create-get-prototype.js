

class Mobile{
    constructor(name, price, version){
        this.name = name
        this.price = price
        this.version = version
        this.info = function(){
            console.log(`The movile company name is ${this.name}\n Price: ${this.price} \nVersion${this.version}`)
        }
    }
    priceCheck(){
        const msg = this.price > 10000?'Price is morethan 10K': 'Price is lessthan 10k'
        console.log(msg)
    }
}

Mobile.prototype.specification = function(){
    console.log('specification printed')
}

const samsung = new Mobile('Sumsung', 12000, 'v4.5.2')

console.log(Mobile.propertyIsEnumerable('specification'))
console.log(Mobile.propertyIsEnumerable('priceCheck'))

console.log(Object.getPrototypeOf(samsung));


// console.log(samsung.propertyIsEnumerable('version'))

// console.log(samsung)
// console.log(samsung.info())
// console.log(samsung.priceCheck())
// console.log(samsung.__proto__)
// console.log(Object.getPrototypeOf(samsung))

// console.log(Object.getOwnPropertyDescriptor(Mobile.prototype, 'specification'))

