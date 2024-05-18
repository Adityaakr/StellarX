import Image from 'next/image'
import Link from 'next/link'
import githubIcon from 'public/icons/github-button.svg'
import type { FC } from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'

const StyledIconLink = styled(Link)(() => [
  tw`bg-black`
])

export const HomePageTitle: FC = () => {
  const title = 'StellarX'
  const desc = 'Modular asset sharing layer built on the foundation of Stellar. '
  const githubHref = 'https://github.com/Adityaakr'

  return (
    <>
      <div tw="flex flex-col items-center text-center font-mono">
        {/* Logo & Title */}
        <Link
          href={githubHref}
          target="_blank"
          className="group"
          tw="absolute inset-x-0 top-0 h-16 flex cursor-pointer items-center gap-4 rounded-3xl py-1.5 px-3.5 transition-all"
        >
          <div tw='font-bold text-5xl'>{title}</div>
          <div tw='absolute mt-40
          left-0 ml-5  '>{desc}</div>
          {/* Insert content here */}
        </Link>
        {/* Github & Vercel Buttons */}
      </div>
    </>
  )
}
