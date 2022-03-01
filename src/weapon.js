(function(){

// Check page correctness
if (!location.hash.match("#gacha/weapon")) {
  const answer = confirm("You don't seem to be in #gacha/weapon page. Run anyway?");
  if (answer === false) return;
}

const ID = document.querySelector('.prt-weapon-image > .img-weapon').getAttribute("src").match(/\/g\/(.+?)\./)[1];

const NAME = (() => {
  const largeBanner = document.querySelector(".txt-item-name")?.textContent;
  const smallBanner = document.querySelector(".prt-weapon-info > div:first-child")?.textContent;
  return (largeBanner) ? largeBanner : smallBanner;
})();

const RARITY = (() => {
  if (document.querySelector(".prt-rarity-4")) return "ssr";
  if (document.querySelector(".prt-rarity-3")) return "sr";
  if (document.querySelector(".prt-rarity-2")) return "r";
  if (document.querySelector(".prt-rarity-4-large")) return "ssr";
  if (document.querySelector(".prt-rarity-3-large")) return "sr";
  if (document.querySelector(".prt-rarity-2-large")) return "r";
  return "?";
})();

const ELEMENT = (() => {
  if (document.querySelector(".ico-type1")) return "fire";
  if (document.querySelector(".ico-type2")) return "water";
  if (document.querySelector(".ico-type3")) return "earth";
  if (document.querySelector(".ico-type4")) return "wind";
  if (document.querySelector(".ico-type5")) return "light";
  if (document.querySelector(".ico-type6")) return "dark";
  return "?";
})();

const TYPE = (() => {
  if (document.querySelector(".ico-weapon-1")) return "sabre";
  if (document.querySelector(".ico-weapon-2")) return "dagger";
  if (document.querySelector(".ico-weapon-3")) return "spear";
  if (document.querySelector(".ico-weapon-4")) return "axe";
  if (document.querySelector(".ico-weapon-5")) return "staff";
  if (document.querySelector(".ico-weapon-6")) return "gun";
  if (document.querySelector(".ico-weapon-7")) return "melee";
  if (document.querySelector(".ico-weapon-8")) return "bow";
  if (document.querySelector(".ico-weapon-9")) return "harp";
  if (document.querySelector(".ico-weapon-10")) return "katana";
  return "?";
})();

const MIN_HP = document.querySelector(".prt-min-hp .txt-hp-value").textContent;
const MAX_HP = document.querySelector(".prt-max-hp .txt-hp-value").textContent;
const MIN_ATK = document.querySelector(".prt-min-atk .txt-atk-value").textContent;
const MAX_ATK = document.querySelector(".prt-max-atk .txt-atk-value").textContent;

const OUGI_NAME = document.querySelector(".prt-detail-special .name-m").textContent;
const OUGI_DESC = document.querySelector(".prt-detail-special .comment-m").textContent;

const SKILL_ONE_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > .name-m")?.textContent;
const SKILL_ONE_ICON = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > :first-child")?.className.replace("ico-", "ws_")+".png";
const SKILL_ONE_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > .comment-m")?.textContent;

const SKILL_TWO_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > .name-m")?.textContent;
const SKILL_TWO_ICON = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > :first-child")?.className.replace("ico-", "ws_")+".png";
const SKILL_TWO_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > .comment-m")?.textContent;
const SKILL_TWO_LEVELREQ = document.querySelector(".prt-detail-support > .not-get:nth-child(3) .txt-condition-level")?.textContent.match(/\d+$/)?.[0];

const SKILL_THREE_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > .name-m")?.textContent;
const SKILL_THREE_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > .comment-m")?.textContent;
const SKILL_THREE_ICON = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > :first-child")?.className.replace("ico-", "ws_")+".png";
const SKILL_THREE_LEVELREQ = document.querySelector(".prt-detail-support > .not-get:nth-child(4) .txt-condition-level")?.textContent.match(/\d+$/)?.[0];

const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`{{Weapon
|id=${ID}
|series=
|group=
|name=${NAME}
|element=${ELEMENT}
|weapon=${TYPE}
|rarity=${RARITY}
|release_date=
|4star_date=
|5star_date=
|link_jpwiki=
|link_gamewith=
|evo_min=0
|evo_base=3
|evo_max=
|image=
|gran=
|djeeta=
|hp1=${MIN_HP}
|hp2=${MAX_HP}
|hp3=
|atk1=${MIN_ATK}
|atk2=${MAX_ATK}
|atk3=
|character=
|obtain=
|obtain_text=
|ougi_name=${OUGI_NAME}
|ougi={(Weapon/Ougi|${OUGI_DESC}}}
|ougi_4s=
|s1_name=${SKILL_ONE_NAME}
|s1_icon=${SKILL_ONE_ICON}
|s1_desc=${SKILL_ONE_DESC}
|s1_lvl=
|s1_4s_name=
|s1_4s_icon=
|s1_4s_lvl=
|s1_4s_desc=
|s2_name=${SKILL_TWO_NAME}
|s2_icon=${SKILL_TWO_ICON}
|s2_desc=${SKILL_TWO_DESC}
|s2_lvl=${SKILL_TWO_LEVELREQ}
|s2_4s_name=
|s2_4s_icon=
|s2_4s_lvl=
|s2_4s_desc=
|s3_name=${SKILL_THREE_NAME}
|s3_icon=${SKILL_THREE_ICON}
|s3_desc=${SKILL_THREE_DESC}
|s3_lvl=${SKILL_THREE_LEVELREQ}
|s3_4s_name=
|s3_4s_icon=
|s3_4s_lvl=
|s3_4s_desc=
|reduce_advice=
|reduce=premium
|flavor=${FLAVOR}
}}
`;

copyToClipboard(result);

})();
