import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UnlockProvider } from "@/context/UnlockContext"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahindra Good Host",
  description: "Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra",
  generator: 'acmeflare',
  metadataBase: new URL('https://mahindragoodhost.co.in'), // Replace with your actual domain
  keywords: [
    'Luxury Apartments Bangalore',
    'Mahindra Good Host',
    '3 BHK Apartments Singasandra',
    '4 BHK Apartments Bangalore',
    'Premium Residential Projects',
    'Mahindra Lifespaces',
    'Luxury Real Estate Singasandra',
    'Green Buildings Bangalore',
    'IGBC Certified Homes',
    'Sustainable Living Spaces'
  ],
  authors: [{ name: 'Mahindra Lifespaces' }],
  creator: 'Mahindra Lifespaces',
  publisher: 'Mahindra Lifespaces',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mahindra Good Host - Luxury Redefined",
    description: "Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra. Starting from ₹2.30 Cr*",
    type: "website",
    siteName: "Mahindra Good Host",
    locale: 'en_IN',
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Mahindra Good Host Luxury Apartments",
        type: "image/png",
      }
    ],
    url: 'https://mahindragoodhost.co.in', // Replace with your actual domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahindra Good Host - Luxury Redefined",
    description: "Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra. Starting from ₹2.30 Cr*",
    images: ["/banner.png"],
    creator: "@MLifespaces", // Replace with actual Twitter handle
    site: "@MLifespaces", // Replace with actual Twitter handle
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  },
  category: 'Real Estate',
  classification: 'Luxury Residential Property',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://mahindragoodhost.co.in/#organization",
                  "name": "Mahindra Lifespaces",
                  "url": "https://mahindragoodhost.co.in",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://mahindragoodhost.co.in/640px-Mahindra-Lifespaces.png"
                  },
                  "sameAs": [
                    "https://www.facebook.com/mahindralifespaces",
                    "https://twitter.com/MLifespaces",
                    "https://www.linkedin.com/company/mahindra-lifespaces"
                  ]
                },
                {
                  "@type": "Apartment",
                  "@id": "https://mahindragoodhost.co.in/#apartment",
                  "name": "Mahindra Good Host",
                  "description": "Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra. Starting from ₹2.30 Cr*",
                  "url": "https://mahindragoodhost.co.in",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Singasandra, near Basapura Lake",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "postalCode": "560068",
                    "addressCountry": "IN"
                  },
                  "amenityFeature": [
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Net-Zero Energy Flats"
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "IGBC & GRIHA certified"
                    }
                  ],
                  "numberOfRooms": "3-4",
                  "floorSize": {
                    "@type": "QuantitativeValue",
                    "unitText": "ACRES",
                    "value": "2.16"
                  },
                  "numberOfAvailableUnits": "120",
                  "propertyType": "Apartment",
                  "price": "23000000",
                  "priceCurrency": "INR",
                  "priceValidUntil": "2024-12-31",
                  "offers": {
                    "@type": "Offer",
                    "price": "23000000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "ApartmentComplex",
                  "@id": "https://mahindragoodhost.co.in/#complex",
                  "name": "Mahindra Good Host",
                  "numberOfAccommodationUnits": "120",
                  "numberOfBuildings": "1",
                  "numberOfFloors": "24",
                  "amenityFeature": [
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Sustainable Lifestyle"
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Eco-friendly Development"
                    }
                  ],
                  "branchCode": "Singasandra"
                },
                {
                  "@type": "Organization",
                  "@id": "https://mahindragoodhost.co.in/#contactInfo",
                  "name": "Mahindra Good Host",
                  "url": "https://mahindragoodhost.co.in",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-636-369-2124",
                      "contactType": "sales",
                      "areaServed": "Bangalore",
                      "availableLanguage": ["English", "Hindi", "Kannada"]
                    }
                  ],
                  "sameAs": [
                    "https://wa.me/916363692124"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mahindragoodhost.co.in/#website",
                  "url": "https://mahindragoodhost.co.in",
                  "name": "Mahindra Good Host",
                  "description": "Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra",
                  "potentialAction": [
                    {
                      "@type": "CommunicateAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://wa.me/916363692124",
                        "name": "WhatsApp Contact"
                      },
                      "actionStatus": "PotentialActionStatus"
                    },
                    {
                      "@type": "ContactAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "tel:6363692124",
                        "name": "Phone Contact"
                      },
                      "actionStatus": "PotentialActionStatus"
                    }
                  ],
                  "hasPart": [
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#overview",
                      "name": "Overview",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#pricing",
                      "name": "Pricing",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#master-plan",
                      "name": "Master Plan",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#floor-plan",
                      "name": "Floor Plan",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#amenities",
                      "name": "Amenities",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#location",
                      "name": "Location",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://mahindragoodhost.co.in/#developer",
                      "name": "Developer",
                      "isPartOf": {"@id": "https://mahindragoodhost.co.in/#website"}
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <UnlockProvider>
          {children}
        </UnlockProvider>
      </body>
    </html>
  )
}



import './globals.css'