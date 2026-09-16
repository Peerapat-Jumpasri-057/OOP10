export{};
class CPU{
    constructor(private brand: string, private cors: number){}
    process():void{
        console.log(`CPU ${this.brand} ${this.cors} cores กำลังประมวลผล`);
    }
    showInfoCore():void{
        console.log(`CPU Info: Brand - ${this.brand}, Cores - ${this.cors}`);
    }
}

class Ram{
    constructor(private ram: number){}
    load():void{
        console.log(`Ram กำลังโหลดข้อมูล ${this.ram} GB`);
    }
    showInfo():void{
        console.log(`Ram info: ความจุ - ${this.ram} GB`);
    }
}

class Storage{
    constructor(private store: number){}
    load():void{
        console.log(`Storage กำลังโหลดข้อมูลความจุ ${this.store} GB`)
    }
    showInfo():void{
        console.log(`Storage info: ความจุ - ${this.store} GB`)
    }
}

class Computer{
    private cpu : CPU;
    private ram : Ram;
    private store : Storage;
    constructor(cpu: string, cors: number, rcapacity: number, store: number){
        this.cpu = new CPU(cpu, cors);
        this.ram = new Ram(rcapacity);
        this.store = new Storage(store);
    }
    boot():void{
        this.cpu.process();
        this.ram.load();
        console.log(`Computer บูทเรียบร้อยแล้ว พร้อมทำงานได้`);
    }
    showComputerInfo():void{
        console.log("Computer Infomation: ");
        this.cpu.showInfoCore();
        this.ram.showInfo();
        this.store.showInfo();
    }
}

const computer1 = new Computer("intel", 8, 16, 512);
computer1.boot();
computer1.showComputerInfo();