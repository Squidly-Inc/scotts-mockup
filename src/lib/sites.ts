// Sister-site URLs — single source of truth for cross-brand links.
// Production builds (real domains) link to the real sister domains;
// github.io preview builds keep linking to the sister previews.
const PREVIEW = (import.meta.env.SITE ?? "").includes("github.io");

export const SITES = PREVIEW
  ? {
      hospitality: "https://squidly-inc.github.io/scotts-hospitality",
      restaurant: "https://squidly-inc.github.io/scotts-mockup",
      ballroom: "https://squidly-inc.github.io/scotts-ballroom",
      provisions: "https://squidly-inc.github.io/scotts-provisions",
      socialClub: "https://scottssocialclub.com",
    }
  : {
      hospitality: "https://scottshospitality.com",
      restaurant: "https://scottsseafoodsj.com",
      ballroom: "https://scottsballroom.com",
      provisions: "https://scottsprovisions.com",
      socialClub: "https://scottssocialclub.com",
    };
