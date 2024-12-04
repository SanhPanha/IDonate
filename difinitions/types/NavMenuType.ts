
export type navMenuType = {
    path: string;
    title: string;
    active: boolean;
    children?: { path: string; title: string }[];
};