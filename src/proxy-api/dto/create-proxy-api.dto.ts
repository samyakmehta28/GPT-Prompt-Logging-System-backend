export class CreateProxyApiDto {
    prompt: string;
  metadata: {
    user: string;
    environment: string;
    model: string;
  };
  }