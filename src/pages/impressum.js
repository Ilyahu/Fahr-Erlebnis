import React from "react"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
// import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import HeroImpressum from '../components/hero-impressum'


const Impressum = ({data: {
  
header} }) => {
return (
  <Layout2>
    <SEO title="Home" />
    
    <div className="rinde">
    <HeroImpressum image={header.childImageSharp.fluid}/>



    <section >
      {/* <span className="description"> */}
      <h1 className="sub-titel">
      Impressum
      </h1>
      
     
          </section>
          <section className="container ">
          <div>
        <strong>Verantwortlich für den Inhalt</strong><br></br>
        <p>Fahr Erlebnis AG <br></br>
        Erreichbar unter <a href="mailto:info@fahr-erlebnis.ch">info@fahr-erlebnis.ch</a>

        </p>
        <br></br>
        <strong>Webseite erstellt von</strong>
        <br></br>
        <span><a href="https://block-lab.ch">Block Lab GmbH</a></span>
         <br></br><br></br>
         <strong>Fotografie</strong>
        <br></br>
        <span>
          {/* <a href="https://borisadolf.net"> */}
          Boris Adolf Photography
          {/* </a> */}
          </span>
         <br></br><br></br>

      </div>

      <div>
        <h3 className="subber-titel">Links</h3>
        <p>
          <strong>Ziegelhof</strong><br></br>
          Landwirtschaftsbetrieb von Andreas und Daniela Benz - <span><a href="https://ziegelhof-wettingen.ch">www.ziegelhof-wettingen.ch</a></span> 
        <br></br>
 <br></br>
        <strong>Kloster Fahr</strong> - <span><a href="https://kloster-fahr.ch">www.kloster-fahr.ch</a></span>
<br></br> <br></br>
<strong>        Tierische Abenteuer
</strong> <br></br>
Landwirtschaftsnahe Dienstleistungen - <span><a href="https://tierische-abenteuer.ch">www.tierische-abenteuer.ch</a></span>
<br></br> <br></br>

<strong>Lägerebräu</strong> <br></br>
<span><a href="https://laegerebraeu.ch">www.laegerebraeu.ch</a></span>

<br></br><br></br>
<strong>Erfahrbar</strong> <br></br>

Projekt für Mehrgenerationenwohnen im Kloster Fahr - <span><a href="https://erfahrbar.ch">www.erfahrbar.ch
</a></span>
<br></br><br></br>
<strong>Fischereiverein Kloster Fahr</strong> - <span><a href="https://fvkf.ch">www.fvkf.ch
</a></span>

         </p>
      </div>
      
      
<br></br>
      <div>
      {/* <h3 className="subber-titel">Allgemeine Geschäftsbedingungen</h3>
      <strong>Gültigkeit</strong>

      <p>

      </p> */}

        <h3 className="subber-titel">Datenschutz</h3>
        <strong>E-Mails und Anmeldeformulare</strong>
        <p>
Diese Webseite bietet Benutzern E-Mail Adresse und Anmeldeformulare, um eine unmittelbare Kommunikation mit der Fahr-Erlebnis AG und Anmeldung für deren Angebote zu ermöglichen. Wenn Sie mit Fahr-Erlebnis in Kontakt treten, werden die von Ihnen übermittelten personenbezogenen Daten gespeichert. Diese Daten werden nur erhoben und gespeichert, um Ihr Anliegen zu bearbeiten und für den Fall von Anschlussfragen. Es findet keine Weitergabe dieser Daten an Dritte statt.</p> 
        <br></br><br></br>
        <strong>Hinweise zur Datenverarbeitung im Zusammenhang mit Google Analytics</strong>
        <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche für die Datenverarbeitung auf dieser Website außerhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend "Google" genannt.
          <br></br><br></br>
          Google Analytics verwendet sog. "Cookies", Textdateien, die auf dem Computer des Seitenbesuchers gespeichert werden und die eine Analyse der Benutzung der Website durch den Seitenbesucher ermöglichen. Die durch das Cookie erzeugten Informationen über die Benutzung dieser Website durch den Seitenbesucher (einschließlich der gekürzten IP-Adresse) werden in der Regel an einen Server von Google übertragen und dort gespeichert.
          <br></br><br></br>
          Google Analytics wird ausschließlich mit der Erweiterung "_anonymizeIp()" auf dieser Website verwendet. Diese Erweiterung stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und schließt eine direkte Personenbeziehbarkeit aus. Durch die Erweiterung wird die IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von dem entsprechenden Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
          <br></br><br></br>
          Im Auftrag des Seitenbetreibers wird Google die anfallenden Informationen benutzen, um die Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen dem Seitenbetreiber gegenüber zu erbringen (Art. 6 Abs. 1 lit. f DSGVO). Das berechtigte Interesse an der Datenverarbeitung liegt in der Optimierung dieser Website, der Analyse der Benutzung der Website und der Anpassung der Inhalte. Die Interessen der Nutzer werden durch die Pseudonymisierung hinreichend gewahrt.
          <br></br><br></br>
          Google LLC. bietet eine Garantie auf Basis der Standardvertragsklauseln ein angemessenes Datenschutzniveau einzuhalten. Die gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 50 Monaten automatisch gelöscht. 
          <br></br><br></br>
          
        </p>
      </div>
    </section>

    <Footer/>
    </div>

</Layout2> 

)

}

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1600) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "AD_7127_rgb.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "Flugaufnahme-web.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "land3.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "kids_haas_web.jpg" }) {
      ...fluidImage
    }
  }
`;

export default Impressum
