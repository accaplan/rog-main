import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from '@/components/image'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'
import FancyLink from '@/components/fancyLink'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    content,
    backgroundImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title={home.title} />
      
      <div className="p-3 min-h-screen relative">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <m.header className="absolute top-0 left-0 right-0 z-10">
              <div className="grid grid-cols-9 p-3">
                <div className="col-span-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.54 33.6"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,33.12V.48H13.54q5.28,0,7.87,2.5A9,9,0,0,1,24,9.79a6.75,6.75,0,0,1-1.63,4.61,11.87,11.87,0,0,1-4,3,5.05,5.05,0,0,1,2.23,2,8,8,0,0,1,1,2.71l.72,4.08a11.5,11.5,0,0,0,1.44,3.94,9.32,9.32,0,0,0,2.83,3H19A3.48,3.48,0,0,1,17.14,31a18.24,18.24,0,0,1-.92-3.77l-.52-3.69a7,7,0,0,0-1.23-3.19,3.57,3.57,0,0,0-3.09-1.28H5.71v14ZM13.54,5.9H5.71v7.78h7.68a5.17,5.17,0,0,0,3.55-1,3.69,3.69,0,0,0,1.11-2.88,3.55,3.55,0,0,0-1.2-2.88A5,5,0,0,0,13.54,5.9Z"/><path d="M42.72,33.6a13.64,13.64,0,0,1-5.66-1.18,13.47,13.47,0,0,1-4.61-3.36,15.81,15.81,0,0,1-3.1-5.3,20.4,20.4,0,0,1-1.13-7,20.4,20.4,0,0,1,1.13-7,16.1,16.1,0,0,1,3.07-5.3A13.28,13.28,0,0,1,37,1.18a14.36,14.36,0,0,1,11.4,0,13.37,13.37,0,0,1,4.66,3.36,15.8,15.8,0,0,1,3.09,5.3,20.16,20.16,0,0,1,1.13,7,19.93,19.93,0,0,1-1.15,7A16.19,16.19,0,0,1,53,29.06a13.45,13.45,0,0,1-4.63,3.36A13.84,13.84,0,0,1,42.72,33.6Zm0-5.71a7.66,7.66,0,0,0,6.17-2.95q2.41-3,2.42-8.14T48.89,8.66a7.66,7.66,0,0,0-6.17-2.95,7.58,7.58,0,0,0-6.14,3q-2.4,3-2.4,8.14t2.4,8.14A7.58,7.58,0,0,0,42.72,27.89Z"/><path d="M63.79,33.12V.48h9.6l6.53,21.07L86.78.48h9.6V33.12H90.91V5.86L82.22,33.12H77.57l-8.31-27v27Z"/><path d="M124.18,33.12l-3.51-9H109.92l-3.5,9h-6L112.85.48h4.89l12.48,32.64ZM111.94,18.86h6.72l-3.36-8.59Z"/><path d="M134.21,33.12V.48h6.24l11.71,21.26V.48h5.52V33.12h-6.24L139.73,11.86V33.12Z"/><path d="M186.72,19.58h6a14.58,14.58,0,0,1-4.08,10.18,13.51,13.51,0,0,1-10,3.84,14.39,14.39,0,0,1-5.49-1.06,12.93,12.93,0,0,1-4.61-3.16,15.49,15.49,0,0,1-3.17-5.26,21,21,0,0,1-1.17-7.32,21.48,21.48,0,0,1,1.13-7.32,15.16,15.16,0,0,1,3.07-5.26A12.4,12.4,0,0,1,173,1.06,15,15,0,0,1,178.65,0a13.34,13.34,0,0,1,9.77,3.7q3.78,3.69,4.3,10.65h-6.43q-.39-4.56-2.55-6.6a7.45,7.45,0,0,0-5.32-2,7.35,7.35,0,0,0-6,2.76q-2.26,2.76-2.26,8.33t2.28,8.33a7.38,7.38,0,0,0,6,2.76,6.77,6.77,0,0,0,5-1.85Q185.27,24.2,186.72,19.58Z"/><path d="M198.67,33.12V.48h20V5.9H204.38v6.68h13.49V18H204.38v9.7h14.26v5.42Z"/><path d="M248.78,33.6a13.64,13.64,0,0,1-5.66-1.18,13.47,13.47,0,0,1-4.61-3.36,15.81,15.81,0,0,1-3.1-5.3,20.41,20.41,0,0,1-1.12-7,20.41,20.41,0,0,1,1.12-7,16.1,16.1,0,0,1,3.07-5.3,13.28,13.28,0,0,1,4.61-3.36,14.36,14.36,0,0,1,11.4,0,13.37,13.37,0,0,1,4.66,3.36,16,16,0,0,1,3.1,5.3,20.41,20.41,0,0,1,1.12,7,19.93,19.93,0,0,1-1.15,7,16.19,16.19,0,0,1-3.12,5.3,13.36,13.36,0,0,1-4.63,3.36A13.84,13.84,0,0,1,248.78,33.6Zm0-5.71A7.66,7.66,0,0,0,255,24.94q2.42-3,2.42-8.14T255,8.66a7.9,7.9,0,0,0-12.31,0q-2.4,3-2.4,8.14t2.4,8.14A7.59,7.59,0,0,0,248.78,27.89Z"/><path d="M269.85,33.12V.48h19.44V5.9H275.56v6.68H288V18H275.56V30.34c0,.57,0,1.1.05,1.58a3.85,3.85,0,0,0,.24,1.2Z"/><path d="M294.86,33.12V.48H314.3V5.9H300.57v6.68H313V18H300.57V30.34c0,.57,0,1.1.05,1.58a3.85,3.85,0,0,0,.24,1.2Z"/><path d="M319.87,33.12V.48h5.71V33.12Z"/><path d="M354.62,19.58h6a14.58,14.58,0,0,1-4.08,10.18,13.51,13.51,0,0,1-10,3.84,14.39,14.39,0,0,1-5.49-1.06,12.93,12.93,0,0,1-4.61-3.16,15.49,15.49,0,0,1-3.17-5.26,21,21,0,0,1-1.17-7.32,21.48,21.48,0,0,1,1.13-7.32,15.16,15.16,0,0,1,3.07-5.26,12.4,12.4,0,0,1,4.58-3.16A15,15,0,0,1,346.55,0a13.34,13.34,0,0,1,9.77,3.7q3.76,3.69,4.3,10.65h-6.43q-.39-4.56-2.55-6.6a7.45,7.45,0,0,0-5.32-2,7.35,7.35,0,0,0-6,2.76q-2.26,2.76-2.26,8.33t2.28,8.33a7.38,7.38,0,0,0,6,2.76,6.77,6.77,0,0,0,5-1.85Q353.18,24.2,354.62,19.58Z"/><path d="M366.57,33.12V.48h20V5.9H372.28v6.68h13.49V18H372.28v9.7h14.26v5.42Z"
            /></g></g></svg>
                </div>
              </div>
            </m.header>

            <m.main className="">

              <article className="absolute bottom-0 top-auto md:bottom-auto md:top-0 right-0 left-0 z-10 w-full md:mt-[20vh] mb-[8vh] md:mb-0 p-3 indent-8 text-sm md:text-base leading-tight md:leading-tight grid grid-cols-9">
                <div className="col-span-9 md:col-span-3 md:col-start-7 pr-12 xl:pr-20">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.content} />
                </div>
              </article>
            </m.main>

            <m.footer className="absolute bottom-0 left-0 right-0 z-10 p-3">
              <div className="grid grid-cols-9 items-end">
                <div className="col-span-2 text-left">
                  <Link href="/work"><a className="text-2xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase underline">Work</a></Link>
                </div>

                <div className="col-span-4 col-start-3 text-right md:space-x-7">
                  <Link href="mailto:info@romanceoffice.com"><a className="text-sm md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none font-sans uppercase">
                    <span className="hidden md:inline-block underline">Contact</span>
                    <span className="inline-block md:hidden underline">Contact</span>
                  </a></Link>

                  <Link href="https://www.instagram.com/romanceoffice/?hl=en"><a className="text-sm md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none font-sans uppercase underline ml-5">Instagram</a></Link>
                </div>
                
                <div className="col-span-2 col-start-8 text-right">
                  <Link href="/studio"><a className="text-2xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase underline">Studio</a></Link>
                </div>
              </div>
            </m.footer>
          </m.div>
        </LazyMotion>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}