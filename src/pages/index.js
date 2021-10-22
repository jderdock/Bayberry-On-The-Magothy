import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 class="text-center">
        The Community of{" "}
        <span class="block font-bold text-5xl">Bayberry On The Magothy</span>
      </h1>
      <p class="text-center text-xl italic mt-6">Coming soon...</p>
      <p class="flex items-center justify-center w-full mt-12">
        <span>Contact:</span>
        <a href="mailto:admin@bayberrycommunity.com" class="hover:underline">
          admin@bayberrycommunity.com
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
