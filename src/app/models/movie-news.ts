export interface MovieNews {
  response: {
    docs: Array<{
      abstract: string;
      web_url: string;
      snippet: string;
      lead_paragraph: string;
      pub_date: Date;
      section_name: string;
      multimedia: Array<{
        type: string;
        url: string;
        width: number;
        height: number;
      }>;
      headline: {
        main: string;
        print_headline: string;
      };
    }>;
  };
}
