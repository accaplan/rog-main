import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import SanityBlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import Link from 'next/link'
import Carousel from '@/components/carousel'

const query = `*[_type == "work" && slug.current == $slug][0]{
  title,
  content,
  heroCarouselImages[] {
    asset-> {
      ...
    },
    alt,
    caption
  },
  slug {
    current
  },
  "moreWork": *[_type == "work" && slug.current != $slug][0...3] {
    title,
    teaserImage {
      asset-> {
        ...,
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function WorkSlug(initialData) {
  const { data: { title, content, heroCarouselImages, slug, moreWork }  } = pageService.getPreviewHook(initialData)()

  const containerRef = useRef(null)
  return (
    <Layout>
      <NextSeo title={title} />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >

                <m.header>
                  <div className="flex space-x-1 p-3">
                    <Link href="/work">
                      <a className="text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase opacity-20">Work</a>
                    </Link>
                    <span className="text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase opacity-20">/</span>
                    <span className="text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">{title}</span>
                  </div>
                </m.header>

                <m.main className=" mb-16 md:mb-24 xl:mb-32">
                  <article>
                    <div className="flex items-start my-[10vh] p-3">
                      <div className="w-1/2">
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Branding</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Food</span>
                        </div>
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Props / Set Asst</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Robbie White</span>
                        </div>
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Retouch</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Stephen Kirby</span>
                        </div>
                      </div>
                      <div className="w-1/2 text-right">
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">JBS.02</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Campaigns</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">{title}</span>
                        </div>
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Set Design</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Photography</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Motion</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Collectibles</span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1">Social</span>
                        </div>
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1 underline">Quick View</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end mb-3 px-3">
                      <h1 className="font-bold text-[14vw] md:text-[13vw] xl:text-[12vw] ml-[-0.7vw] leading-[0.8] md:leading-[0.8] xl:leading-[0.8] mb-0">{title}</h1>

                      <Link href="/">
                        <a className="mb-1 md:mb-0 block w-[75px] md:w-[60px] ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                         <path d="M0,33.12V.48H13.54q5.28,0,7.87,2.5A9,9,0,0,1,24,9.79a6.75,6.75,0,0,1-1.63,4.61,11.87,11.87,0,0,1-4,3,5.05,5.05,0,0,1,2.23,2,8,8,0,0,1,1,2.71l.72,4.08a11.5,11.5,0,0,0,1.44,3.94,9.32,9.32,0,0,0,2.83,3H19A3.48,3.48,0,0,1,17.14,31a18.24,18.24,0,0,1-.92-3.77l-.52-3.69a7,7,0,0,0-1.23-3.19,3.57,3.57,0,0,0-3.09-1.28H5.71v14ZM13.54,5.9H5.71v7.78h7.68a5.17,5.17,0,0,0,3.55-1,3.69,3.69,0,0,0,1.11-2.88,3.55,3.55,0,0,0-1.2-2.88A5,5,0,0,0,13.54,5.9Z"/><path d="M42.72,33.6a13.64,13.64,0,0,1-5.66-1.18,13.47,13.47,0,0,1-4.61-3.36,15.81,15.81,0,0,1-3.1-5.3,20.4,20.4,0,0,1-1.13-7,20.4,20.4,0,0,1,1.13-7,16.1,16.1,0,0,1,3.07-5.3A13.28,13.28,0,0,1,37,1.18a14.36,14.36,0,0,1,11.4,0,13.37,13.37,0,0,1,4.66,3.36,15.8,15.8,0,0,1,3.09,5.3,20.16,20.16,0,0,1,1.13,7,19.93,19.93,0,0,1-1.15,7A16.19,16.19,0,0,1,53,29.06a13.45,13.45,0,0,1-4.63,3.36A13.84,13.84,0,0,1,42.72,33.6Zm0-5.71a7.66,7.66,0,0,0,6.17-2.95q2.41-3,2.42-8.14T48.89,8.66a7.66,7.66,0,0,0-6.17-2.95,7.58,7.58,0,0,0-6.14,3q-2.4,3-2.4,8.14t2.4,8.14A7.58,7.58,0,0,0,42.72,27.89Z"/><path d="M63.79,33.12V.48h9.6l6.53,21.07L86.78.48h9.6V33.12H90.91V5.86L82.22,33.12H77.57l-8.31-27v27Z"/><path d="M124.18,33.12l-3.51-9H109.92l-3.5,9h-6L112.85.48h4.89l12.48,32.64ZM111.94,18.86h6.72l-3.36-8.59Z"/><path d="M134.21,33.12V.48h6.24l11.71,21.26V.48h5.52V33.12h-6.24L139.73,11.86V33.12Z"/><path d="M186.72,19.58h6a14.58,14.58,0,0,1-4.08,10.18,13.51,13.51,0,0,1-10,3.84,14.39,14.39,0,0,1-5.49-1.06,12.93,12.93,0,0,1-4.61-3.16,15.49,15.49,0,0,1-3.17-5.26,21,21,0,0,1-1.17-7.32,21.48,21.48,0,0,1,1.13-7.32,15.16,15.16,0,0,1,3.07-5.26A12.4,12.4,0,0,1,173,1.06,15,15,0,0,1,178.65,0a13.34,13.34,0,0,1,9.77,3.7q3.78,3.69,4.3,10.65h-6.43q-.39-4.56-2.55-6.6a7.45,7.45,0,0,0-5.32-2,7.35,7.35,0,0,0-6,2.76q-2.26,2.76-2.26,8.33t2.28,8.33a7.38,7.38,0,0,0,6,2.76,6.77,6.77,0,0,0,5-1.85Q185.27,24.2,186.72,19.58Z"/><path d="M198.67,33.12V.48h20V5.9H204.38v6.68h13.49V18H204.38v9.7h14.26v5.42Z"/><path d="M248.78,33.6a13.64,13.64,0,0,1-5.66-1.18,13.47,13.47,0,0,1-4.61-3.36,15.81,15.81,0,0,1-3.1-5.3,20.41,20.41,0,0,1-1.12-7,20.41,20.41,0,0,1,1.12-7,16.1,16.1,0,0,1,3.07-5.3,13.28,13.28,0,0,1,4.61-3.36,14.36,14.36,0,0,1,11.4,0,13.37,13.37,0,0,1,4.66,3.36,16,16,0,0,1,3.1,5.3,20.41,20.41,0,0,1,1.12,7,19.93,19.93,0,0,1-1.15,7,16.19,16.19,0,0,1-3.12,5.3,13.36,13.36,0,0,1-4.63,3.36A13.84,13.84,0,0,1,248.78,33.6Zm0-5.71A7.66,7.66,0,0,0,255,24.94q2.42-3,2.42-8.14T255,8.66a7.9,7.9,0,0,0-12.31,0q-2.4,3-2.4,8.14t2.4,8.14A7.59,7.59,0,0,0,248.78,27.89Z"/><path d="M269.85,33.12V.48h19.44V5.9H275.56v6.68H288V18H275.56V30.34c0,.57,0,1.1.05,1.58a3.85,3.85,0,0,0,.24,1.2Z"/><path d="M294.86,33.12V.48H314.3V5.9H300.57v6.68H313V18H300.57V30.34c0,.57,0,1.1.05,1.58a3.85,3.85,0,0,0,.24,1.2Z"/><path d="M319.87,33.12V.48h5.71V33.12Z"/><path d="M354.62,19.58h6a14.58,14.58,0,0,1-4.08,10.18,13.51,13.51,0,0,1-10,3.84,14.39,14.39,0,0,1-5.49-1.06,12.93,12.93,0,0,1-4.61-3.16,15.49,15.49,0,0,1-3.17-5.26,21,21,0,0,1-1.17-7.32,21.48,21.48,0,0,1,1.13-7.32,15.16,15.16,0,0,1,3.07-5.26,12.4,12.4,0,0,1,4.58-3.16A15,15,0,0,1,346.55,0a13.34,13.34,0,0,1,9.77,3.7q3.76,3.69,4.3,10.65h-6.43q-.39-4.56-2.55-6.6a7.45,7.45,0,0,0-5.32-2,7.35,7.35,0,0,0-6,2.76q-2.26,2.76-2.26,8.33t2.28,8.33a7.38,7.38,0,0,0,6,2.76,6.77,6.77,0,0,0,5-1.85Q353.18,24.2,354.62,19.58Z"/><path d="M366.57,33.12V.48h20V5.9H372.28v6.68h13.49V18H372.28v9.7h14.26v5.42Z"
                        /></g></g></svg>
                        </a>
                      </Link>
                    </div>

                    {/* <div className="mb-4">
                      <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={content} />
                    </div> */}

                    { heroCarouselImages && (
                      <div className="mb-12 md:mb-20 xl:mb-32">
                        <Carousel slides={heroCarouselImages} />
                      </div>
                    )}

                    <div className="p-3">
                      <div className="flex border-b border-black pb-3">
                        <span className="block">More Work</span>
                        <Link href="/work"><a className="block underline text-right ml-auto">Back To Gallery</a></Link>
                      </div>
                      {moreWork.map((e, i) => {
                        return (
                          <Link href={`/work/${e.slug.current}`} key={i}>
                            <a className={`flex items-center w-full border-b border-black py-3 ${i == 1 ? 'text-right justify-end' : '' }`}>
                              <div className={`w-[16.5%] max-w-[300px] min-h-[9vw] md:min-h-[9vw] xl:min-h-[8.4vw] bg-gray-100 relative overflow-hidden ${ i == 1 ? 'order-2' : 'order-1' }`}>
                                <Image
                                  image={e.teaserImage}
                                  className="w-full"
                                  widthOverride={340}
                                  alt={e.title}
                                  layout="fill"
                                />
                              </div>
                              <h2 className={`block text-[6.5vw] leading-none px-3 md:px-4 xl:px-5 ${ i == 1 ? 'order-1' : 'order-2' }`}>{e.title}</h2>
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                  </article>
                </m.main>
                
                <m.div className="p-3">
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('work')
  return {
    paths: paths,
    fallback: false,
  };
}