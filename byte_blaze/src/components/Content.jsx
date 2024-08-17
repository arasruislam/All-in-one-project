import React from "react";
import { useLoaderData } from "react-router-dom";
import errorImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw'

const Content = () => {
   const blog = useLoaderData();
   const { cover_image, title, tags, body_html } = blog;
   console.log(blog);

   return (
      <div className="mx-auto group hover:no-underline focus:no-underline  transition border-2 border-primary border-opacity-10 p-1 rounded ">
         <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
            src={cover_image || errorImg}
         />
         {/* Tags */}
         <div>
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
               {tags.map((tag, i) => (
                  <a
                     key={i}
                     rel="noopener noreferrer"
                     href="#"
                     className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                  >
                     #{tag}
                  </a>
               ))}
            </div>
         </div>
         {/* content body */}
         <div className="p-6 space-y-2 overflow-x-scroll">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
               {title}
            </h3>
            {/* <Markdown >{body_html}</Markdown> */}
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
         </div>
      </div>
   );
};

export default Content;
