import sdk from "@/lib/sdk";

export async function getGlobalPageData() {
  const globalPage = await sdk.single("global").find({
    populate: {
      header: {
        populate: {
          logo: {
            populate: {
              image: {
                fields: ["name", "alternativeText", "url"],
              },
            },
          },
          navItems: {
            populate: true,
          },
          cta: {
            populate: true,
          },
        },
      },
    },
  });

  return globalPage;
}

export async function getAllProducts() {
  const products = await sdk.collection("products").find({
    populate: {
      images: {
        fields: ["name", "alternativeText", "url"],
      },
      banner: {
        fields: ["name", "alternativeText", "url"],
      },
    },
  });

  return products;
}

export async function getContent(collection: string, query: any) {
  const content = await sdk.collection(collection).find(query);
  return content;
}

export async function getProduct(slug: string) {
  const products = await sdk.collection("products").find({
    populate: {
      images: {
        fields: ["name", "alternativeText", "url"],
      },
      banner: {
        fields: ["name", "alternativeText", "url"],
      },
      features: {
        fields: ["text"],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  return products?.data[0];
}
