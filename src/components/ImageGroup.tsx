import Image from "next/image";

interface ImageGroupProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageGroup({ images }: ImageGroupProps) {
  return (
    <div className="flex w-full h-full gap-10 overflow-x-scroll">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          height={560}
          width={560}
          alt={image.alt}
          className="rounded-lg shrink-0"
        />
      ))}
    </div>
  );
}
