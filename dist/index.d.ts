import { z } from 'zod';
export declare const phoneEvent: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"tap">;
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"swipe">;
    x1: z.ZodNumber;
    y1: z.ZodNumber;
    x2: z.ZodNumber;
    y2: z.ZodNumber;
    duration: z.ZodNumber;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"text">;
    text: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"key">;
    code: z.ZodUnion<readonly [z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<67>, z.ZodLiteral<66>, z.ZodLiteral<187>]>;
}, z.core.$strict>], "type">;
export declare class PhoneController {
    private configPath;
    private hooks?;
    private lease?;
    private queue;
    private timer;
    private generation;
    private pending;
    private closed;
    constructor(configPath: string, hooks?: {
        acquired(): Promise<void>;
        released(): void;
    } | undefined);
    private config;
    release(): void;
    close(): void;
    call(method: string, raw: unknown): Promise<unknown>;
    private adb;
    private capture;
    private touch;
    private handle;
}
