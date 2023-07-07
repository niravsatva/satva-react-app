import { ResponseStatus } from '../interfaces/enum';

export class commonResponse {
  public ResponseStatus!: ResponseStatus;
  public Result!: any;
  public Message!: string;
  public Status!: boolean;
}
