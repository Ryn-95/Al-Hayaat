// Reusable component to inject JSON-LD structured data
// Usage: <SchemaOrg data={buildFuneralHomeSchema({ city: "Rouen" })} />

interface SchemaOrgProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Record<string, any>[];
}

export default function SchemaOrg({ data }: SchemaOrgProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
