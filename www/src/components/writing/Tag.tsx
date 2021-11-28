import React, { MouseEvent } from "react";
import { useSearchInfo } from "src/contexts/SearchInfo";
import { HStack } from "@chakra-ui/react";
import Tag from "src/components/Tag";

type IWritingTags = {
  categories: string[];
};

const WritingTags = ({ categories }: IWritingTags) => {
  const { updateSelectedTags } = useSearchInfo();
  const tags = categories;

  const handler = (event: MouseEvent, tag: string) => {
    event.preventDefault();
    updateSelectedTags(tag);
  };

  return (
    <HStack wrap="wrap">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} handler={handler} />
      ))}
    </HStack>
  );
};

export default WritingTags;
