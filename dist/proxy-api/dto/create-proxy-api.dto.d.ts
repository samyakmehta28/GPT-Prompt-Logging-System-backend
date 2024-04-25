export declare class MetadataDto {
    user: string;
    environment: string;
    model: string;
}
export declare class CreateProxyApiDto {
    prompt: string;
    metadata: MetadataDto;
}
