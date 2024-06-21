import Image from "next/image";

interface MediaGroupProps {
  assets: {
    src: string;
    alt: string;
  }[];
}

export default function MediaGroup({ assets }: MediaGroupProps) {
  return (
    <div className="flex w-full h-full gap-5 overflow-x-scroll no-scrollbar">
      {assets.map((asset, index) => {
        const isImage = asset.src.includes(
          ".avif" || ".webp" || ".jpg" || ".png" || ".jpeg" || ".gif" || ".svg"
        );

        return isImage ? (
          <Image
            key={index}
            src={asset.src}
            height={560}
            width={560}
            alt={asset.alt}
            className="rounded-lg shrink-0"
          />
        ) : (
          <div className="shrink-0">
            <video
              key={index}
              src={asset.src}
              height={560}
              width={560}
              controls={false}
              autoPlay
              muted
              loop
              className="rounded-xl aspect-auto object-cover h-[35rem] w-[35rem]"
            />
            <p className="text-xs mt-2">{asset.alt}</p>
          </div>
        );
      })}
    </div>
  );
}
