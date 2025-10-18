// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = "https://nitonabbc.org";
export const SITE_TITLE = "仁戸名聖書バプテスト教会";
export const SITE_DESCRIPTION =
  "仁戸名聖書バプテスト教会は、1963年の創設以来、60年以上にわたり地域の皆さまとともに歩み、キリストの愛と希望を分かち合ってきた教会です。";

// Contact form endpoint
const endpoint = import.meta.env.PUBLIC_CONTACT_ENDPOINT;

if (!endpoint) {
  console.warn("PUBLIC_CONTACT_ENDPOINT is not defined");
}

export const CONTACT_ENDPOINT = endpoint || "";
