import { getContent } from "@/lib/data/loaders";

// import { PaginationComponent } from "./PaginationComponent";
// import { Search } from "@/components/Search"

interface ContentResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      pageCount: number;
    };
  };
}

interface ContentListProps<T> {
  headline: string;
  query: object;
  path: string;
  featured?: boolean;
  component: React.ComponentType<T & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
}

async function loader<T>(path: string, query: object): Promise<{
  items: T[];
  pageCount: number;
}> {
  const response = await getContent(path, query,) as ContentResponse<T>;
  return {
    items: response.data || [],
    pageCount: response.meta?.pagination?.pageCount ?? 1,
  };
}

export async function ContentList<T>({
  headline,
  path,
  component,
  headlineAlignment = "left",
  showSearch,
  query,
  page,
  showPagination,
}: Readonly<ContentListProps<T>>) {
  const { items, pageCount } = await loader<T>(path, query);
  console.log(pageCount);
  const Component = component;

  const headlineAlignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[headlineAlignment];

  return (
    <section>
      <h3 className={`text-2xl font-bold mb-6 ${headlineAlignmentClasses}`}>
        {headline || "Featured Articles"}
      </h3>
      {/* {showSearch && <Search />} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Component key={(item as any).documentId} {...item} basePath={path} />
        ))}
      </div>
      {/* {showPagination && <PaginationComponent pageCount={pageCount} />} */}
    </section>
  );
}