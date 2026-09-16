export {};
class Patient {
    constructor(private id: string, private name: string, private age: number) {}
    showInfo(): string {
        return `ผู้ป่วย รหัส: ${this.id}, ชื่อ: ${this.name}, อายุ: ${this.age}`;
    }
}
class Doctor {
    constructor(public id: string, public name: string, public specialty: string) {}
    showInfo(): string {
        return `แพทย์ รหัส: ${this.id} ชื่อ: ${this.name} ความเชี่ยวชาญ: Specialty: ${this.specialty}`;
    }
    examine(patient: Patient): string {
        return `${this.showInfo()} ตรวจผู้ป่วย ${patient.showInfo()}`;
    }
    diagnose(patient: Patient, diagnosis: string): void {
        console.log (`แพทย์: ${this.name} วินิจฉัย ${patient.showInfo()} เป็นโรค ${diagnosis}`);
    }
    calculateTreatmentCost(patient: Patient, fee: number, med: number): void {
        console.log(`แพทย์: ${this.name} รักษา ${patient.showInfo()} \nค่ารักษา ${fee} ค่ายา ${med} บาท`);
        console.log(`รวม: ${fee + med}`);
    }
}
const p1 = new Patient(`P101`, `แก้วตา`, 25);
const p2 = new Patient(`P102`, `สำราญ`, 50);
const d1 = new Doctor(`D001`, `วชิระ`, `หัวใจ`);
const d2 = new Doctor(`D002`, `อภิญญา`, `จักษุ`);
d1.examine(p1);
d1.examine(p2);
d2.examine(p2);
d1.diagnose(p1, "หัวใจ");
d2.diagnose(p2, "ต้อกระจก");
d1.calculateTreatmentCost(p1,500,280);
d2.calculateTreatmentCost(p2,700,350);