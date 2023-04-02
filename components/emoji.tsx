import React from "react"
import { InvalidEmojiException } from "@/dead-simple-emoji"
import { emojiLookup, type EmojiKey } from "@/lib/emoji"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui"

export function Emoji({ name }: { name: EmojiKey }) {
  const emojiInfo = emojiLookup.get(name)
  if (emojiInfo === undefined) {
    throw new InvalidEmojiException(`Emoji not found ${name}`)
  }

  return (
    <span>
      <Tooltip>
        <TooltipTrigger>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            className="inline aspect-auto h-[1em]"
            src={emojiInfo.url}
            alt={emojiInfo.char || emojiInfo.alt}
            aria-label={emojiInfo.alt}
            data-type="emoji"
            draggable="false"
          />
        </TooltipTrigger>
        <TooltipContent>
          <span>{emojiInfo.alt}</span>
        </TooltipContent>
      </Tooltip>
    </span>
  )
}

export default Emoji
