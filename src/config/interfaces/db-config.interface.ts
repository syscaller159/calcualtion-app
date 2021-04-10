
export default interface DbConfigInterface {
  readonly type: 'postgres';
  readonly host: string;
  readonly port: number;
  readonly database: string;
  readonly username: string;
  readonly password: string;
  readonly synchronize: boolean;
}
