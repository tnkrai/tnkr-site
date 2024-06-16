import { GetStaticProps, InferGetStaticPropsType } from "next";
// import Button from "@components/ui/Button";
// import ImageGroup from "@components/ImageGroup";

import Button from "../components/ui/Button";
import ImageGroup from "../components/ImageGroup";

import Layout from "./layout";

const AboutUs = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const heading = data?.attributes?.heading;
  const fallbackHeading = "About Us";
  const subheading = data?.attributes?.subheading;
  const fallbackSubheading =
    "We believe that every piece of technology, old or new, has a unique story within it. We want to help the next generation of tinkerers uncover these stories so new ones can be told.";

  const ctaButtonTitle = data?.attributes?.cta?.button?.title;
  const fallbackCtaButtonTitle = "Join Our Discord";
  const ctaButtonUrl = data?.attributes?.cta?.button?.url;
  const fallbackCtaButtonUrl = "https://discord.gg/fcpeKMKn3E";

  const bodyHeading = data?.attributes?.about_us_body?.heading;
  const fallbackBodyHeading = "Open Source Robots - ";
  const bodySubheading = data?.attributes?.about_us_body?.sub_heading;
  const fallbackBodySubheading = "Idea";

  const bodyText = data?.attributes?.about_us_body?.body[0]?.children[0]?.text;
  const fallbackBodyText =
    "As soon as we set off to build tinkr, our first instinct was to find a group of people who could benefit “the most” from having a tool like Tinkr. To ensure we were looking in the right places, we established 3 conditions for a given niche to be considered an ideal segment for us to plant our roots.";
  const bodyList = data?.attributes?.about_us_body?.body[1]?.children;

  return (
    <main className="flex min-h-screen gap-16 flex-col container">
      <div>
        <h1>{heading ?? fallbackHeading}</h1>
        <p>{subheading ?? fallbackSubheading}</p>
      </div>
      <section className=".cta">
        <Button url={ctaButtonUrl ?? fallbackCtaButtonUrl}>
          {ctaButtonTitle ?? fallbackCtaButtonTitle}
        </Button>
      </section>
      <div className="flex flex-col gap-y-4">
        <div>
          <h1 className="mb-5">
            <span>{bodyHeading ?? fallbackBodyHeading}</span>
            <span className="text-green-500">
              {bodySubheading ?? fallbackBodySubheading}
            </span>
          </h1>
          <p>{bodyText ?? fallbackBodyText}</p>
        </div>
        <ol className="list-decimal mb-10">
          {bodyList ? (
            bodyList.map(
              (
                listItem: {
                  children: Array<{
                    type: string;
                    text: string;
                  }>;
                },
                index: number,
              ) => {
                const text = listItem?.children[0]?.text;
                return <li key={index}>{text}</li>;
              },
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
      </div>
    </main>
  );
};
type AboutUsData = {
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
    about_us_body: {
      heading: string;
      sub_heading: string;
      body: Array<any>;
    };
  };
};

export const getStaticProps: GetStaticProps<{
  data: AboutUsData;
}> = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
  };

  let data = null;
  try {
    const res = await fetch(
      `http://${process.env.CMS_HOST}/api/about_us?populate[0]=about_us_body.body&populate[1]=cta.button`,
      {
        headers,
      },
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
  };
};

AboutUs.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default AboutUs;
