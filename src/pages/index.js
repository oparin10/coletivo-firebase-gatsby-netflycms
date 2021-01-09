import React from "react"
import AppLayout from "../layouts/AppLayout"
import _ from "lodash"
import LandingHero from "../components/AppComponents/LandingHero"
import AboutUs from "../components/AppComponents/AboutUs"
import Posts from "../components/AppComponents/Posts"
import { graphql, useStaticQuery } from "gatsby"

function IndexPage(props) {
  const landingRef = React.useRef(null)
  const benefitsRef = React.useRef(null)
  const courseRef = React.useRef(null)
  const contactRef = React.useRef(null)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentType: { eq: "teamMembers" } } }
      ) {
        edges {
          node {
            frontmatter {
              contentType
              teamMemberPicture
              teamMemberPosition
              teamMemberName
              active
            }
          }
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark.edges)

  let teamMembers = data.allMarkdownRemark.edges.map((member, index) => {
    return member.node.frontmatter
  })

  console.log(teamMembers)

  const menu = [
    {
      menuName: "Home",
      reference: landingRef,
    },

    {
      menuName: "Benefícios",
      reference: benefitsRef,
    },

    {
      menuName: "Cursos",
      reference: courseRef,
    },

    {
      menuName: "Contato",
      reference: contactRef,
    },
  ]

  const pageRefs = [landingRef, benefitsRef, courseRef, contactRef]

  return (
    <AppLayout refs={pageRefs} menu={menu}>
      <div ref={landingRef}>
        <LandingHero />
      </div>
      <div ref={benefitsRef}>
        <AboutUs />
      </div>
      <div ref={courseRef}>
        <Posts />
      </div>
      <div ref={contactRef}>{/* <div>Last ref</div> */}</div>

      {/* <div style={{ minHeight: "2000px" }}></div> */}
    </AppLayout>
  )
}

export default IndexPage
