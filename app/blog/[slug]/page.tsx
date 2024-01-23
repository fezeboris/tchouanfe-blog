import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export const revalidate = 30; // revalidate at most 30 seconds
async function getData(slug: string) {
  const query = `*[_type=='blog' && slug.current == '${slug}'] {
    title,
    content,
    "currentSlug":slug.current,
    titleImage
  }[0]`;

  const data = await client.fetch(query);
  return data;
}
export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);
  return (
    <div className="mt-8 mb-6">
      {" "}
      <h1 className="">
        {" "}
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Boris Tchouanfe - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt="title image"
        height={300}
        width={900}
        priority
        className="block mx-auto rounded-lg mt-8  border"
      />
      <div className="mt-16 pb-8 mx-auto prose prose-violet prose-lg dark:prose-invert prose-li:marker:text-primary">
        {" "}
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
