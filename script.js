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
    category: ["shingles"],
    note: "Cedar roof installation manual and technical resources.",
    lastChecked: "2026-04-24",
    links: [
      ["Roof installation manual", "https://www.cedarbureau.org/installation/roof-installation-manual/"],
      ["Installation resources", "https://www.cedarbureau.org/installation/"],
      ["Manual images and files", "https://www.cedarbureau.org/installation/roof-installation-manual/"]
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
