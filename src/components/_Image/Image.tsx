import NextImage from 'next/image';
import sizeOf from 'image-size';

interface ImageProps {
    src: string;
    alt?: string;
    fill?: boolean;
    width?: number;
    height?: number;
}

export const Image: React.FC<ImageProps> = async ({ src, alt, fill = false, width, height }) => {
    const isExternal = src.startsWith('http');
    if (!fill && (width == null || height == null)) {
        const absoluteSrc = isExternal ? src : getAbsolutePath(src);
        try {
            const res = await fetch(absoluteSrc);
            if (!res.ok) {
                throw new Error(`Ошибка загрузки изображения: ${res.status}`);
            }
            const imageBuffer = Buffer.from(await res.arrayBuffer());
            const size = sizeOf(imageBuffer);
            width = size.width;
            height = size.height;
        } catch (error) {
            console.error('Ошибка получения размеров изображения:', error);
            // Здесь можно задать значения по умолчанию или оставить width и height как null
        }
    }
    return fill ? (
        <NextImage alt={alt ?? ""} src={src} fill priority />
    ) : (
        <NextImage
            alt={alt ?? ""}
            src={src}
            width={width}
            height={height}
            priority
        />
    );
};

export function getAbsolutePath(relativePath: string) {
    const baseUrl = process.env.PROD_URL
        ? `https://${process.env.PROD_URL}`
        : 'http://localhost:3000';

    const cleanRelativePath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;

    return `${baseUrl}/${cleanRelativePath}`;
}
