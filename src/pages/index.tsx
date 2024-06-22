import { GetStaticProps, InferGetStaticPropsType } from "next";
import Button from "../components/ui/Button";
import ImageGroup from "../components/ImageGroup";
import Layout from "./layout";

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
  const fallbackBodyHeading = "Open Source Robots - ";
  const bodySubheading = data?.attributes?.landing_body?.sub_heading;
  const fallbackBodySubheading = "Idea";

  const bodyText = data?.attributes?.landing_body?.body[0]?.children[0]?.text;
  const fallbackBodyText =
    "As soon as we set off to build tinkr, our first instinct was to find a group of people who could benefit “the most” from having a tool like Tinkr. To ensure we were looking in the right places, we established 3 conditions for a given niche to be considered an ideal segment for us to plant our roots.";
  const bodyList = data?.attributes?.landing_body?.body[1]?.children;

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
      src: "/images/vision-pro.avif",
      alt: "Apple Vision Pro",
    },
    {
      src: "/images/vision-pro-teardown.avif",
      alt: "Apple Vision Pro Teardown",
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
      <div className="flex flex-col gap-y-4">
        <div className="max-w-xl">
          <h1 className="mb-5">
            <span>{bodyHeading ?? fallbackBodyHeading}</span>
            <span className="text-green-500">
              {bodySubheading ?? fallbackBodySubheading}
            </span>
          </h1>
          <p>{bodyText ?? fallbackBodyText}</p>
        </div>

        <ol className="list-decimal mb-10 max-w-xl">
          {bodyList ? (
            bodyList.map(
              (
                listItem: {
                  children: Array<{
                    type: string;
                    text: string;
                  }>;
                },
                index: number
              ) => {
                const text = listItem?.children[0]?.text;
                return <li key={index}>{text}</li>;
              }
            )
          ) : (
            <>
              <li>
                There had to be a considerable number of individuals / entities,
                willing to share the knowledge within technology they had built
                ( open source ).
              </li>
              <li>
                There had to be a considerable number of individuals / entities
                who are highly curious about this technology and want to tinker
                with it, tear it down and create new things from it.
              </li>
              <li>
                Problems and inadequacies in the current process of sharing and
                tinkering with the open source knowledge.
              </li>
            </>
          )}
        </ol>

        <ImageGroup images={images ?? fallbackImages} />
      </div>
    </main>
  );
};
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

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
