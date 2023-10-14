export const numbers = [1, 2, 3, 4];

export class Student {
    constructor(name, KoreanScore, englishScore, mathScore){
        this.name = name
        this.KoreanScore = KoreanScore
        this.englishScore = englishScore
        this.mathScore = mathScore
    }
};

const student1 = new Student('홍길동', 100, 80, 40);
const student2 = new Student('이견우', 50, 60, 20);
const student3 = new Student('홍견우', 90, 70, 80);

export const students = [student1, student2, student3];

export const fruits = ['사과', '딸기', '수박', '배', '사과'];

export const fruits1 = ['사과', '사과', '수박', '사과', '사과'];