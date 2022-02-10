import { Display, Card, Text, Divider, useTheme, Link, Tag } from "@geist-ui/core";
import Image from "next/image";
import NextLink from "next/link";
interface ProjectProps {
  children: React.ReactNode /* Descripton of the project */;
  src: string;
  title: string;
  href?: string;
  imageWidth?: string;
  imageHeight?: string;
  tags?: string[];
}
function Project({ children, src, title, imageWidth, imageHeight, href, tags }: ProjectProps) {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center space-y-12 pb-12">
      <div className="w-3/4">
        <div className="my-8 space-x-4">
          {tags && tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Card shadow>
          <Card.Content>
            <Text b>{title}</Text>
          </Card.Content>
          <Divider />
          <Display caption={children}>
            <div className="mx-4">
              <Image
                className="opacity-50 hover:opacity-100 transition-opacity duration-1000"
                width={imageWidth ? imageWidth : "500px"}
                height={imageHeight ? imageHeight : "350px"}
                objectFit="cover"
                quality={100}
                alt={title}
                src={src}
              />
            </div>
          </Display>
          {href && (
            <Card.Footer>
              <NextLink href={href}>
                <Link href={href} block color icon>
                  View Project
                </Link>
              </NextLink>
            </Card.Footer>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Project;
