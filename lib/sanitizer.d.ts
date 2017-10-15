export interface SanitizerOptions {
    imageClass?: string;
    removeUnbalanced?: boolean;
    removeUnknown?: boolean;
    isEnableLink?: boolean;
    isEnableImg?: boolean;
}
export declare function sanitizer_plugin(md: any, options?: SanitizerOptions): void;
