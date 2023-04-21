import React from "react"
import { Link } from "@/components/ui"
import { Prose } from "@/components/layouts"

export default function Page() {
  return (
    <Prose title="About" subtitle="Me, myself, and I">
      it me
      {[0].map((e) => (
        <L key={e} />
      ))}
    </Prose>
  )
}

const L = () => (
  <>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
      sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
      commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
      ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
      facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,
      eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
      porttitor, facilisis luctus, metus
    </p>

    <ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>
    <ul>
      <li>
        Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
        ultricies in, diam. Sed arcu. Cras consequat.
      </li>
      <li>
        Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
        eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
        facilisis luctus, metus.
      </li>
      <li>
        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
        sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
      </li>
      <li>
        Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum
        vulputate, nunc.
      </li>
    </ul>

    <ol>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ol>

    <nav>
      <ul>
        <li>
          <Link href="#lorem" title="Lorum ipsum dolor sit amet">
            Lorem
          </Link>
        </li>
        <li>
          <Link href="#aliquam" title="Aliquam tincidunt mauris eu risus">
            Aliquam
          </Link>
        </li>
        <li>
          <Link href="#morbi" title="Morbi in sem quis dui placerat ornare">
            Morbi
          </Link>
        </li>
        <li>
          <Link href="#praesent" title="Praesent dapibus, neque id cursus faucibus">
            Praesent
          </Link>
        </li>
        <li>
          <Link href="#pellentesque" title="Pellentesque fermentum dolor">
            Pellentesque
          </Link>
        </li>
      </ul>
    </nav>
  </>
)
