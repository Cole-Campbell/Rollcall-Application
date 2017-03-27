export class Student {
  constructor(
    public name: string,
    public email: string,
    public studentId: any,
    public classListId?: number[]
  ) {}
}
