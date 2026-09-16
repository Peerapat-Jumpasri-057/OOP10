export {};
class Product {
    constructor(public name: string,public price: number,public quantity: number) {}
    getSubtotal(): number {
        return this.price * this.quantity;
    }
}
class Order {
    private products: Product[] = [];
    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`${product.name}: ${product.price} บาท x ${product.quantity} ชิ้น = ${product.getSubtotal()} บาท`);
    }
    calculateTotal(): number {
        let total = 0;
        for (const p of this.products) {
            total += p.getSubtotal();
        }
        return total;
    }
    calculateDiscount(percent: number): number {
        const total = this.calculateTotal();
        return total * percent / 100;
    }
    calculateNetTotal(percent: number): number {
        const total = this.calculateTotal();
        const discount = this.calculateDiscount(percent);
        return total - discount;
    }
}
const order1 = new Order();
const prod1 = new Product("Laptop", 25000, 2);
const prod2 = new Product("Mouse", 200, 10);
const prod3 = new Product("Scanner", 12000, 3);
order1.addProduct(prod1);
order1.addProduct(prod2);
order1.addProduct(prod3);
const disc = 10;
console.log(`รวมเงินทั้งหมด ${order1.calculateTotal()} บาท`);
console.log(`ส่วนลด ${disc}% เป็นเงิน ${order1.calculateDiscount(disc)} บาท`);
console.log(`ชำระเงินสุทธิ ${order1.calculateNetTotal(disc)} บาท`);