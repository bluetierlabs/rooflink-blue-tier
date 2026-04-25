const resources = [
  {
    manufacturer: "GAF",
    category: ["shingles", "warranty"],
    note: "Residential roofing resources, installation instructions, warranty, and technical documents.",
    lastChecked: "2026-04-24",
    links: [
      ["Installation instructions and documents", "https://www.gaf.com/en-us/document-library"],
      ["Warranty information", "https://www.gaf.com/en-us/for-homeowners/warranties"],
      ["Terms of use", "https://www.gaf.com/en-us/about-us/privacy-legal/terms-of-use"]
    ]
  },
  {
    manufacturer: "CertainTeed",
    category: ["shingles", "warranty"],
    note: "Shingle Applicator's Manual resources, warranty information, and roofing documents.",
    lastChecked: "2026-04-24",
    links: [
      ["Roofing documents", "https://www.certainteed.com/documents-downloads/roofing"],
      ["Warranty information", "https://www.certainteed.com/documents-downloads/warranty-information"],
      ["Roofing education and resources", "https://www.certainteed.com/roofing"]
    ]
  },
  {
    manufacturer: "Owens Corning",
    category: ["shingles", "warranty"],
    note: "Shingle installation, product documents, and warranty resources.",
    lastChecked: "2026-04-24",
    links: [
      ["Roofing documents and resources", "https://www.owenscorning.com/en-us/roofing/documents"],
      ["Warranty information", "https://www.owenscorning.com/en-us/roofing/warranty"],
      ["Roofing products", "https://www.owenscorning.com/en-us/roofing"]
    ]
  },
  {
    manufacturer: "IKO",
    category: ["shingles", "commercial", "warranty"],
    note: "Residential and commercial document libraries with product data, application guides, and technical resources.",
    lastChecked: "2026-04-24",
    links: [
      ["Residential documents", "https://www.iko.com/na/document-library/"],
      ["Commercial technical document library", "https://www.iko.com/comm/documents/"],
      ["Warranty resources", "https://www.iko.com/na/roofing-professionals/warranties/"]
    ]
  },
  {
    manufacturer: "PABCO Roofing Products",
    category: ["shingles", "warranty"],
    note: "Document library with technical data sheets, brochures, bulletins, and installation-related documents.",
    lastChecked: "2026-04-24",
    links: [
      ["Technical documents", "https://pabcoroofing.com/technical-documents/"],
      ["Warranty information", "https://pabcoroofing.com/warranty/"],
      ["Roofing products", "https://pabcoroofing.com/products/"]
    ]
  },
  {
    manufacturer: "TAMKO Building Products",
    category: ["shingles", "warranty"],
    note: "Residential shingle documents, application instructions, warranty resources, and TAMKO roofing product information.",
    lastChecked: "2026-04-25",
    links: [
      ["Documents and application instructions", "https://www.tamko.com/professionals/download-gallery/documents"],
      ["Warranty center", "https://www.tamko.com/warranty-center"],
      ["Residential roofing shingles", "https://www.tamko.com/shinglecolors"]
    ]
  },
  {
    manufacturer: "Malarkey Roofing Products",
    category: ["shingles", "commercial", "warranty"],
    note: "Residential and commercial roofing documents, installation guides, technical resources, and warranty information.",
    lastChecked: "2026-04-25",
    links: [
      ["Documents and resources", "https://www.malarkeyroofing.com/documents-resources/"],
      ["Installation guides", "https://www.malarkeyroofing.com/documents-resources/?category=installation-guides&sort=DESC"],
      ["Warranty information", "https://www.malarkeyroofing.com/warranties/"]
    ]
  },
  {
    manufacturer: "Atlas Roofing",
    category: ["shingles", "warranty"],
    note: "Asphalt shingle installation instructions, warranty registration, and Signature Select system resources.",
    lastChecked: "2026-04-25",
    links: [
      ["Roof shingles installation instructions", "https://www.atlasroofing.com/roof-shingles-installation-instructions"],
      ["Shingles warranty", "https://www.atlasroofing.com/shingles-warranty"],
      ["Roof shingles", "https://www.atlasroofing.com/roof-shingles"]
    ]
  },
  {
    manufacturer: "Union Corrugating",
    category: ["metal"],
    note: "Metal roofing resources and MyMetalRoof install app references.",
    lastChecked: "2026-04-24",
    links: [
      ["Resources", "https://www.unioncorrugating.com/resources/"],
      ["Installation guides", "https://www.unioncorrugating.com/resources/installation-guides/"],
      ["MyMetalRoof app", "https://apps.apple.com/us/app/mymetalroof-install-wizard/id983027964"]
    ]
  },
  {
    manufacturer: "Cedar Shake & Shingle Bureau",
    category: ["cedar", "shingles"],
    note: "Cedar roof installation manual and technical resources.",
    lastChecked: "2026-04-24",
    links: [
      ["Roof installation manual", "https://www.cedarbureau.org/installation/roof-installation-manual/"],
      ["Installation resources", "https://www.cedarbureau.org/installation/"],
      ["Manual images and files", "https://www.cedarbureau.org/installation/roof-installation-manual/"]
    ]
  },
  {
    manufacturer: "Brava Roof Tile",
    category: ["cedar", "synthetic", "slate", "warranty"],
    note: "Composite cedar shake, synthetic slate, and tile product pages with installation/application documents and warranty registration.",
    lastChecked: "2026-04-25",
    links: [
      ["Synthetic cedar shake resources", "https://www.bravarooftile.com/roof-tiles/cedar-shake-roof/"],
      ["Synthetic slate resources", "https://www.bravarooftile.com/roof-tiles/old-world-slate/"],
      ["Warranty registration", "https://www.bravarooftile.com/homeowners/warranty-registration/"]
    ]
  },
  {
    manufacturer: "EcoStar",
    category: ["cedar", "synthetic", "slate", "warranty"],
    note: "Synthetic steep-slope slate and shake roofing product information, including technical performance and warranty references.",
    lastChecked: "2026-04-25",
    links: [
      ["Synthetic roofing products", "https://ecostarllc.com/products/"],
      ["Synthetic slate roof tiles", "https://ecostarllc.com/products/slate-tiles/"],
      ["Synthetic shake roof tiles", "https://ecostarllc.com/products/shake-tiles/"]
    ]
  },
  {
    manufacturer: "Enviroshake",
    category: ["cedar", "synthetic", "slate", "warranty"],
    note: "Composite cedar shake, shingle, and slate alternatives with installation guides, training requirements, and lifetime warranty resources.",
    lastChecked: "2026-04-25",
    links: [
      ["Installation guides and training", "https://www.enviroshake.com/installation/"],
      ["Enviroshake product resources", "https://www.enviroshake.com/enviroshake-product/"],
      ["Lifetime warranty", "https://www.enviroshake.com/lifetime-warranty/"]
    ]
  },
  {
    manufacturer: "CEDUR",
    category: ["cedar", "synthetic", "warranty"],
    note: "Synthetic cedar shake roofing resources, technical information, installation recommendations, and warranty support.",
    lastChecked: "2026-04-25",
    links: [
      ["Technical information", "https://www.cedur.com/technical-information-about-our-synthetic-cedar-wood-shake-roofs"],
      ["Product information", "https://www.cedur.com/information"],
      ["Synthetic cedar shake roofing", "https://www.cedur.com/"]
    ]
  },
  {
    manufacturer: "DaVinci Roofscapes",
    category: ["cedar", "synthetic", "slate", "warranty"],
    note: "Composite slate and shake roofing resources with official installation guides and warranty references.",
    lastChecked: "2026-04-25",
    links: [
      ["Slate installation guide", "https://www.davinciroofscapes.com/wp-content/uploads/2018/11/Slate-Installation-Guide.pdf"],
      ["Shake installation guide", "https://www.davinciroofscapes.com/wp-content/uploads/2019/05/DaVinci_Shake_Installation-Guide_05-2019.pdf"],
      ["Inspire Slate product and warranty info", "https://www.westlakeroyalbuildingproducts.com/roofing/davinci-roofscapes/inspire-slate"]
    ]
  },
  {
    manufacturer: "Anchor Products",
    category: ["commercial"],
    note: "Rooftop attachment product pages with data sheets, drawings, and installation guidebook/video links.",
    lastChecked: "2026-04-24",
    links: [
      ["U2600-APP product page", "https://www.anchorp.com/products/u-anchor-2000-series/u2600-app/"],
      ["Products", "https://www.anchorp.com/products/"],
      ["Resources", "https://www.anchorp.com/resources/"]
    ]
  }
];

const directory = document.querySelector("#directory");
const search = document.querySelector("#search");
const filterButtons = document.querySelectorAll("[data-filter]");
let activeFilter = "all";

function render() {
  const query = search.value.trim().toLowerCase();
  const filtered = resources.filter((item) => {
    const haystack = [
      item.manufacturer,
      item.note,
      item.category.join(" "),
      item.links.map(([label]) => label).join(" ")
    ].join(" ").toLowerCase();

    const matchesQuery = !query || haystack.includes(query);
    const matchesFilter = activeFilter === "all" || item.category.includes(activeFilter);

    return matchesQuery && matchesFilter;
  });

  directory.innerHTML = filtered.map((item) => `
    <article class="card">
      <div class="tags">
        ${item.category.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <h3>${item.manufacturer}</h3>
      <p>${item.note}</p>
      <p class="meta">Last checked: ${item.lastChecked}</p>
      <div class="links">
        ${item.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`).join("")}
      </div>
    </article>
  `).join("") || "<p>No resources found. Try a different search.</p>";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

search.addEventListener("input", render);
filterButtons[0].classList.add("active");
render();
