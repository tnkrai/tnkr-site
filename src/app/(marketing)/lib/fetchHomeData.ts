import "server-only";

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

export const fetchHomeData = async (): Promise<{ data: HomeData }> => {
  const headers = {
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
  };

  const response = await fetch(
    `http://${process.env.CMS_HOST}/api/landing?populate[0]=landing_body.landing_images.body_media`,
    {
      headers,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};
