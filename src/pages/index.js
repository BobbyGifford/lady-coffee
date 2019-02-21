import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Lady Coffee"
      subtitle="Fair trade the right way"
    />
    <Info>
      We care about social values, including housing, education, child labor,
      health care, worker safety, and women’s issues, among many others. We
      insist suppliers we buy from care about these issues too. We require that
      every partner throughout our supply chain has at least one substantive
      social program in place. This criteria allows us to choose and,
      ultimately, favor partners that actively share our values.
    </Info>
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "beans-brown-coffee.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
