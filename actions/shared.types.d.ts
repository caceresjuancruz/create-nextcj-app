//Types and interfaces needed for shared actions

export type ActionResponse<T> = {
    data?: T;
    error?: string;
};