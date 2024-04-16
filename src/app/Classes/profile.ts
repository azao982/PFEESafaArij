export class Profile {
  public nomProfil: string;

  constructor(
    public id: number,
    private _code: number,
  ){
    this.setCode(_code);
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
    this.setCode(value);
  }

  private setCode(code: number): void {
    switch (code) {
      case 100:
        this.nomProfil = 'admin';
        break;
      case 200:
        this.nomProfil = 'consommateur';
        break;
      case 300:
        this.nomProfil = 'validateur1';
        break;
      case 400:
        this.nomProfil = 'validateur2';
        break;
      default:
        this.nomProfil = 'inconnu';
        break;
    }
  }
}
