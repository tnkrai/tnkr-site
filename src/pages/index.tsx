import { GetStaticProps, InferGetStaticPropsType } from "next";
import Button from "../components/ui/Button";
import MediaGroup from "@components/MediaGroup";

type HomeData = {
  attributes: {
    createdAt: string;
    heading: string;
    subheading: string;
    cta: {
      button: {
        title: string;
        url: string;
      };
    };
    publishedAt: string;
    landing_body: {
      heading: string;
      sub_heading: string;
      body: Array<any>;
      landing_images: any;
    };
  };
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const heading = data?.attributes?.heading;
  const fallbackHeading =
    "Tnkr.ai is a tool for exploring the source knowledge of any technology.";
  const subheading = data?.attributes?.subheading;
  const fallbackSubheading =
    "We believe that every piece of technology, old or new, has a unique story within it. We want to help the next generation of tinkerers uncover these stories so new ones can be told.";

  const ctaButtonTitle = data?.attributes?.cta?.button?.title;
  const fallbackCtaButtonTitle = "Join Our Discord";
  const ctaButtonUrl = data?.attributes?.cta?.button?.url;
  const fallbackCtaButtonUrl = "https://discord.gg/fcpeKMKn3E";

  const bodyHeading = data?.attributes?.landing_body?.heading;
  const fallbackBodyHeading = "Robots";

  const bodyText = data?.attributes?.landing_body?.body[0]?.children[0]?.text;
  const fallbackBodyText =
    "We've choosen the open-source robots as our first technology with these three conditions guiding us. Commonality, Curiosity, and Problems Solving.";

  const images =
    data?.attributes?.landing_body?.landing_images?.body_media?.data.map(
      (image: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      }) => ({
        src:
          `http://${process.env.NEXT_PUBLIC_CMS_HOST}` + image?.attributes?.url,
        alt: image?.attributes?.alternativeText,
      })
    );

  const fallbackImages = [
    {
      src: "/videos/video-1.mp4",
      alt: "Video 1",
    },
    {
      src: "/videos/video-2.mp4",
      alt: "Video 2",
    },
    {
      src: "/videos/video-3.mp4",
      alt: "Video 3",
    },
  ];

  return (
    <main className="flex min-h-screen gap-16 flex-col">
      <div>
        <h1 className="max-w-md">{heading ?? fallbackHeading}</h1>
        <p className="mt-2 max-w-xl">{subheading ?? fallbackSubheading}</p>
      </div>

      <section className=".cta">
        <Button asChild>
          <a href={ctaButtonUrl ?? fallbackCtaButtonUrl} target="_blank">
            {ctaButtonTitle ?? fallbackCtaButtonTitle}
          </a>
        </Button>
      </section>

      <div>
        <div className="max-w-xl mb-5">
          <h1 className="mb-2 w-full border-b py-2">
            {bodyHeading ?? fallbackBodyHeading}
          </h1>
          <p>{bodyText ?? fallbackBodyText}</p>
        </div>

        <MediaGroup assets={images ?? fallbackImages} />
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ data: HomeData }> = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
  };

  let data = null;
  try {
    const res = await fetch(
      `http://${process.env.CMS_HOST}/api/landing?populate[0]=landing_body.landing_images.body_media`,
      {
        headers,
      }
    );

    data = await res.json();
  } catch (error) {
    console.warn("couldn't render cms data");

    if (error instanceof Error) {
      console.error(error.message);
    }

    data = {
      test: "test",
    };
  }

  return {
    props: data,
    revalidate: 10,
  };
};

export default Home;
