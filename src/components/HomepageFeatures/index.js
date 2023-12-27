import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "Reverse Proxy",
    Svg: require("@site/static/img/rp.svg").default,
    description: (
      <>
        Leverage the synergy of <b>Cloudflare</b> and <b>Letsencrypt</b> for
        robust traffic security, while <b>Traefik's</b> reverse proxy
        capabilities provide precise control over your internet-exposed
        services.
      </>
    ),
  },
  {
    title: "Instant Plex Media Server",
    Svg: require("@site/static/img/pl.svg").default,
    description: (
      <>
        Effortlessly orchestrate your own <b>Plex</b> Media Server and
        seamlessly integrate with <b>*darr</b> services. Utilize Unmanic for
        smart management of your media library.
      </>
    ),
  },
  {
    title: "File and Video Sharing",
    Svg: require("@site/static/img/nc.svg").default,
    description: (
      <>
        Enjoy secure file storage, easy sharing, and efficient team
        collaboration, all in one intuitive platform with <b>Nextcloud</b>, or
        simply share videos with <b>Fireshare</b>.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
