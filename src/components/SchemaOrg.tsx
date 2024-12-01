import React from 'react';
import { useLocation } from 'react-router-dom';

const SchemaOrg = () => {
  const location = useLocation();
  const currentUrl = `https://emojicollection.net${location.pathname}`;

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "emojicollection.net",
    "url": "https://emojicollection.net",
    "description": "Discover and copy the perfect emoji combinations for every occasion. Browse our curated collection of emojis for social media, messages, and digital communication.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://emojicollection.net/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "emojicollection.net",
    "url": "https://emojicollection.net",
    "logo": "https://emojicollection.net/logo.png",
    "sameAs": [
      "https://twitter.com/emojicollection",
      "https://facebook.com/emojicollection",
      "https://instagram.com/emojicollection"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@emojicollection.net",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://emojicollection.net"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": location.pathname.split('/')[1] || 'Home',
      "item": currentUrl
    }]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
};

export default SchemaOrg;