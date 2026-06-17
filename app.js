const buyerProfiles = [
  {
    title: "Lifestyle Buyer",
    body: "Wants beauty, food, culture, seasonal use, and emotional connection.",
    image: "assets/profile-lifestyle-buyer.png",
    imageAlt: "Italian terrace table with local food, wine, olive branches, and a countryside village view"
  },
  {
    title: "Relocation Buyer",
    body: "Wants to spend substantial time in Italy and needs guidance on region, services, accessibility, and local life.",
    image: "assets/profile-relocation-buyer.png",
    imageAlt: "Walkable Italian town square with cafe tables, market produce, stone buildings, and local services"
  },
  {
    title: "Legacy Buyer",
    body: "Wants a family property, estate, vineyard, countryside home, historic villa, or generational asset.",
    image: "assets/profile-legacy-buyer.png",
    imageAlt: "Historic Italian countryside villa surrounded by vineyard rows, cypress trees, and estate grounds"
  },
  {
    title: "Ultra-High-Net-Worth Buyer",
    body: "Interested in privacy, authenticity, prestige, unique properties, and possibly tax-residency planning.",
    image: "assets/profile-uhnw-buyer.png",
    imageAlt: "Private cypress-lined drive and stone gate leading to a secluded historic Italian estate"
  },
  {
    title: "Investment-Oriented Buyer",
    body: "Wants rental potential, appreciation, tourism appeal, or mixed lifestyle/income use.",
    image: "assets/profile-investment-buyer.png",
    imageAlt: "Guest-ready Italian apartment bedroom with balcony view over historic rooftops"
  },
  {
    title: "Restoration Buyer",
    body: "Interested in historic homes, farmhouses, villages, or renovation projects, but needs risk evaluation.",
    image: "assets/profile-restoration-buyer.png",
    imageAlt: "Historic Italian stone farmhouse restoration with careful renovation details and courtyard"
  }
];

const regions = [
  ["Tuscany", "Countryside, wine towns, historic cities, villa life.", "Legacy estate, beauty, culture, food and wine.", "Villas, farmhouses, vineyards, restored estates.", "Airports and rail access vary by subregion.", "Classic Italian lifestyle with strong international familiarity.", "Verify condition, zoning, renovation scope, and local service access.", "assets/region-tuscany.png", "Tuscan countryside with vineyard rows, cypress trees, stone farmhouse, and historic hill town"],
  ["Umbria", "Quieter countryside, hill towns, slower living.", "Authenticity, privacy, value relative to better-known areas.", "Farmhouses, country estates, historic homes.", "Good central location, but some areas need careful drive-time review.", "Buyers seeking understated Italy and less visibility.", "Verify access, utilities, restoration quality, and year-round livability.", "assets/region-umbria.png", "Umbrian countryside with olive groves, pale stone hill town, and rural farmhouse"],
  ["Lake Como", "Lake lifestyle, dramatic scenery, privacy, services.", "Prestige, water views, access to Milan and Switzerland.", "Lake villas, apartments, hillside estates.", "Strong airport access through Milan, but local roads can be constrained.", "Privacy, scenery, and high-service lifestyle.", "Verify access, parking, lakefront rights, maintenance, and seasonal congestion.", "assets/region-lake-como.png", "Lake Como waterfront villa with private dock, village shoreline, and steep mountain backdrop"],
  ["Lake Garda", "Lake living with varied towns, sport, and family appeal.", "Lifestyle balance, accessibility, and northern Italy base.", "Lake homes, apartments, villas, hillside properties.", "Convenient for Verona, Milan, Venice, and regional airports.", "Families, lake lifestyle, and extended stays.", "Verify micro-location, tourism pressure, access, and management needs.", "assets/region-lake-garda.png", "Lake Garda waterfront town with sailboats, windsurfing, broad blue water, and mountain backdrop"],
  ["Veneto", "Historic cities, countryside, wine regions, design culture.", "Culture, architecture, and access to Venice or Verona.", "City apartments, villas, country houses, wine estates.", "Strong airports and rail from key cities.", "Buyers who want culture and connectivity.", "Verify preservation rules, flood exposure where relevant, and renovation limits.", "assets/region-veneto.png", "Venetian canal with historic palazzi, arched bridge, and preserved stone architecture"],
  ["Sicily", "Coastal towns, historic cities, countryside, strong identity.", "Authenticity, culture, climate, and distinctive properties.", "Palazzi, villas, coastal homes, farmhouses, restoration projects.", "Airport access is strong near major cities, mixed in rural areas.", "Buyers seeking character, climate, and regional depth.", "Verify title, condition, infrastructure, restoration logistics, and local management.", "assets/region-sicily.png", "Sicilian coastal town with historic palazzi, turquoise sea, fishing boats, prickly pear, and Mount Etna"],
  ["Puglia", "Masserie, coastal towns, olive groves, relaxed lifestyle.", "Authentic southern Italy, architecture, food, and seasonal use.", "Masserie, trulli, villas, coastal homes, farmhouses.", "Airport access through Bari and Brindisi, with drive-time variation.", "Lifestyle buyers, hospitality concepts, and countryside estates.", "Verify planning rules, water, access roads, restoration scope, and seasonal demand.", "assets/region-puglia.png", "Puglian trulli and whitewashed hill town with ancient olive trees and dry-stone walls"],
  ["Amalfi Coast", "Dramatic coastal setting, limited supply, high visibility.", "Iconic coastline, views, privacy, and lifestyle prestige.", "Coastal villas, apartments, hospitality assets.", "Access can be difficult; travel logistics matter.", "Buyers prioritizing rare coastal location and views.", "Verify access, parking, maintenance, permits, and operating restrictions.", "assets/region-amalfi-coast.png", "Amalfi Coast cliffside village with terraced lemon groves, stone steps, and deep sea views"],
  ["Liguria", "Riviera lifestyle, coastal towns, hillside privacy.", "Sea, climate, access to France and northern Italy.", "Coastal apartments, villas, historic homes.", "Good rail and regional airport options depending on town.", "Coastal lifestyle without defaulting to southern Italy.", "Verify hillside access, building condition, moisture, and parking.", "assets/region-liguria.png", "Ligurian Riviera harbor with pastel facades, green shutters, small boats, and hillside villas"],
  ["Piedmont", "Wine, countryside, historic towns, understated elegance.", "Food, wine, privacy, and legacy ownership.", "Vineyards, estates, farmhouses, historic homes.", "Turin and Milan can be practical depending on area.", "Buyers seeking wine country and discreet authenticity.", "Verify agricultural operations, land obligations, restoration, and seasonal access.", "assets/region-piedmont.png", "Piedmont vineyard hills with a historic castle town and distant Alpine mountains"],
  ["Rome / Lazio", "Historic city access, countryside estates, cultural depth.", "Rome base, family use, culture, and airport access.", "City apartments, villas, country homes, historic properties.", "Strong international access through Rome.", "Buyers who want culture and connectivity.", "Verify building rules, condominium matters, historic restrictions, and traffic logistics.", "assets/region-rome-lazio.png", "Roman Campagna estate with aqueduct arches, umbrella pines, and distant Rome skyline"],
  ["Milan / Lombardy countryside", "Business access, design, lakes, countryside, services.", "Connectivity, privacy, and proximity to Milan.", "Apartments, villas, estates, lake and countryside homes.", "Strong international airport and rail access.", "Buyers needing service depth and northern Italy access.", "Verify commute patterns, privacy, taxes through advisors, and local market liquidity.", "assets/region-milan-lombardy.png", "Restored Lombard cascina estate with canal, manicured grounds, Milan skyline, and distant Alps"]
];

const propertyTypes = [
  ["Historic villas", "Legacy, UHNW, relocation, and cultural buyers.", "Architecture, gardens, history, privacy, and permanence.", "Title, preservation rules, systems, maintenance, access, and staffing.", "High", "Attorney, surveyor/geometra, architect, tax advisor, insurance advisor.", "assets/property-historic-villas-italy.jpg", "Historic Italian villa with formal gardens, arched loggia, and cypress trees"],
  ["Countryside estates", "Lifestyle, legacy, privacy, and long-stay buyers.", "Land, quiet, views, food and wine, family gathering.", "Access, utilities, land obligations, road rights, maintenance, and services.", "Medium", "Attorney, geometra, architect, property manager, tax advisor.", "assets/property-countryside-estates-italy.jpg", "Italian countryside estate with olive trees, gravel drive, stone buildings, and outdoor dining terrace"],
  ["Vineyards and wineries", "Legacy, lifestyle investment, hospitality, and agricultural buyers.", "Wine culture, land, brand potential, and family identity.", "Business operations, licenses, land use, staffing, production, and compliance.", "High", "Attorney, tax advisor, agricultural specialist, accountant, technical surveyor.", "assets/property-vineyards-wineries-italy.jpg", "Italian vineyard estate with wine cellar, barrels, and countryside views"],
  ["Lake homes", "Lifestyle, UHNW, family, and semi-retirement buyers.", "Views, water, services, privacy, and northern Italy access.", "Access, parking, lake rights, maintenance, exposure, and seasonal activity.", "Medium", "Attorney, surveyor/geometra, property manager, insurance advisor.", "assets/property-lake-homes-italy.jpg", "Northern Italian lake home with private dock, classic boat, mountain views, and waterfront terrace"],
  ["Coastal properties", "Lifestyle, hospitality, and seasonal buyers.", "Sea access, climate, views, and memorable family use.", "Permits, access, erosion or exposure, rental rules, maintenance, and parking.", "Medium", "Attorney, technical surveyor, insurance advisor, local property manager.", "assets/property-coastal-properties-italy.jpg", "Italian coastal villa terrace overlooking the Mediterranean Sea"],
  ["Apartments in historic cities", "Relocation, cultural, semi-retirement, and lock-and-leave buyers.", "Walkability, culture, restaurants, services, and low outdoor maintenance.", "Condominium rules, building condition, stairs/elevator, noise, and preservation limits.", "Low", "Attorney, condominium document review, tax advisor, technical inspection.", "assets/property-historic-city-apartments-italy.jpg", "Historic Italian city apartment building near a walkable stone street"],
  ["Restored farmhouses", "Lifestyle, countryside, family, and legacy buyers.", "Character, land, outdoor living, and authentic rural settings.", "Quality of restoration, utilities, road access, heating/cooling, and local services.", "Medium", "Attorney, geometra, architect, inspector, property manager.", "assets/property-restored-farmhouses-italy.jpg", "Restored Italian stone farmhouse with timber pergola, herb garden, and countryside views"],
  ["Renovation properties", "Restoration buyers with time, patience, and risk tolerance.", "Creative control, historic character, and potential value creation.", "Budget realism, permits, contractors, structural condition, timeline, and utilities.", "High", "Attorney, architect, geometra, contractor, tax advisor, project manager.", "assets/property-renovation-properties-italy.jpg", "Italian historic stone property under renovation with scaffolding, roof tiles, and survey equipment"],
  ["Luxury estates", "UHNW, privacy, legacy, and service-oriented buyers.", "Privacy, scale, architectural significance, and rare location.", "Security, staffing, maintenance, technical systems, title, and ownership structure.", "High", "Attorney, tax advisor, surveyor/geometra, architect, insurance, property manager.", "assets/property-luxury-estates-italy.jpg", "Private Italian luxury estate entrance with stone gatehouse, umbrella pines, and secluded grounds"],
  ["Boutique hospitality properties", "Lifestyle-income, family office, and operating-business buyers.", "Brand potential, guest experience, food, wine, design, and place.", "Licenses, operations, staffing, tax, zoning, financials, renovation, and compliance.", "High", "Attorney, accountant, tax advisor, hospitality consultant, technical advisors.", "assets/property-boutique-hospitality-italy.jpg", "Boutique Italian hospitality courtyard with breakfast tables, reception archway, and potted citrus"]
];

const ownershipComplexityBadges = {
  low: {
    src: "assets/ownership-complexity-low-v2.svg",
    alt: "Ownership complexity: Low"
  },
  medium: {
    src: "assets/ownership-complexity-medium-v2.svg",
    alt: "Ownership complexity: Medium"
  },
  high: {
    src: "assets/ownership-complexity-high-v2.svg",
    alt: "Ownership complexity: High"
  }
};

const options = {
  preferredContact: ["Email", "Phone", "WhatsApp", "Zoom"],
  buyerCategory: [
    "Exploring casually",
    "Serious buyer within 12 months",
    "Ready to buy within 3 to 6 months",
    "Relocation or semi-retirement planning",
    "Family legacy property search",
    "Ultra-high-net-worth buyer",
    "Investment/lifestyle hybrid buyer",
    "Advisor, family office, or representative"
  ],
  budget: [
    "Under \u20ac500,000",
    "\u20ac500,000-\u20ac1 million",
    "\u20ac1 million-\u20ac2 million",
    "\u20ac2 million-\u20ac3 million",
    "\u20ac3 million-\u20ac5 million",
    "\u20ac5 million+",
    "Not yet determined"
  ],
  purchaseMethod: ["Cash", "Financing needed", "Combination", "Not sure"],
  fundsAvailable: ["Yes", "Partially", "No", "Prefer to discuss privately"],
  advisorTeam: ["Yes", "No", "Not yet", "Prefer to discuss privately"],
  purchasePurpose: [
    "Vacation home",
    "Retirement or semi-retirement",
    "Full relocation",
    "Family legacy property",
    "Lifestyle investment",
    "Rental income",
    "Vineyard or agricultural estate",
    "Boutique hospitality business",
    "Tax-residency exploration",
    "Citizenship or long-stay planning",
    "Capital preservation",
    "Other"
  ],
  usage: [
    "Summer residence",
    "Several trips per year",
    "Long stays",
    "Full-time residence",
    "Family gathering place",
    "Rental when not in use",
    "Business or hospitality use"
  ],
  setting: [
    "Historic city",
    "Countryside",
    "Wine region",
    "Lake",
    "Coast",
    "Mountain",
    "Village",
    "Near major airport",
    "Private estate"
  ],
  lifestyle: [
    "Quiet and private",
    "Social and walkable",
    "Food and wine focused",
    "Cultural and historic",
    "Beach/coastal",
    "Lake lifestyle",
    "Countryside retreat",
    "Luxury and service-oriented",
    "Authentic/local, not touristy"
  ],
  regions: [
    "Tuscany",
    "Umbria",
    "Veneto",
    "Lake Como",
    "Lake Garda",
    "Sicily",
    "Puglia",
    "Amalfi Coast",
    "Liguria",
    "Piedmont",
    "Rome / Lazio",
    "Milan / Lombardy",
    "Open to recommendations",
    "Other"
  ],
  italyVisits: ["Yes, many times", "Yes, a few times", "Once", "Not yet"],
  propertyType: [
    "Villa",
    "Apartment",
    "Historic home",
    "Farmhouse",
    "Vineyard / winery",
    "Estate",
    "Coastal home",
    "Lake home",
    "Restoration project",
    "Turnkey luxury property",
    "Boutique hospitality property"
  ],
  yesNoMaybe: ["Yes", "No", "Maybe"],
  privacy: ["Low", "Medium", "High", "Absolute privacy required"],
  renovation: [
    "Turnkey only",
    "Light cosmetic work",
    "Medium renovation",
    "Major restoration",
    "Open to historic renovation with proper due diligence"
  ],
  timeline: ["Immediately", "3 months", "6 months", "12 months", "12-24 months", "Research phase only"],
  trip: ["Yes, already scheduled", "Yes, planning", "Not yet"],
  professionalNeeds: [
    "Italian real estate attorney",
    "Tax advisor",
    "Immigration/residency advisor",
    "CPA familiar with U.S./Italy issues",
    "Architect",
    "Surveyor / geometra",
    "Property manager",
    "Restoration contractor",
    "Insurance",
    "Financing",
    "Banking",
    "Currency exchange",
    "Family office coordination",
    "Not sure yet"
  ],
  taxInterest: ["Yes", "No", "Maybe", "Prefer to discuss privately"],
  introducePros: ["Yes", "No", "Maybe later"],
  decisionMaker: ["Yes", "No", "Shared decision", "Advisor / representative"],
  involved: ["Spouse / partner", "Family", "Business partner", "Attorney", "CPA", "Wealth advisor", "Family office", "Other"],
  internationalPurchase: ["Yes", "No"],
  concerns: [
    "Legal process",
    "Taxes",
    "Language",
    "Finding trustworthy professionals",
    "Renovation risk",
    "Distance management",
    "Financing",
    "Property condition",
    "Bureaucracy",
    "Resale liquidity",
    "Other"
  ],
  timeZones: [
    "Eastern Time",
    "Central Time",
    "Mountain Time",
    "Pacific Time",
    "Alaska Time",
    "Hawaii Time",
    "Other"
  ]
};

const state = {
  step: 0,
  data: {}
};

const formSteps = [
  {
    title: "Contact Information",
    intro: "Start with the details needed for a private advisory review.",
    render: () => `
      <div class="field-grid">
        ${textField("firstName", "First name", true)}
        ${textField("lastName", "Last name", true)}
        ${textField("email", "Email", true, "email")}
        ${textField("phone", "Phone")}
        ${textField("city", "City", true)}
        ${textField("state", "State", true)}
        ${textField("country", "Country", true, "text", "United States")}
        ${selectField("timeZone", "Time zone", options.timeZones, true)}
        ${radioGroup("Preferred contact method", "preferredContact", options.preferredContact, true, "choice-grid three")}
        ${textField("bestTime", "Best time to contact")}
      </div>
    `
  },
  {
    title: "Buyer Category",
    intro: "Which best describes you?",
    render: () => `<div class="field-grid">${radioGroup("Buyer category", "buyerCategory", options.buyerCategory, true)}</div>`
  },
  {
    title: "Budget Profile",
    intro: "Budget, capital readiness, and advisor involvement help determine realistic next steps.",
    render: () => `
      <div class="field-grid">
        ${radioGroup("Estimated property budget", "budget", options.budget, true)}
        ${radioGroup("Purchase method", "purchaseMethod", options.purchaseMethod, true, "choice-grid three")}
        ${radioGroup("Are funds already available?", "fundsAvailable", options.fundsAvailable, true, "choice-grid three")}
        ${radioGroup("Is the buyer already working with a bank, wealth advisor, attorney, CPA, or family office?", "advisorTeam", options.advisorTeam, true, "choice-grid three")}
      </div>
    `
  },
  {
    title: "Purpose of Purchase",
    intro: "Select every purpose that may apply.",
    render: () => `<div class="field-grid">${checkboxGroup("Purpose of purchase", "purchasePurpose", options.purchasePurpose, true)}</div>`
  },
  {
    title: "Italian Lifestyle Goals",
    intro: "These preferences clarify whether the search should begin with place, property type, services, or lifestyle rhythm.",
    render: () => `
      <div class="field-grid">
        ${checkboxGroup("How do you imagine using the property?", "usage", options.usage, true)}
        ${checkboxGroup("Preferred setting", "setting", options.setting, true)}
        ${checkboxGroup("Desired lifestyle", "lifestyle", options.lifestyle, true)}
      </div>
    `
  },
  {
    title: "Regions of Interest",
    intro: "Choose known regions or leave space for recommendations.",
    render: () => `
      <div class="field-grid">
        ${checkboxGroup("Regions of interest", "regions", options.regions, true)}
        ${radioGroup("Have you visited Italy before?", "italyVisits", options.italyVisits, true, "choice-grid three")}
        ${textareaField("regionalConnection", "Do you have family, business, or emotional connection to a specific region?")}
      </div>
    `
  },
  {
    title: "Property Preferences",
    intro: "Property fit includes lifestyle, complexity, privacy, renovation tolerance, and practical needs.",
    render: () => `
      <div class="field-grid">
        ${checkboxGroup("Preferred property type", "propertyType", options.propertyType, true)}
        ${selectField("minBedrooms", "Minimum bedrooms", ["Studio", "1", "2", "3", "4", "5", "6+"], false)}
        ${selectField("minBathrooms", "Minimum bathrooms", ["1", "2", "3", "4", "5+"], false)}
        ${radioGroup("Outdoor space required?", "outdoorSpace", options.yesNoMaybe, true, "choice-grid three")}
        ${radioGroup("Pool required?", "poolRequired", options.yesNoMaybe, true, "choice-grid three")}
        ${radioGroup("Sea/lake view required?", "waterView", options.yesNoMaybe, true, "choice-grid three")}
        ${radioGroup("Walkability required?", "walkability", options.yesNoMaybe, true, "choice-grid three")}
        ${radioGroup("Privacy level", "privacyLevel", options.privacy, true, "choice-grid")}
        ${radioGroup("Renovation tolerance", "renovationTolerance", options.renovation, true)}
      </div>
    `
  },
  {
    title: "Decision Timeline",
    intro: "Timeline and travel plans help determine whether the profile is ready for opportunity review or still in strategy mode.",
    render: () => `
      <div class="field-grid">
        ${radioGroup("Desired purchase timeline", "timeline", options.timeline, true, "choice-grid three")}
        ${radioGroup("Are you planning a trip to Italy?", "tripPlanning", options.trip, true, "choice-grid three")}
        ${textField("travelPeriod", "Preferred travel period")}
        ${radioGroup("Would you like help preparing a property-focused Italy trip?", "tripHelp", options.yesNoMaybe, true, "choice-grid three")}
      </div>
    `
  },
  {
    title: "Professional Needs",
    intro: "Select the professional areas you expect to need help with.",
    render: () => `
      <div class="field-grid">
        ${checkboxGroup("Professional areas", "professionalNeeds", options.professionalNeeds, false)}
        <p class="step-note">Selecting these does not create a professional relationship. Formal advice must come from qualified licensed professionals.</p>
      </div>
    `
  },
  {
    title: "Tax / Residency Interest",
    intro: "This step uses careful language because formal tax, legal, and residency advice must come from qualified professionals.",
    render: () => `
      <div class="field-grid">
        ${radioGroup("Are you exploring Italian tax-residency or flat-tax planning?", "taxResidencyInterest", options.taxInterest, true, "choice-grid three")}
        <p class="step-note">The available analysis identifies the \u20ac200,000 annual flat tax as the only specific tax-related cost mentioned for ultra-high-net-worth individuals. Other taxes, legal costs, and administrative expenses require independent verification with qualified professionals.</p>
        ${radioGroup("Would you like to be introduced to qualified professionals for tax/legal verification?", "taxLegalIntro", options.introducePros, true, "choice-grid three")}
      </div>
    `
  },
  {
    title: "Buyer Readiness",
    intro: "Decision authority and main concerns help identify whether the first consultation should focus on strategy, risk, or coordination.",
    render: () => `
      <div class="field-grid">
        ${radioGroup("Are you the final decision maker?", "decisionMaker", options.decisionMaker, true, "choice-grid three")}
        ${checkboxGroup("Who else is involved in the decision?", "decisionParticipants", options.involved, false)}
        ${radioGroup("Have you purchased international real estate before?", "internationalPurchase", options.internationalPurchase, true, "choice-grid three")}
        ${checkboxGroup("What concerns you most about buying in Italy?", "concerns", options.concerns, true)}
      </div>
    `
  },
  {
    title: "Open Profile Notes",
    intro: "Use this section for preferences, private context, or deal-breakers that do not fit a checklist.",
    render: () => `
      <div class="field-grid">
        ${textareaField("idealProperty", "Describe your ideal Italian property.")}
        ${textareaField("specialProperty", "What would make a property truly special to you?")}
        ${textareaField("walkAway", "What would make you walk away from a deal?")}
        ${textareaField("privateNotes", "Anything private or specific we should know before the consultation?")}
      </div>
    `
  },
  {
    title: "Consent and Submission",
    intro: "Please confirm the advisory limits and consent before submitting.",
    render: () => `
      <div class="field-grid">
        <fieldset class="choice-fieldset">
          <legend class="fieldset-legend">Consent and acknowledgments <span class="required">Required</span></legend>
          <div class="consent-list">
            ${consentField("consentNoAdvice", "I understand this website does not provide legal, tax, immigration, or investment advice.")}
            ${consentField("consentProfessionalAdvice", "I understand professional advice must be obtained from qualified licensed advisors.")}
            ${consentField("consentContact", "I consent to being contacted about my buyer profile.")}
            ${consentField("consentPrivacy", "I agree to the privacy policy.")}
          </div>
        </fieldset>
      </div>
    `
  }
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inputId(name, value = "") {
  return `${name}-${String(value || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function labelStatus(required) {
  return required ? '<span class="required">Required</span>' : '<span class="optional">Optional</span>';
}

function getStored(name) {
  return state.data[name] ?? "";
}

function textField(name, label, required = false, type = "text", defaultValue = "") {
  const id = inputId(name);
  const value = getStored(name) || defaultValue;
  return `
    <div class="field">
      <label for="${id}">${escapeHtml(label)} ${labelStatus(required)}</label>
      <input id="${id}" name="${name}" type="${type}" value="${escapeHtml(value)}" ${required ? "required" : ""}>
    </div>
  `;
}

function textareaField(name, label, required = false) {
  const id = inputId(name);
  return `
    <div class="field full">
      <label for="${id}">${escapeHtml(label)} ${labelStatus(required)}</label>
      <textarea id="${id}" name="${name}" ${required ? "required" : ""}>${escapeHtml(getStored(name))}</textarea>
    </div>
  `;
}

function selectField(name, label, values, required = false) {
  const id = inputId(name);
  const stored = getStored(name);
  return `
    <div class="field">
      <label for="${id}">${escapeHtml(label)} ${labelStatus(required)}</label>
      <select id="${id}" name="${name}" ${required ? "required" : ""}>
        <option value="">Select</option>
        ${values.map((value) => `<option value="${escapeHtml(value)}" ${stored === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </div>
  `;
}

function radioGroup(label, name, values, required = false, className = "choice-grid") {
  const stored = getStored(name);
  return `
    <fieldset class="choice-fieldset" ${required ? "data-require-one" : ""} data-group-name="${name}">
      <legend class="fieldset-legend">${escapeHtml(label)} ${labelStatus(required)}</legend>
      <div class="${className}">
        ${values.map((value) => `
          <label class="option-card" for="${inputId(name, value)}">
            <input id="${inputId(name, value)}" type="radio" name="${name}" value="${escapeHtml(value)}" ${stored === value ? "checked" : ""}>
            <span>${escapeHtml(value)}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function checkboxGroup(label, name, values, required = false) {
  const stored = Array.isArray(getStored(name)) ? getStored(name) : [];
  return `
    <fieldset class="choice-fieldset" ${required ? "data-require-one" : ""} data-group-name="${name}">
      <legend class="fieldset-legend">${escapeHtml(label)} ${labelStatus(required)}</legend>
      <div class="choice-grid">
        ${values.map((value) => `
          <label class="option-card" for="${inputId(name, value)}">
            <input id="${inputId(name, value)}" type="checkbox" name="${name}" value="${escapeHtml(value)}" ${stored.includes(value) ? "checked" : ""}>
            <span>${escapeHtml(value)}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function consentField(name, label) {
  return `
    <label class="option-card" for="${inputId(name)}">
      <input id="${inputId(name)}" type="checkbox" name="${name}" value="Accepted" required ${getStored(name) === "Accepted" ? "checked" : ""}>
      <span>${escapeHtml(label)}</span>
    </label>
  `;
}

function renderStaticCards() {
  const profileGrid = document.querySelector("[data-profile-grid]");
  const regionGrid = document.querySelector("[data-region-grid]");
  const propertyGrid = document.querySelector("[data-property-grid]");

  profileGrid.innerHTML = buyerProfiles.map((profile) => `
    <article class="card${profile.image ? " card-with-image" : ""}">
      ${profile.image ? `<img class="card-image" src="${escapeHtml(profile.image)}" alt="${escapeHtml(profile.imageAlt)}">` : ""}
      <h3>${escapeHtml(profile.title)}</h3>
      <p>${escapeHtml(profile.body)}</p>
    </article>
  `).join("");

  regionGrid.innerHTML = regions.map(([name, lifestyle, motivation, types, access, bestFor, caution, image, imageAlt]) => `
    <article class="region-card${image ? " region-card-with-image" : ""}">
      ${image ? `<img class="region-image" src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt)}">` : ""}
      <h3>${escapeHtml(name)}</h3>
      <dl>
        ${detail("Lifestyle profile", lifestyle)}
        ${detail("Typical buyer motivation", motivation)}
        ${detail("Property types", types)}
        ${detail("Accessibility", access)}
        ${detail("Best for", bestFor)}
        ${detail("Caution / due diligence note", caution)}
      </dl>
    </article>
  `).join("");

  propertyGrid.innerHTML = propertyTypes.map(([name, fit, appeal, questions, complexity, verification, image, imageAlt]) => `
    <article class="property-card${image ? " property-card-with-image" : ""}">
      ${image ? `<img class="property-image" src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt)}" width="1536" height="1024" loading="lazy" decoding="async">` : ""}
      <h3>${escapeHtml(name)}</h3>
      <dl>
        ${detail("Best buyer fit", fit)}
        ${detail("Lifestyle appeal", appeal)}
        ${detail("Common due diligence questions", questions)}
        ${detail("Recommended professional verification", verification)}
      </dl>
      ${ownershipComplexityBadge(complexity)}
    </article>
  `).join("");
}

function ownershipComplexityBadge(complexity) {
  const badge = ownershipComplexityBadges[complexity?.toLowerCase()];
  if (!badge) return "";

  return `<img class="ownership-complexity-badge" src="${escapeHtml(badge.src)}" alt="${escapeHtml(badge.alt)}" loading="lazy" decoding="async">`;
}

function detail(term, description) {
  return `
    <div>
      <dt>${escapeHtml(term)}</dt>
      <dd>${escapeHtml(description)}</dd>
    </div>
  `;
}

function saveCurrentStep() {
  const stepEl = document.querySelector("[data-form-step]");
  if (!stepEl) return;

  const names = new Set(Array.from(stepEl.querySelectorAll("input, select, textarea")).map((input) => input.name));
  names.forEach((name) => {
    const fields = Array.from(stepEl.querySelectorAll(`[name="${CSS.escape(name)}"]`));
    const first = fields[0];
    if (!first) return;

    if (first.type === "checkbox") {
      const checked = fields.filter((field) => field.checked).map((field) => field.value);
      state.data[name] = fields.length === 1 ? (checked[0] || "") : checked;
      return;
    }

    if (first.type === "radio") {
      state.data[name] = fields.find((field) => field.checked)?.value || "";
      return;
    }

    state.data[name] = first.value;
  });
}

function renderProfileForm() {
  const progressList = document.querySelector("[data-progress-list]");
  progressList.innerHTML = formSteps.map((step) => `<li>${escapeHtml(step.title)}</li>`).join("");
  renderStep();
}

function renderStep() {
  const current = formSteps[state.step];
  const stepEl = document.querySelector("[data-form-step]");
  const progressBar = document.querySelector("[data-progress-bar]");
  const progressItems = Array.from(document.querySelectorAll("[data-progress-list] li"));
  const errorEl = document.querySelector("[data-form-error]");
  const prevButton = document.querySelector("[data-prev-step]");
  const nextButton = document.querySelector("[data-next-step]");
  const submitButton = document.querySelector("[data-submit-form]");

  stepEl.innerHTML = `
    <div class="step-heading">
      <span>Step ${state.step + 1} of ${formSteps.length}</span>
      <h3>${escapeHtml(current.title)}</h3>
      <p>${escapeHtml(current.intro)}</p>
    </div>
    ${current.render()}
  `;

  progressBar.style.width = `${((state.step + 1) / formSteps.length) * 100}%`;
  progressItems.forEach((item, index) => {
    item.classList.toggle("is-active", index === state.step);
    item.classList.toggle("is-complete", index < state.step);
  });

  errorEl.textContent = "";
  prevButton.hidden = state.step === 0;
  nextButton.hidden = state.step === formSteps.length - 1;
  submitButton.hidden = state.step !== formSteps.length - 1;
}

function validateCurrentStep() {
  const stepEl = document.querySelector("[data-form-step]");
  const errorEl = document.querySelector("[data-form-error]");
  const requiredInputs = Array.from(stepEl.querySelectorAll("input[required], select[required], textarea[required]"));
  const requiredGroups = Array.from(stepEl.querySelectorAll("[data-require-one]"));
  let firstInvalid = null;

  for (const field of requiredInputs) {
    const emptyCheckbox = field.type === "checkbox" && !field.checked;
    const emptyValue = field.type !== "checkbox" && !field.value.trim();
    const badEmail = field.type === "email" && field.value.trim() && !field.checkValidity();

    if (emptyCheckbox || emptyValue || badEmail) {
      firstInvalid = firstInvalid || field;
    }
  }

  for (const group of requiredGroups) {
    if (!group.querySelector("input:checked")) {
      firstInvalid = firstInvalid || group.querySelector("input");
    }
  }

  if (firstInvalid) {
    errorEl.textContent = "Please complete the required fields on this step before continuing.";
    firstInvalid.focus({ preventScroll: false });
    return false;
  }

  errorEl.textContent = "";
  return true;
}

function getValue(name) {
  return state.data[name] || "";
}

function getList(name) {
  return Array.isArray(state.data[name]) ? state.data[name] : [];
}

function calculateLeadProfile() {
  const tags = new Set();
  let score = 0;

  const budget = getValue("budget");
  const timeline = getValue("timeline");
  const category = getValue("buyerCategory");
  const funds = getValue("fundsAvailable");
  const regionsSelected = getList("regions").filter((region) => !["Open to recommendations", "Other"].includes(region));
  const professionalNeeds = getList("professionalNeeds");
  const purposes = getList("purchasePurpose");
  const propertyType = getList("propertyType");
  const concerns = getList("concerns");

  if (budget === "\u20ac5 million+") score += 35;
  else if (budget === "\u20ac3 million-\u20ac5 million") score += 30;
  else if (budget === "\u20ac2 million-\u20ac3 million") score += 25;
  else if (budget === "\u20ac1 million-\u20ac2 million") score += 16;
  else if (budget === "\u20ac500,000-\u20ac1 million") score += 10;
  else if (budget === "Under \u20ac500,000") score += 4;

  if (timeline === "Immediately") score += 28;
  else if (timeline === "3 months") score += 24;
  else if (timeline === "6 months") score += 20;
  else if (timeline === "12 months") score += 14;
  else if (timeline === "12-24 months") score += 7;
  else if (timeline === "Research phase only") score += 2;

  if (funds === "Yes") score += 20;
  else if (funds === "Partially") score += 10;
  else if (funds === "Prefer to discuss privately") score += 8;

  if (category === "Ready to buy within 3 to 6 months") score += 22;
  else if (category === "Serious buyer within 12 months") score += 18;
  else if (category === "Relocation or semi-retirement planning") score += 14;
  else if (category === "Family legacy property search") score += 14;
  else if (category === "Ultra-high-net-worth buyer") score += 24;
  else if (category === "Investment/lifestyle hybrid buyer") score += 14;
  else if (category === "Advisor, family office, or representative") score += 12;

  if (regionsSelected.length >= 1) score += 8;
  if (regionsSelected.length >= 3) score += 4;
  if (getValue("advisorTeam") === "Yes") score += 10;
  if (getValue("tripPlanning") === "Yes, already scheduled") score += 10;
  else if (getValue("tripPlanning") === "Yes, planning") score += 6;
  if (getValue("taxResidencyInterest") === "Yes" || getValue("taxResidencyInterest") === "Maybe") score += 5;
  if (getValue("decisionMaker") === "Yes") score += 10;
  else if (getValue("decisionMaker") === "Shared decision") score += 6;

  if (category === "Ultra-high-net-worth buyer" || budget === "\u20ac5 million+" || budget === "\u20ac3 million-\u20ac5 million") {
    tags.add("UHNW");
  }

  if (getValue("taxResidencyInterest") === "Yes" || getValue("taxResidencyInterest") === "Maybe" || purposes.includes("Tax-residency exploration")) {
    tags.add("Tax/Residency Review Needed");
  }

  if (
    propertyType.includes("Restoration project") ||
    getValue("renovationTolerance") === "Major restoration" ||
    getValue("renovationTolerance") === "Open to historic renovation with proper due diligence" ||
    concerns.includes("Renovation risk")
  ) {
    tags.add("Restoration Risk");
  }

  if (professionalNeeds.length > 0 || getValue("advisorTeam") !== "Yes") {
    tags.add("Professional Coordination Needed");
  }

  if (getValue("tripHelp") === "Yes" || getValue("tripHelp") === "Maybe" || getValue("tripPlanning") === "Yes, planning") {
    tags.add("Italy Trip Planning Needed");
  }

  let leadCategory = "D - Not yet qualified";
  if (score >= 105) leadCategory = "A - Highly qualified buyer";
  else if (score >= 75) leadCategory = "B - Serious but needs clarification";
  else if (score >= 42) leadCategory = "C - Early research phase";

  document.querySelector("[data-lead-score]").value = String(score);
  document.querySelector("[data-lead-category]").value = leadCategory;
  document.querySelector("[data-lead-tags]").value = Array.from(tags).join(", ");

  return { score, leadCategory, tags: Array.from(tags) };
}

function setupInteractions() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const form = document.querySelector("[data-buyer-form]");
  const prev = document.querySelector("[data-prev-step]");
  const next = document.querySelector("[data-next-step]");
  const success = document.querySelector("[data-success-state]");

  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  next.addEventListener("click", () => {
    if (!validateCurrentStep()) return;
    saveCurrentStep();
    state.step = Math.min(formSteps.length - 1, state.step + 1);
    renderStep();
  });

  prev.addEventListener("click", () => {
    saveCurrentStep();
    state.step = Math.max(0, state.step - 1);
    renderStep();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateCurrentStep()) return;
    saveCurrentStep();
    calculateLeadProfile();
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

renderStaticCards();
renderProfileForm();
setupInteractions();
