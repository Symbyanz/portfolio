import { CardType } from "./card";

export interface SectionBaseType {
    id?: string;
    title: string;
    label: string;
    template: 'text' | 'card-list';
}

export interface TextSectionType extends SectionBaseType {
    template: 'text';
    content: string[];
}

export interface CardListSectionType extends SectionBaseType {
    template: 'card-list';
    content: CardType[];
    link?: {
        label: string,
        url: string,
    };
}

export type SectionType = TextSectionType | CardListSectionType;
