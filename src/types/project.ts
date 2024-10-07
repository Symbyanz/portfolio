export interface ProjectType {
    year: number,
    title: string,
    customer?: string,
    tags?: string[];
    link?: {
        url: string,
        label: string,
    }
}

