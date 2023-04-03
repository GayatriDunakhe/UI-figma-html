const nevbarContainer = document.getElementById("nevbar");

const nevbar = document.createElement("nav");
nevbar.classList.add("nev-items");

const nevbarList = document.createElement("ul");

const logo = document.createElement("div");
logo.classList.add("logo");

const logoLinkAnchor = document.createElement("a");

logoLinkAnchor.href = "index.html";
logoLinkAnchor.textContent = "LOGO";
logo.appendChild(logoLinkAnchor);

const homeLink = document.createElement("li");
homeLink.classList.add("nev-hover");

const homeLinkAnchor = document.createElement("a");

homeLinkAnchor.href = 'brand.html';
homeLinkAnchor.textContent = "Brand";
homeLink.appendChild(homeLinkAnchor);

const aboutLink = document.createElement("li");
aboutLink.classList.add("nev-hover");

const aboutLinkAnchor = document.createElement("a");

aboutLinkAnchor.href = '#';
aboutLinkAnchor.textContent = "About";
aboutLink.appendChild(aboutLinkAnchor);

const contactLink = document.createElement("li");
contactLink.classList.add("nev-hover");

const contactLinkAnchor = document.createElement("a");

contactLinkAnchor.href = '#';
contactLinkAnchor.textContent = "Contact";
contactLink.appendChild(contactLinkAnchor);

const getOffer = document.createElement("li");
getOffer.classList.add("nev-btn");

const getOfferAnchor = document.createElement("a");

getOfferAnchor.href = '#';
getOfferAnchor.textContent = "Get Offer";
getOffer.appendChild(getOfferAnchor);


nevbarList.appendChild(homeLink);
nevbarList.appendChild(aboutLink);
nevbarList.appendChild(contactLink);
nevbarList.appendChild(getOffer);

nevbarContainer.appendChild(logo);

nevbar.appendChild(nevbarList);

nevbarContainer.appendChild(nevbar);