"use strict";

import "./style.css";

const heroTabs = document.querySelectorAll(".hero-tabs li");
const heroTabContentArticles = document.querySelectorAll(".hero-tab-content");

const villainTabs = document.querySelectorAll(".enemy-tabs li");
const villainTabContentArticles = document.querySelectorAll(".enemy-tab-content");

function initTabs() {
    for (let heroTab of heroTabs) {
        heroTab.addEventListener("click", (event) => {
            event.preventDefault();
    
            removeActiveTab(heroTabs, heroTabContentArticles);
            addActiveTab(heroTab);
        });
    }

    for (let villainTab of villainTabs) {
        villainTab.addEventListener("click", (event) => {
            event.preventDefault();

            removeActiveTab(villainTabs, villainTabContentArticles);
            addActiveTab(villainTab);
        });
    }
}

initTabs();

function removeActiveTab(tabs, tabArticles) {
    for (let tab of tabs) {
        tab.classList.remove("is-active");
    }

    for (let article of tabArticles) {
        article.classList.remove("is-active");
    }
}

function addActiveTab(tab) {
    tab.classList.add("is-active");
    const href = tab.querySelector("a").getAttribute("href");
    const matchingArticle = document.querySelector(href);
    matchingArticle.classList.add("is-active");
}
