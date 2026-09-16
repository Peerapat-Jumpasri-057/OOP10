export {};
class MenuItem {
    constructor(private _price: number, private _name: string, private _category: string) {}
    get price(): number {
        return this._price;
    }
    get name(): string {
        return this._name;
    }
    get category(): string {
        return this._category;
    }
}
class Restaurant {
    private menu: MenuItem[];
    constructor(menu: MenuItem[]) {this.menu = menu;}
}
class Order {
    private items: { item: MenuItem; quantity: number }[] = [];
    addItem(item: MenuItem, quantity: number): void {
        this.items.push({
            item: item,
            quantity: quantity
        });
    }
    calculateTotal(): number {
        let total = 0;
        for (const orderItem of this.items) {
            total += orderItem.item.price * orderItem.quantity;
        }
        return total;
    }
    calculateDiscount(): number {
        const total = this.calculateTotal();
        if (total > 700) {
            return total * 0.02;
        } else if (total > 500) {
            return total * 0.01;
        }
        return 0;
    }
    calculateNetPrice(): number {
        return this.calculateTotal() - this.calculateDiscount();
    }
    showOrder(): void {
        console.log("Order Details:");
        for (const orderItem of this.items) {
            const subtotal =
                orderItem.item.price * orderItem.quantity;
            console.log(
                `${orderItem.quantity} x ${orderItem.item.name} - ${orderItem.item.price.toFixed(2)} - ${orderItem.item.category} = $${subtotal.toFixed(2)}`
            );
        }
        const total = this.calculateTotal();
        const discount = this.calculateDiscount();
        const netPrice = this.calculateNetPrice();
        console.log("------------------------------");
        console.log(`Total: $${total.toFixed(2)}`);
        const discountPercent =
            total > 700 ? 2 : total > 500 ? 1 : 0;
        console.log(
            `Net Price (${discountPercent}% Disc): $${netPrice.toFixed(2)}`
        );
    }
}
class Customer {
    constructor(private name: string) {}
    placeOrder(order: Order): void {
        console.log(`${this.name} placed an order for:`);
        order.showOrder();
    }
}
const pizza = new MenuItem(250,"Pizza","Main Course");
const salad = new MenuItem(150,"Salad","Appetizer");
const restaurant = new Restaurant([pizza,salad]);
const order1 = new Order();
order1.addItem(pizza, 2);
order1.addItem(salad, 1);
const customer1 = new Customer("Alice");
customer1.placeOrder(order1);