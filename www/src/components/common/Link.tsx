import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { chakra, ChakraComponent } from "@chakra-ui/react";

const InternalLink = chakra(GatsbyLink, {
  baseStyle: {
    color: `#BB72EC`,
    _hover: {
      color: `#F40057`,
      textDecoration: `underline`,
    },
  },
});

const ExternalLink = chakra(chakra.a, {
  baseStyle: {
    color: `aqua`,
    _hover: {
      color: `#F40057`,
      textDecoration: `underline`,
    },
  },
});

export type ILinkProps = {
  href: string;
  title?: string;
  /*   type: string; */
  /*   children: [{ type: string; value: string }]; */
};

type LinkComponentType =
  | ChakraComponent<typeof GatsbyLink, {}>
  | ChakraComponent<ChakraComponent<"a", {}>, {}>;

const Link = ({ href, ...props }: ILinkProps) => {
  const foreignLink = href && href.startsWith(`http`);
  const LinkComponent: LinkComponentType = foreignLink ? ExternalLink : InternalLink;
  const target = foreignLink ? `_blank` : undefined;
  const rel = foreignLink ? `noreferrer noopener` : undefined;

  return <LinkComponent to={href} href={href} target={target} rel={rel} {...props} />;
};

export default Link;
