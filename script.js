"use strict";

const heroTabs = document.querySelectorAll(".hero-tabs li");
const heroTabContentArticles = document.querySelectorAll(".hero-tab-content");

for (let currentTab of heroTabs) {
    currentTab.addEventListener("click", (event) => {
        event.preventDefault();

        removeActiveTab(heroTabs, heroTabContentArticles);
        addActiveTab(currentTab);
    });
}

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
