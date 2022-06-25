import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pw3t0k2luc01xl02i1g5w4/master",
  headers: {
    'Authorization':
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxNjI1MTEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHB3M3QwazJsdWMwMXhsMDJpMWc1dzQvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOTJkNzczMjgtNTAwMS00MzRlLWE0YWEtZTFiZTc1MTg5NjQ4IiwianRpIjoiY2w0dHdlY3Q5MGFhcDAxdW5heHo1ZWQ4ZSJ9.s9okEdB41FTQ7rr3pqRLzlilZNg_9rN_dZObvsiTwxvotIcRTJatBmqbmZpVJKqQuMfNwQNt5dhLEdPOzTAXBu8vG9I4iT_IqQ7sT5NfNCPiaSgYn2-wzIJced2eGZuBrQYrXUHpwZcWk5ySwsulKrTMieAJiN8MTplqwsdVYa4Nw99tHiuKbIN3eyl07GblWCCNT-27M93hU7UxVOKehw1JOGYh-l8XI3bB2w8jt65HtD5yls4Fhs1DW5SdBgbsDrQdmEZnleWk0JHrteVFpd3Q9SMdABDZZzddb8cYEueKmKe6AXD_We4-asZ5mMD_pOQLM6DLk6yf8MgFV40h4c3ix2nMUulfTL9W0JX7aZOyjoAfNVDUTgvdmHg6vC_d4fzvBolAzVpqVWysl-ja32zsOGhKWXsPNLecIQ7B22lOUOqszwI7DpxdYytyCB3tZiXedHvvMK39Wii_CxaUlSDZXaD1_nG78nDMi6bGhaXezPozaq4iqPIV_PxsjvvYBxJlQ1yymUPn1asI1q4VbEexiwtlOtAd59YkR13LhoiSUEDcTByOAHDlQJJp56fyvVBrTN1A6EjtIOrBmv8QmJb-oasnTvQFe7TdqqJYn3B_deUd7GXgCiwkqsl0CUcaXo69-WgdV1oyI9QtDMcG1YDqfp5dK3nD5RV2tmWBO4Q",
  },
  cache: new InMemoryCache(),
});
