export declare function a(): void;
export interface Note {
    name: string;
    content: string;
    author?: string;
}
export declare class SuperNote implements Note {
    name: string;
    content: string;
    author?: string;
    constructor(name: string, content: string, author?: string);
}
export declare class Person {
    name: string;
}
