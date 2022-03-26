import React, { DOMElement, useRef, useState } from "react"
import { useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Layout } from "../components/Layout"
import { Nav } from "../components/Nav"

import workerSrc from "../pdf-worker"
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const Whitepaper = () => {
  const [numPages, setNumPages] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  const wrapperEl = useRef(null)
  const [pdfWidth, setPdfWidth] = useState(1000)

  const setSize = () => {
    if (wrapperEl) {
      let el = wrapperEl.current as any
      let width = el?.getBoundingClientRect()?.width || 1000

      console.log(el, width)
      setPdfWidth(width)
    }
  }

  useEffect(() => {
    setSize()
    window.addEventListener("resize", setSize)
    return () => {
      window.removeEventListener("resize", setSize)
    }
  })

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  const onPrev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const onNext = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-shrink flex-col">
          <Document className="my-5 mx-auto" file="/DiasporaWhitePaper.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <div ref={wrapperEl} className="relative  w-[70vw]">
              <div className="absolute top-0 left-0 w-[98%] bg-neutral-300 pb-[64.5%]"></div>
              <Page pageNumber={pageNumber} width={pdfWidth} />
            </div>
            <div className="flex flex-row items-center py-5">
              <button
                onClick={onPrev}
                className="rounded-full border-[1px] border-purple-light bg-transparent py-2 px-4 uppercase text-purple-light"
              >
                Prev
              </button>
              <div className="flex-grow">
                <p className="text-center">
                  Page {pageNumber} of {numPages}
                </p>
              </div>
              <button
                onClick={onNext}
                className="rounded-full border-[1px] border-purple-light bg-transparent py-2 px-4 uppercase text-purple-light"
              >
                Next
              </button>
            </div>
          </Document>
        </div>

        <div className="my-5 flex items-center justify-center">
          <button
            className="rounded-full border-[1px] border-purple-light bg-transparent py-2 px-4 uppercase text-purple-light"
            onClick={() => {
              window.open("/DiasporaWhitePaper.pdf", "_blank")
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <Nav />
      </div>
    </Layout>
  )
}

export default Whitepaper
