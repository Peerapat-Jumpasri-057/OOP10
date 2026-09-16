class Engine{
    constructor(public type: string){}
    start():void{
        console.log(`เครื่องยนตร์ ${this.type} เริ่มทำงาน`);
    }
    stop():void{
        console.log(`เครื่องยนตร์ ${this.type} หยุดทำงาน`);
    }
}
class Battery{
    constructor(private capacity: number){}
        charge():void{
            this.showStatus();
            this.capacity = 100 ;
            console.log(`ชาร์จเบตเตอรี่เรียบร้อยแล้ว ขณะนี้มีแบตเตอรี่ ${this.capacity}`);
        }
        showStatus(){
            console.log(`ขณะนี้มีแบตเตอรี่อยู่ ${this.capacity}`);
        }
}
class Car{
    private engine: Engine;
    private battery: Battery;
    constructor(type:string,capacity:number){
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startCar():void{
        this.engine.start();
    }
    stopCar():void{
        this.engine.stop();
    }
    showCarInfo():void{
        console.log(`ข้อมูลของรถ: เครื่องยนต์ชนิด ${this.engine.type}`);
        this.battery.showStatus();
    }
    chargeBattery():void{
        this.battery.charge();
    }
}

const car1 = new Car("V6",10);
car1.startCar();
car1.showCarInfo();
car1.chargeBattery();
car1.stopCar();