import { marked } from "marked";
export default function Md({ text }) {
  return (
    <div
      className="md"
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    />
  );
}
