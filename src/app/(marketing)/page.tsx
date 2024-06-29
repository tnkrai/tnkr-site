import Button from "@components/ui/Button";
import { fetchHomeData } from "./lib/fetchHomeData";
import MediaGroup from "./components/MediaGroup";
import PageHead from "./components/PageHead";

const Home = async () => {
  const { data } = await fetchHomeData();

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
      })
    );

  return (
    <>
      <PageHead />
      <div className="flex min-h-screen gap-16 flex-col">
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
      </div>
    </>
  );
};

export default Home;
