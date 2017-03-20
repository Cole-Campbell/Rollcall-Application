export class Student {
  constructor(
    public name: string,
    public email: string,
    public archive: boolean,
    public classID?: number[]
  ){}
}
