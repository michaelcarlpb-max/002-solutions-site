/**
 * Schema.org JSON-LD helpers.
 *
 * Every page emits a shared base graph (Organization, Person, WebSite) plus
 * optional page-specific schemas, all inside a single @graph node. Google and
 * other crawlers walk the graph via @id references to build a structured
 * understanding of the site.
 */

export const SITE_URL = 'https://002solutions.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#michael`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Site-level entities emitted on every page. These describe the business,
 * the person behind it, and the website itself. Page-specific schemas
 * reference these via @id.
 */
export function baseGraph() {
  return [
    {
      '@type': 'ProfessionalService',
      '@id': ORG_ID,
      name: '002 Solutions',
      alternateName: '002 Solutions — Technology Consulting',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 1024,
        height: 1024,
      },
      image: `${SITE_URL}/og.png`,
      description:
        'Freelance IT consulting, iOS development, AI automation, and general technology advisory for small businesses and founders.',
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'State', name: 'Florida' },
        { '@type': 'Country', name: 'United States' },
      ],
      knowsAbout: [
        'iOS app development',
        'SwiftUI',
        'AI automation',
        'Claude API integration',
        'IT consulting',
        'Backup and disaster recovery',
        'Technical advisory',
        'Small business technology',
      ],
      priceRange: '$$',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'michael.carlpb@gmail.com',
        contactType: 'Customer Service',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Michael Carl',
      givenName: 'Michael',
      familyName: 'Carl',
      jobTitle: 'Independent Technologist',
      url: `${SITE_URL}/about`,
      worksFor: { '@id': ORG_ID },
      description:
        'Independent technologist based in Tampa, Florida. Ships iOS apps, AI tooling, and IT infrastructure for small businesses and founders.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      knowsAbout: [
        'Swift',
        'SwiftUI',
        'iOS development',
        'AI integration',
        'LLM applications',
        'IT consulting',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: '002 Solutions',
      description:
        'Practical technology consulting — iOS development, AI automation, and IT infrastructure for small businesses and founders.',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ];
}

/**
 * Build a BreadcrumbList from an ordered list of crumbs.
 * The last crumb is the current page.
 */
export function breadcrumb(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Render a full @graph JSON-LD document from the base entities + extras.
 * Returns a string, ready to go inside <script type="application/ld+json">.
 *
 * The `<\/` escaping defends against stray </script> sequences inside
 * string values prematurely closing the script tag.
 */
export function renderJsonLd(extras: unknown[] = []): string {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [...baseGraph(), ...extras],
  };
  return JSON.stringify(graph).replace(/<\//g, '<\\/');
}
