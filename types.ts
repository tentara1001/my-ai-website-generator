export interface WebsiteTemplate {
  templateName: string;
  description: string;
  colorPalette: string[];
  fontPairing: {
    heading: string;
    body: string;
  };
  sections: string[];
  heroImagePrompt: string;
}