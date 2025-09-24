import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getStatus(): { status: string; message: string } {
    return {
      status: "ok",
      message: "IC Wallet backend is running",
    };
  }
}
