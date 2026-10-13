export default function BreadcrumbSchema({ items }) {
  const baseUrl = 'https://www.apextechplus.com';

  const fullItems = [
    { name: 'Home', path: '/' },
    ...items,
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => {
      const fullUrl = item.path === '/' 
        ? baseUrl 
        : `${baseUrl}${item.path.startsWith('/') ? item.path : `/${item.path}`}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
