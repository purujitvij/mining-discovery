"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function RichText({ content }) {
  return (
    <div className="prose max-w-none">
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p className="mb-4">{children}</p>,
        }}
      />
    </div>
  );
}
