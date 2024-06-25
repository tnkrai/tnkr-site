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
  const subheading = data?.attributes?.subheading;
  const ctaButtonTitle = data?.attributes?.cta?.button?.title;
  const ctaButtonUrl = data?.attributes?.cta?.button?.url;
  const bodyHeading = data?.attributes?.landing_body?.heading;
  const bodyText = data?.attributes?.landing_body?.body[0]?.children[0]?.text;

  const images =
    data?.attributes?.landing_body?.landing_images?.landing_images_urls?.data?.map(
      (image: { url: string; altText: string }) => ({
        src: image.url,
        alt: image.altText,
      }),
    );

  return (
    <main className="flex min-h-screen gap-16 flex-col">
      <div>
        <h1 className="max-w-md">{heading}</h1>
        <p className="mt-2 max-w-xl">{subheading}</p>
      </div>

      <section className=".cta">
        <Button asChild>
          <a href={ctaButtonUrl} target="_blank">
            {ctaButtonTitle}
          </a>
        </Button>
      </section>

      <div>
        <div className="max-w-xl mb-5">
          <h1 className="mb-2 w-full border-b py-2">{bodyHeading}</h1>
          <p>{bodyText}</p>
        </div>
        <MediaGroup assets={images} />
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ data: HomeData }> = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
  };

  try {
    const res = await fetch(
      `http://${process.env.CMS_HOST}/api/landing?populate[0]=landing_body.landing_images.body_media`,
      {
        headers,
      },
    );

    const data = await res.json();

    return {
      props: data,
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
};

export default Home;
