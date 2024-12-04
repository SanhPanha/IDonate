import { LucideIcon } from "lucide-react";

export type ContributorMenuType = {
    path: string;
    title: string;
    active: boolean;
    icon:  LucideIcon;
    children?: { path: string; name: string }[];
};