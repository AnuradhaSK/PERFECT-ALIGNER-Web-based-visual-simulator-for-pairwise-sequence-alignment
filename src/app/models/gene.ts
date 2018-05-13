export class Gene {
  public id: string;
  public sequence: string;

  // create genes. It has two attributes Id and a sequence
  constructor(id: string, sequence: string) {
    this.id = id;
    this.sequence = sequence;
  }
}
