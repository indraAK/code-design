export default function Head({ params }) {
  return (
    <>
      <title>
        {` The Code Design |
        ${
          params.slug.toString().charAt(0).toUpperCase() +
          params.slug.toString().toLowerCase().slice(1)
        }
        `}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Level up your coding skills with hands-on design challenges."
      />
      <link rel="icon" href="/code-the-design.svg" />
      <meta
        name="keywords"
        content="code the design, design with figma, design web, design challange"
      />
    </>
  );
}
