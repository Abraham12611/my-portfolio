import { CompanyLogo } from "../ui/company-logo"

export function PartnershipsSection() {
  return (
    <div className="max-w-xs">
      <h3 className="text-[#CCD0CF] text-2xl font-semibold mb-6">Previous Partnerships</h3>
      <div className="grid grid-cols-2 gap-4">
        <CompanyLogo 
          name="Vultr" 
          logo="/logos/vultr-logo.png"
          website="https://vultr.com"
        />
        <CompanyLogo 
          name="FreeCodeCamp" 
          logo="/logos/FreeCodeCamp_logo.svg"
          website="https://freecodecamp.org"
        />
        <CompanyLogo 
          name="HackerNoon" 
          logo="/logos/hacker-noon-logo (2).png"
          website="https://hackernoon.com"
        />
        <CompanyLogo 
          name="SitePoint" 
          logo="/logos/SitePoint.png"
          website="https://sitepoint.com"
        />
        <CompanyLogo 
          name="Collabnix" 
          logo="/logos/collabnix-logo.png"
          website="https://collabnix.com"
        />
        <CompanyLogo 
          name="InPlainEnglish" 
          logo="/logos/inplainenglish_logo.png"
          website="https://inplainenglish.io"
        />
      </div>
    </div>
  )
} 