(function(){

// Check page correctness
if (!location.hash.match("#gacha/summon")) {
  const answer = confirm("You don't seem to be in #gacha/summon page. Run anyway?");
  if (answer === false) return;
}

const NAME = document.querySelector(".prt-summon-info > div:first-child").textContent;

const VOICE_ACTOR = document.querySelector(".txt-acter-name")?.innerText.split("\n").join(", ");

const CALL_NAME = document.querySelector(".prt-detail-special .name").textContent;
const CALL_DESC = document.querySelector(".prt-detail-special .comment").textContent;

const AURA_NAME = document.querySelector(".prt-detail-support .name").textContent;
const MAIN_AURA_DESC = document.querySelector(".prt-detail-support .prt-aura-description").textContent.trim();
const SUB_AURA_DESC = document.querySelector(".prt-detail-support .prt-aura-description ~ .prt-aura-description")?.textContent.trim();

const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`
|jpname=${NAME}
|vajp=${VOICE_ACTOR}
|jpaura_name=${AURA_NAME}
|jpaura1=${MAIN_AURA_DESC}
|jpaura2=
|jpaura3=
|jpsubaura1=${SUB_AURA_DESC}
|jpsubaura2=
|jpcall_name=${CALL_NAME}
|jpcombo1=
|jpcombo2=
|jpcall_base=${CALL_DESC}
|jpcall_mlb=
|jpcall_flb=
|jpflavor=${FLAVOR}
`;

copyToClipboard(result);

})();
