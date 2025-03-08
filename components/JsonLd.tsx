export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mount Hire LLC",
    "url": "https://mounthire.com",
    "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountHireLLClogo.jpg-Jk6L7zE8lW6NthRmByg2FNc466hSEz.jpeg",
    "description": "Boost your IT career with expert guidance in Software Engineering, Data Analysis, and Full-Stack Development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-318-267-7421",
      "contactType": "customer service",
      "email": "hr@mounthire.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/mounthire",
      "https://twitter.com/mounthire",
      "https://facebook.com/mounthire"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 