import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info>
      For the health of the earth, coffee pickers, and ultimately our customers,
      we are committed to purchasing only from sources that prove they do not
      use chemicals on the Sustainable Agriculture Network banned chemical list.
      Additionally we ask that the following protective measures are in place:
      Waterway buffer zones, protective clothing for workers and safe storage of
      agrochemicals.
    </Info>
    <div className="text-center mb-5">
      <Link to="/">
        <button className="btn btn-info">Our Products</button>
      </Link>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
