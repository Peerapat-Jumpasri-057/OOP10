export {};
class Student{
    constructor(private name: string, private major: string){}
    getStudentInfo(): string{
        return `นักศึกษา ชื่อ ${this.name} สาขา ${this.major}`;
    }
}

class Teacher{
    constructor(private name: string, private faculty: string){}
    teach(student: Student): void{
        console.log(`อาจารย์ ${this.name} ขณะ ${this.faculty} สอน ${student.getStudentInfo()}`);
    }
}

const s1 = new Student("อภิญญา","วิทยาการคอมพิวเตอร์");
const s2 = new Student("อภิสิทธิ์","วิศวกรรมซอฟต์แวร์");
const t1 = new Teacher("อภิวัฒน์","วิทยาศาสตร์และเทคโนโลยี");
const t2 = new Teacher("วันเพ็ญ","วิทยาการจัดการ");
t1.teach(s1);
t1.teach(s2);
t2.teach(s1);
t2.teach(s2);