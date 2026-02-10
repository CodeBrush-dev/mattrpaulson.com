// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.mattrpaulson.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.mattrpaulson.com/","title_tag":"Music Production Atlanta & Mixing Services | Matt Paulson","meta_description":"Atlanta-based worship music producer and recording engineer offering post-production music, mixing, drum tracking, vocal tuning and mastering services."},{"page_url":"https://www.mattrpaulson.com/services","title_tag":"Mixing Services Atlanta & Drum Tracking | Matt Paulson","meta_description":"Atlanta audio production services: mixing, drum tracking, vocal tuning, programming and mastering services for worship, pop, hip-hop and contemporary music."},{"page_url":"https://www.mattrpaulson.com/about","title_tag":"Recording Engineer Atlanta & Worship Producer | Matt Paulson","meta_description":"Atlanta recording and mixing engineer specializing in contemporary worship music and music production. Full Sail–trained worship music producer for modern artists."},{"page_url":"https://www.mattrpaulson.com/contact","title_tag":"Audio Production Atlanta & Mastering Services | Matt Paulson","meta_description":"Contact Atlanta worship music producer and recording engineer Matt Paulson for mixing services, vocal tuning, drum tracking and professional post-production music."}],"keywords":["mixing services atlanta","recording engineer atlanta","post-production music","worship music producer","audio production atlanta","vocal tuning services","drum tracking atlanta","mastering services atlanta","contemporary worship music","music production atlanta"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.mattrpaulson.com/#service",
  "name": "Mixing, Recording, and Post-Production Services by Matt Paulson",
  "url": "https://www.mattrpaulson.com/",
  "description": "Matt Paulson is an Atlanta-based mixing engineer, drummer, producer, and recording/post-production specialist focused on contemporary worship, pop, hip-hop and related genres. Services include song mixing, drum tracking, vocal tuning, programming, and mastering.",
  "image": [
    "https://static.wixstatic.com/media/4cafda_eea47e1686604e3c8b876e22e994b412%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4cafda_eea47e1686604e3c8b876e22e994b412%7Emv2.png",
    "https://static.wixstatic.com/media/4cafda_457f8feb715d4fbfbfdcf24da55af8d1~mv2.png/v1/fill/w_116,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Grayscale%20on%20Transparent.png"
  ],
  "provider": {
    "@type": "Person",
    "@id": "https://www.mattrpaulson.com/#person",
    "name": "Matt Paulson",
    "url": "https://www.mattrpaulson.com/",
    "jobTitle": "Mixing Engineer, Drummer, Producer",
    "description": "Atlanta-based music producer, recording and mixing engineer specializing in contemporary worship, pop, hip-hop and similar genres. Graduate of Full Sail University with a Bachelor of Science in Audio Production and an Associate of Science in Music Production.",
    "image": "https://static.wixstatic.com/media/4cafda_eea47e1686604e3c8b876e22e994b412%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4cafda_eea47e1686604e3c8b876e22e994b412%7Emv2.png",
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Full Sail University",
        "sameAs": "https://www.fullsail.edu/"
      }
    ]
  },
  "areaServed": {
    "@type": "Place",
    "name": "Atlanta, GA"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Audio Production and Post-Production Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Song Mixing",
        "description": "Professional mixing for music projects.",
        "price": "350",
        "priceCurrency": "USD",
        "itemOffered": {
          "@type": "Service",
          "name": "Mixing"
        }
      },
      {
        "@type": "Offer",
        "name": "Drum Tracking",
        "description": "Custom drum tracking for your songs.",
        "price": "75",
        "priceCurrency": "USD",
        "itemOffered": {
          "@type": "Service",
          "name": "Drum Tracking"
        }
      },
      {
        "@type": "Offer",
        "name": "Vocal Tuning",
        "description": "Detailed vocal tuning for studio recordings.",
        "price": "40",
        "priceCurrency": "USD",
        "itemOffered": {
          "@type": "Service",
          "name": "Vocal Tuning"
        }
      },
      {
        "@type": "Offer",
        "name": "Programming",
        "description": "Programming services for productions.",
        "price": "100",
        "priceCurrency": "USD",
        "itemOffered": {
          "@type": "Service",
          "name": "Programming"
        }
      },
      {
        "@type": "Offer",
        "name": "Mastering",
        "description": "Mastering services for final mixes.",
        "price": "50",
        "priceCurrency": "USD",
        "itemOffered": {
          "@type": "Service",
          "name": "Mastering"
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Will Tompkins"
      },
      "reviewBody": "I've worked with Matt for several years now. His technical skill and speed is beyond belief and his creativity expands by the day! I've had the privilege of watching and listening to his work and it's an art! He never stops learning and expanding his ability. He is a great blend of fundamental techniques and out of the box methods! I could do this all day but his drum and mix work will speak for themselves!",
      "itemReviewed": {
        "@id": "https://www.mattrpaulson.com/#service"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Tyler Hartman"
      },
      "reviewBody": "Matt is rock solid. He has taught me a ton. His work ethic is amazing and he won't stop until the job is finished. I'm very thankful to have crossed paths with him. Not only is he a top notch musician, but the mixes he creates are levels above the competition. He's as willing to learn as he is to teach and always willing to take something away from every song he hears. Thanks for all of your help Matt, I would definitely recommend him to anyone looking to take their music to the next level.",
      "itemReviewed": {
        "@id": "https://www.mattrpaulson.com/#service"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Joseph Molina"
      },
      "reviewBody": "I have known Matt for a couple of months now and there's things you immediately spot in a creative as soon as you meet them that let you know they're valuable. He is: Dependable, Hard working, creative, willing to lean in and listen when needed but assertive enough to take reigns when needed. On top of that as a musician and creative myself you want to be around guys who are not proud or arrogant. Matt is not. Wether it be drumming or producing for you he's confident enough in his art that he will do his best work while making you feel as if you have a new found friend in him. Hire him now.",
      "itemReviewed": {
        "@id": "https://www.mattrpaulson.com/#service"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David Mendoza"
      },
      "reviewBody": "As a production manager and professional live mix engineer, a client & a friend, I would highly recommend Matt on the other end of the audio-snake for post-production. He has major attention to detail on all projects he works on and will work his absolute best to make his clients happy. One of the major advantages that you will receive with working with Matt is he understands music theory and how to best incorporate that into mixing down projects, he has mastered his craft & has cutting edge skills set! For a successful project & top-notch quality, save yourself the time, Matt is your guy!",
      "itemReviewed": {
        "@id": "https://www.mattrpaulson.com/#service"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Scottie P."
      },
      "reviewBody": "I have known and worked with Matt for the past 2 years. He is a super, talented and professional sound engineer and drummer. He has the technical knowledge, but also a great feel for sound. His mixing is top notch. Do yourself a favor and go with Matt if you want your music to stand out from the crowd!",
      "itemReviewed": {
        "@id": "https://www.mattrpaulson.com/#service"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
