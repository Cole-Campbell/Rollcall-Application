export class Group {
  constructor(
    public name: string,
    public owner: string,
    public archive: boolean,
    public classId: string[]
  ) {}
}
