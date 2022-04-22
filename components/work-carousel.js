import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from '@/components/image'
import FilterButton from '@/components/filter-button'

export default function WorkCarousel({ work }) {
  const { scroll } = useLocomotiveScroll()
  const [current, setCurrent] = useState(0);
  const [currentCat, setCurrentCat] = useState('all');
  const [currentType, setCurrentType] = useState('all');

  function filterScrollUpdate() {
    scroll.update()
    scroll.scrollTo(0, { duration: 0, disableLerp: true })
  }

  function resetFilters() {
    setCurrentCat('all')
    setCurrentType('all')
    filterScrollUpdate()
  }

  function updateCat(cat) {
    if (currentCat !== cat) {
      setCurrentCat(cat)
    } else {
      setCurrentCat('all')
    }
    filterScrollUpdate()
  }
  
  
  function updateType(type) {
    if (currentType !== type) {
      setCurrentType(type)
    } else {
      setCurrentType('all')
    }
    filterScrollUpdate()
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('call', function(e) {
        setCurrent(e)
      });
    }
  }, [scroll])

  return (
    <div className="grid grid-cols-9">
      <div className="fixed top-0 left-0 w-[66.75vw]" data-scroll data-scroll-sticky data-scroll-target="#sticky">
        <div className="h-screen flex flex-col flex-wrap relative p-3">
          <div className="w-full flex space-x-6 items-center pb-3">
            <div className="w-2/10 flex space-x-[2vw]">
              <FilterButton label={'all'} onClick={resetFilters} current={currentCat} />
              <FilterButton label={'architecture'} onClick={() => updateCat('architecture')} current={currentCat} />
              <FilterButton label={'design'} onClick={() => updateCat('design')} current={currentCat} />
              <FilterButton label={'culture'} onClick={() => updateCat('culture')} current={currentCat} />
            </div>
            <div className="w-8/10 justify-end flex space-x-[2vw]">
              <FilterButton label={'model'} onClick={() => updateType('model')} current={currentType} />
              <FilterButton label={'drawing'} onClick={() => updateType('drawing')} current={currentType} />
            </div>
          </div>
          
          <Link href={`/work/${work[current].slug.current}`}>
            <a className="w-full flex-1 group">
              <div className="h-[70vh] relative overflow-hidden mb-1">
                <Image
                  image={work[current].teaserImage}
                  widthOverride={1400}
                  layout="fill"
                  className="w-full h-full transition-transform ease-in-out duration-200 group-hover:scale-110"
                  alt={work[current].title}
                />
              </div>

              <div className="w-full grid grid-cols-6">
                <div className="col-span-1">
                  <span className="block leading-none text-sm">Romance Office.{current < 10 && ('0')}{current}</span>
                </div>
                <div className="col-span-1">
                  <span className="block leading-none text-sm">{work[current].title}</span>
                </div>
                <div className="col-span-2">
                  <span className="block leading-none text-sm">Branding</span>
                </div>
                <div className="col-span-1 text-right">
                  <span className="block leading-none text-sm">Transmedia</span>
                </div>
                <div className="col-span-1 text-right">
                  <span className="block leading-none text-sm underline">Case Study</span>
                </div>
              </div>
            </a>
          </Link>
          
          <div className="w-full flex items-end">
            <Link href="/">
              <a className="w-[50px] md:w-[75px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327.96 50.4"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
              <path d="M0,49.68V.72H20.3q7.92,0,11.81,3.74T36,14.69a10.16,10.16,0,0,1-2.45,6.91,17.69,17.69,0,0,1-6,4.46,7.55,7.55,0,0,1,3.35,3,11.73,11.73,0,0,1,1.48,4.07l1.08,6.12a16.64,16.64,0,0,0,2.16,5.9,13.62,13.62,0,0,0,4.25,4.54H28.51a5.34,5.34,0,0,1-2.81-3.13,27.57,27.57,0,0,1-1.36-5.65l-.8-5.55a10.62,10.62,0,0,0-1.83-4.79q-1.41-1.9-4.65-1.9H8.57v21ZM20.3,8.86H8.57V20.52H20.09c2.45,0,4.22-.5,5.33-1.51a5.57,5.57,0,0,0,1.65-4.32,5.33,5.33,0,0,0-1.8-4.32A7.47,7.47,0,0,0,20.3,8.86Z"/><path d="M64.08,50.4a20.77,20.77,0,0,1-8.5-1.76,20.5,20.5,0,0,1-6.91-5,23.73,23.73,0,0,1-4.64-8A30.49,30.49,0,0,1,42.34,25.2,30.49,30.49,0,0,1,44,14.76a24,24,0,0,1,4.61-8,19.93,19.93,0,0,1,6.91-5A21,21,0,0,1,64.08,0a21.27,21.27,0,0,1,8.57,1.76,20.38,20.38,0,0,1,7,5,23.92,23.92,0,0,1,4.65,8A30.73,30.73,0,0,1,86,25.2a30,30,0,0,1-1.73,10.44,24.32,24.32,0,0,1-4.68,8,20.36,20.36,0,0,1-7,5A21,21,0,0,1,64.08,50.4Zm0-8.57a11.43,11.43,0,0,0,9.25-4.43Q77,33,77,25.2T73.33,13a11.84,11.84,0,0,0-18.47,0q-3.6,4.42-3.6,12.2t3.6,12.2A11.35,11.35,0,0,0,64.08,41.83Z"/><path d="M95.69,49.68V.72h14.4l9.79,31.61L130.17.72h14.4v49h-8.2V8.78l-13,40.9h-7L103.89,9.22V49.68Z"/><path d="M186.26,49.68,181,36.22H164.88l-5.26,13.46h-9.07l18.72-49h7.34l18.72,49ZM167.9,28.3H178l-5-12.89Z"/><path d="M201.31,49.68V.72h9.36l17.57,31.9V.72h8.28v49h-9.36l-17.57-31.9v31.9Z"/><path d="M280.08,29.38h9q-.36,9.5-6.12,15.26T268,50.4a21.89,21.89,0,0,1-8.24-1.58,19.3,19.3,0,0,1-6.91-4.76,23.09,23.09,0,0,1-4.76-7.88,31.38,31.38,0,0,1-1.76-11,32.4,32.4,0,0,1,1.69-11,23,23,0,0,1,4.61-7.88,18.61,18.61,0,0,1,6.88-4.76A22.73,22.73,0,0,1,268,0q9,0,14.65,5.54t6.45,16h-9.65q-.57-6.84-3.82-9.9a11.19,11.19,0,0,0-8-3.06,11,11,0,0,0-9,4.14q-3.37,4.14-3.38,12.49t3.42,12.49a11.07,11.07,0,0,0,9,4.14,10.17,10.17,0,0,0,7.53-2.77Q277.91,36.28,280.08,29.38Z"/><path d="M298,49.68V.72H328V8.86H306.57v10h20.24V27H306.57V41.54H328v8.14Z"/>
              </g></g></svg>
              </a>
            </Link>
            
            <Link href={`/work/${work[current].slug.current}`}>
              <a className="block">
                <h1 className="text-5xl md:text-[6.5vw] xl:text-[7vw] 2xl:text-[7.5vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase mb-[-5px] md:mb-[-0.78vw] ml-2 md:ml-8">{work[current].title}</h1>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-3 col-start-7 pl-0 flex justify-center">
        <div className="w-9/12">
          {[...Array(5)].map((index) => ( 
            <div key={index}>
              {work.map((e, i) => {
                let width = 'w-11/12'
                
                if (e.teaserImageThumbnail.asset.metadata.dimensions.height > e.teaserImageThumbnail.asset.metadata.dimensions.width) {
                  width = 'w-[51%]'
                } else if (i % 2 === 0) {
                  width = 'w-9/12'
                } else if (i % 3 === 0) {
                  width = 'w-1/2'
                }
                
                return (e.category == currentCat || currentCat == 'all') & (e.type == currentType || currentType == 'all') ? (
                  <li className={`block mb-16 pt-3 ${width}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="90%, 10%" onClick={() => setCurrent(i)}>
                    { e.teaserImageThumbnail && (
                      <div>
                        <Image
                          image={e.teaserImageThumbnail}
                          className="w-full"
                          widthOverride={800}
                          alt={e.title}
                        />
                      </div>
                    )}
                  </li>
                ) : (
                  null
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}