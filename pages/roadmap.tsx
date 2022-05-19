import React from "react"
import lottie from "lottie-web"
import animation from "../roadmap-animation/data.json"

const Roadmap = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".roadmap-animation"),
      animationData: animation,
      renderer: "svg", // "canvas", "html"
      loop: false,
      autoplay: true,
    })
  }, [])

  const pageTitle = `A "Nonlinear" Journey Through Lineage and Future`
  const pageSubTitle = `Transparency is key for the Diaspora DAO. It is important that we share our journey as we build the community. Decentralization is not only a part of the foundation of the organization, but also the pathway through lineage. Diaspora’s journey to building a DAO, as well as every members own journey within it, is a non linear path. We will continue to iterate and learn from the past to create pathways for the future.`
  const sectionOneText =
    "*At the beginning of any journey, one must set a plan of where they are going and how they are going to get there. Defining a destination, establishing a team, and navigating a path, is essential to success.*"
  const sectionOneList = ["Define Mission/Vision", "Build Roadmap", "Build Whitepaper", "Brand Identity"]

  const sectionTwoTitle = `The Journey`
  const sectionTwoText =
    "The mark of our *lineage is the NFT collection, highlighting the ancestral journey. The community’s directive to mint an ancestor will serve not only to the past, but ownership in it and the future. Diaspora will build mechanisms to tell this story of lineage and the journey along the way.*"
  const sectionTwolist = ["Launch NFT Collection", "Build Gallery", "Marketing/Social"]

  const sectionThreeTitle = `Mint an Ancestor`
  const sectionThreeText =
    "*Culture is “the art and other manifestations of human intellectual achievement regarded collectively” - Oxford Languages. In this phase we will build the infrastructure of the DAO to allow for organic development of the community at scale.*"
  const sectionThreelist = ["Develop DAO", "Develop Structure and Governance", "Logistics (LLC, DeFi, etc.)"]

  const sectionFourTitle = `Lay the Cultural Foundation`
  const sectionFourText =
    "*Through this non linear journey, we will build expansive omni directional paths for members to take. Building on the culture/pillars, members can choose their journey and participate in events and initiatives that will foster the Diaspora community in physical and metaverse form.*"
  const sectionFourlist = [
    "Building Partnerships (in the 4 pillars)",
    "Develop Event Schedule and Framework (Physical and Digital)",
    "Develop Masterclasses",
  ]

  const sectionFiveTitle = `Building the Pathways`

  const sectionSixTitle = `Institutionalize the Revolution`
  const sectionSixText = `*Building this DAO is both a digital and physical revolutionary act. In order to sustain it, future facing, mechanisms have to be built in place to future proof.*`
  const sectionSixlist = ["Buy Land in Metaverse", "Launch the Diaspora Token"]

  return (
    <div className="roadmapBackground">
      <div className="roadmap-animation" />
      <p className="roadmap-section-title text-4xl font-bold">{pageTitle}</p>
      <p className="roadmap-sub-text">{pageSubTitle}</p>

      <div className="right-section">
        <p className="roadmap-section-text">{sectionOneText}</p>
        {sectionOneList.map((item) => {
          return (
            <div key={item}>
              <p className="roadmap-section-list-text font-bold">{item}</p>
            </div>
          )
        })}
      </div>

      <div className="left-section">
        <p className="roadmap-section-title text-4xl font-bold">{sectionTwoTitle}</p>
        <p className="roadmap-section-text">{sectionTwoText}</p>
        {sectionTwolist.map((item) => {
          return (
            <div key={item}>
              <p className="roadmap-section-list-text font-bold">{item}</p>
            </div>
          )
        })}
      </div>

      <div className="right-section">
        <p className="roadmap-section-title-smaller text-4xl font-bold">{sectionThreeTitle}</p>
        <p className="roadmap-section-text">{sectionThreeText}</p>
        {sectionThreelist.map((item) => {
          return (
            <div key={item}>
              <p className="roadmap-section-list-text font-bold">{item}</p>
            </div>
          )
        })}
      </div>

      <div className="left-section">
        <p className="roadmap-section-title-smaller text-4xl font-bold">{sectionFourTitle}</p>
        <p className="roadmap-section-text">{sectionFourText}</p>
        {sectionFourlist.map((item) => {
          return (
            <div key={item}>
              <p className="roadmap-section-list-text font-bold">{item}</p>
            </div>
          )
        })}
      </div>

      <div className="right-section">
        <p className="roadmap-section-title text-4xl font-bold">{sectionFiveTitle}</p>
      </div>

      <div className="left-section">
        <p className="roadmap-section-title text-4xl font-bold">{sectionSixTitle}</p>
      </div>

      <div className="right-section">
        <p className="roadmap-section-text">{sectionSixText}</p>
        {sectionSixlist.map((item) => {
          return (
            <div key={item}>
              <p className="roadmap-section-list-text font-bold">{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap
