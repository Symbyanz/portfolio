import { ImageProps } from 'next/image';

export interface LinkType {
    url: string;
    label: string;
}


export interface CardType {
    header: string | ImageProps;
    link?: string;
    title: string;
    subtitle?: string;
    text: string;
    tags?: string[];
    links?: LinkType[];
}