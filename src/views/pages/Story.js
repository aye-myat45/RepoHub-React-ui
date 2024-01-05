import SS_Img from "../../assets/img/SS-Img.png";
import { Helmet } from "react-helmet";

const Story = (props) => {
    return (
      <div>

        <Helmet>
        {/* <!-- Primary Meta Tags --> */}
          <title>Story | RepoHub</title>
          <meta name="title" content="RepoHub App" />
          <meta name="description" content="React projects for test" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="repohub.co" />
          <meta property="og:title" content="RepoHub App" />
          <meta property="og:description" content="React projects for test" />
          <meta property="og:image" content={SS_Img} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="repohub.co" />
          <meta property="twitter:title" content="RepoHub App" />
          <meta property="twitter:description" content="React projects for test" />
          <meta property="twitter:image" content={SS_Img} />
          {/* <!-- Meta Tags Generated with https://metatags.io --> */}
        </Helmet>

        <h1 className="text-primary">Story</h1>
      </div>
    )
  }
  
  export default Story;