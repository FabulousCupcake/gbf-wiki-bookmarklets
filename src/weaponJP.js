(function(){

// Check page correctness
if (!location.hash.match("#gacha/weapon")) {
  const answer = confirm("You don't seem to be in #gacha/weapon page. Run anyway?");
  if (answer === false) return;
}

const NAME = (() => {
  const largeBanner = document.querySelector(".txt-item-name")?.textContent;
  const smallBanner = document.querySelector(".prt-weapon-info > div:first-child")?.textContent;
  return (largeBanner) ? largeBanner : smallBanner;
})();

const OUGI_NAME = document.querySelector(".prt-detail-special .name-m").textContent;
const OUGI_DESC = document.querySelector(".prt-detail-special .comment-m").textContent;

const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`|jpname=${NAME}
|jpougi_name=${OUGI_NAME}
|jpougi=${OUGI_DESC}
|jpflavor=${FLAVOR}
`;

copyToClipboard(result);

})();
