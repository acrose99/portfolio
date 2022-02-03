import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
// let imagesDirectory = join(process.cwd(), 'public/img')
let contentDirectory = join(process.cwd(), "content/music");

export function getContent() {
  return fs.readdirSync(contentDirectory);
}
export function getSong( fields: string[], file: string) {
  //  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(contentDirectory + "/" + file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
    items["file"] = file.replace(/\.md$/, "");
  });
  return items;
}
export function getSongs( fields: string[]) {
  const content = getContent();
  const slides = content.map((file) =>
    getSong(
      fields,
      file,
    )
  );
  // remove the 'cover' file from the list of files
  const cover = slides.find((collection) => collection.file === "cover");
  if (cover) {
    slides.splice(slides.indexOf(cover), 1);
  }
  // sort posts by date in descending order
  slides.sort(function (a, b) {
    if (parseInt(a.file) > parseInt(b.file)) return 1;
    if (parseInt(a.file) < parseInt(b.file)) return -1;
    return 0;
  });
  // console.log(collections)
  return slides;
}
