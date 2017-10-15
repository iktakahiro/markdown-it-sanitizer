export interface SanitizerOptions {
    imageClass?: string;
    removeUnbalanced?: boolean;
    removeUnknown?: boolean;
    link?: boolean;
    image?: boolean;
}
export declare function sanitizer_plugin(md: any, options?: SanitizerOptions): void;
