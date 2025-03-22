import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UnlockProvider } from "@/context/UnlockContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Function to generate structured data
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://mahindragoodhost.co.in/#organization",
        "name": "Mahindra Lifespaces",
        "url": "https://mahindragoodhost.co.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mahindragoodhost.co.in/mahindra-lifespaces-logo.png", // Use a more specific filename
          "width": 600,  // Add width and height
          "height": 60,
        },
        "sameAs": [
          "https://www.facebook.com/mahindralifespaces",
          "https://twitter.com/MLifespaces",
          "https://www.linkedin.com/company/mahindra-lifespaces",
        ],
      },
      {
        "@type": "Apartment",
        "@id": "https://mahindragoodhost.co.in/#apartment",
        "name": "Mahindra Good Host",
        "description":
          "Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra. Starting from ₹2.30 Cr*. Net-Zero Energy Homes, IGBC Certified.",
        "url": "https://mahindragoodhost.co.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Singasandra, near Basapura Lake",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560068",
          "addressCountry": "IN",
          "latitude": 12.8711, // Example latitude - replace with actual
          "longitude": 77.6433, // Example longitude - replace with actual
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Net-Zero Energy Flats",
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "IGBC Certified Homes",
          },
        ],
        "numberOfRooms": "3-4",
        "floorSize": {
          "@type": "QuantitativeValue",
          "unitText": "sqft", // Use a more common unit
          "value": 2000, // Example value - replace with actual
        },
        "numberOfAvailableUnits": 120,
        "propertyType": "Apartment",
        "lowPrice": 23000000,
        "highPrice": 35000000,
        "priceCurrency": "INR",
        "priceValidUntil": "2024-12-31", // Use ISO 8601 format
        "offers": {
          "@type": "Offer",
          "price": 23000000,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
        },
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://mahindragoodhost.co.in/#complex",
        "name": "Mahindra Good Host",
        "numberOfAccommodationUnits": 120,
        "numberOfBuildings": 1,
        "numberOfFloors": 24,
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Sustainable Lifestyle",
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Eco-friendly Development",
          },
        ],
        "branchCode": "Singasandra",
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
            "areaServed": ["Bangalore"],
            "availableLanguage": ["en", "hi", "kn"], // Use ISO 639-1 language codes
          },
        ],
        "sameAs": ["https://wa.me/916363692124"],
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
              "name": "WhatsApp Contact",
            },
            "actionStatus": "PotentialActionStatus",
          },
          {
            "@type": "ContactAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "tel:6363692124",
              "name": "Phone Contact",
            },
            "actionStatus": "PotentialActionStatus",
          },
        ],
        "hasPart": [
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#overview",
            "name": "Overview",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#pricing",
            "name": "Pricing",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#master-plan",
            "name": "Master Plan",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#floor-plan",
            "name": "Floor Plan",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#amenities",
            "name": "Amenities",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#location",
            "name": "Location",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
          {
            "@type": "WebPage",
            "@id": "https://mahindragoodhost.co.in/#developer",
            "name": "Developer",
            "isPartOf": { "@id": "https://mahindragoodhost.co.in/#website" },
          },
        ],
      },
    ],
  };
};

export const metadata: Metadata = {
  title: "Mahindra Good Host | Luxury 3, 3.5 & 4 BHK Apartments in Singasandra, Bangalore",
  description:
    "Explore Mahindra Good Host - Ultra-Luxury 3, 3.5 & 4 BHK Apartments in Singasandra. IGBC Certified, Net-Zero Energy Homes starting from ₹2.30 Cr*. Book a site visit today!",
  generator: "Mahindra Lifespaces",
  metadataBase: new URL("https://mahindragoodhost.co.in"),
  keywords: [
    "Mahindra Good Host Bangalore",
    "Luxury Apartments Singasandra",
    "3 BHK Flats in Bangalore",
    "4 BHK Apartments Singasandra",
    "Premium Apartments Near Basapura Lake",
    "IGBC Certified Homes Bangalore",
    "Net-Zero Energy Apartments",
    "Mahindra Lifespaces Projects",
    "Luxury Real Estate Bangalore",
    "Sustainable Living Spaces Bangalore",
    "New Launch Apartments Singasandra",
    "Green Homes Bangalore",
    "3.5 BHK Flats in Bangalore",
    "Mahindra Good Host Price",
    "Mahindra Good Host Floor Plan",
    "Mahindra Good Host Location",
    "Mahindra Good Host Amenities",
  ],
  authors: [{ name: "Mahindra Lifespaces", url: "https://www.mahindragoodhost.co.in" }],
  creator: "Mahindra Lifespaces",
  publisher: "Mahindra Lifespaces",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahindra Good Host | Luxury 3, 3.5 & 4 BHK Apartments in Singasandra, Bangalore",
    description:
      "Discover Mahindra Good Host - Ultra-Luxury, IGBC Certified 3, 3.5 & 4 BHK Apartments in Singasandra. Net-Zero Energy Homes starting from ₹2.30 Cr*. Explore floor plans, amenities & location.",
    type: "website",
    siteName: "Mahindra Good Host",
    locale: "en_IN",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Mahindra Good Host Luxury Apartments in Singasandra, Bangalore",
        type: "image/png",
      },
    ],
    url: "https://mahindragoodhost.co.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahindra Good Host | Luxury 3, 3.5 & 4 BHK Apartments in Singasandra, Bangalore",
    description:
      "Explore Mahindra Good Host - Ultra-Luxury, IGBC Certified 3, 3.5 & 4 BHK Apartments in Singasandra. Net-Zero Energy Homes starting from ₹2.30 Cr*. Book a site visit today!",
    images: ["/banner.png"],
    creator: "@MLifespaces",
    site: "@MLifespaces",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your code
    yandex: "YOUR_YANDEX_VERIFICATION_CODE", // Replace with your code
    yahoo: "YOUR_YAHOO_VERIFICATION_CODE", // Replace with your code
  },
  category: "Real Estate",
  classification: "Luxury Residential Property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <UnlockProvider>{children}</UnlockProvider>
      </body>
    </html>
  );
}

