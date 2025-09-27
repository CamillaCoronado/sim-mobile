// ==UserScript==
// @name         Simcluster CSS tweaks (iOS Userscripts)
// @namespace    https://yourname.example
// @version      1.0
// @description  Inject custom CSS into the site on iOS Safari via Userscripts
// @match        https://simcluster.*/*
// @match        https://*.simcluster.*/*
// @run-at       document-end
// ==/UserScript==

(function () {
  const css = `
@media (max-width: 767px) {

    #middle-panel {
        max-width: calc(100vw - 60px);
    }

    body > div:nth-of-type(28) > div {
        max-width: 100vw;
        left: calc(-50% - 30px) !important;
        transform: translateX(50%);
        position: absolute;
        width: 100vw !important;
    }

     #middle-panel #template > div:first-child button {
        display: none;
     }

     #middle-panel #template > div:first-child p {
        font-size: 2px;
        position: relative;
        color: var(--ac-0-10);
        left: 50%;
        position: relative;
        text-shadow: none;
        display: inline-block;
        width: initial;
     }

     #middle-panel #template > div:first-child p:before {
        content: "\f091";
        display: inline-block;
        font-family: "Font Awesome 6 Sharp";
        font-weight: 900;
        font-size: 2rem;
        color: var(--ac-100);
    }

     
    /* #middle-panel #template > div:first-child > div > div:nth-of-type(2) > button {
        position: sticky;
        background-color: color-mix(in srgb, var(--ac-0) 45%, black);
        bottom: -52%;
        right: 105px;
        animation: none;
        opacity: 1 !important;
        z-index: 100;
        font-size: 0;
        padding: 20px;
        padding-left: 45px;
        border-radius: 66px;
    }

    #middle-panel #template > div:first-child > div > div:nth-of-type(2) > button:before,
    #middle-panel #template > div:first-child > div > div:nth-of-type(2) > button:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    }
    #middle-panel #template > div:first-child > div > div:nth-of-type(2) > button:before {
    width: 3px;
    height: 20px;
    }
    #middle-panel #template > div:first-child > div > div:nth-of-type(2) > button:after {
    width: 20px;
    height: 3px;
    }

    #middle-panel #template > div:first-child > button,
    #middle-panel #template > div:first-child > div > div:nth-of-type(1),
    #middle-panel #template > div:first-child > div > div:nth-of-type(2) > p {
        display: none;
    }

    #middle-panel #template > div:first-child {
        padding:0;
        border: none;
    } */
    #middle-panel > div:first-child > div:first-child > div:first-child {
        max-width: 100vw;
        margin-left: initial;
    }

    #middle-panel #template > div:nth-of-type(2) > div:first-child {
        flex-direction: column;
    }

    #middle-panel #template > div:nth-of-type(2) > div:not(:first-child) > div {
        flex-direction: column;
    }

    #middle-panel #template > div:nth-of-type(2) > div:not(:first-child) > div:first-child {
        max-width: calc(100vw - 60px);
    }

    #middle-panel #template > div:nth-of-type(2) > div:not(:first-child) > div:first-child > div {
        padding-right: 15px;
    }

    #middle-panel #template > div:nth-of-type(2) > div:not(:first-child) > div:first-child > div:nth-of-type(2) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    #middle-panel #template > div:nth-of-type(2) > div:not(:first-child) > div:first-child > div:nth-of-type(2) button,
    #middle-panel #template > div:nth-of-type(2) > div:not(:first-child) > div:first-child > div:nth-of-type(2) > div {
        height: auto;
    }

    #bottom #create-options + div a > div > div:nth-of-type(2) {
        display: none;
    }

    #bottom #create-options + div a > div {
        flex-direction: column;
    }

    #bottom #create-options + div a > div > div {
        height: 2.5rem;
    }

    

     #bottom #create-options + div a > div > button {
        opacity: 1;
        display: block;
        color: white;
        display: none;
     }

     #bottom #create-options + div a > div > div:nth-of-type(2) {
        display: none;
     }

     #bottom #create-options {
        /* position: fixed;
        background-color: color-mix(in srgb, var(--ac-0) 45%, black);
        z-index: 100;
        padding: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 15px;
        bottom: 125px;
        left: 70px; */
        display:flex;
        margin-bottom: 20px;
        gap: 0.7rem;
    } 

    #bottom {
        display: inline-block;
    }

    #bottom #create-options button {
        font-size: 0px;
        flex-direction: column;
        gap: 0;
        display: flex;
        padding: 10px;
    }

    #bottom #create-options button > div {
        font-size:10px;
    }

    #bottom #create-options button:first-child > i {
        margin-top: -20px;
        font-size:18px;
    }

    #bottom #create-options button:nth-of-type(2) > i {
        font-size: 18px;
    }

    #bottom #create-options button:nth-of-type(2) > i:last-child {
        margin-top: -25px;
    }

    #middle-panel #template + div button {
        font-size:14px;
        position: relative;
    }

    #middle-panel #template + div button.underline {
    text-decoration: none;
    }

    #middle-panel #template + div button.underline:after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        height: 2px;
        background: white;
        width: 100%;
        left: 0;
    } 

    #middle-panel > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) #pfp + div  {
        grid-template-columns: 1fr;
        margin-top: 15px;
    }

    #middle-panel > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) #pfp + div button {
    height: 3.5em;
    }

    #middle-panel > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) #pfp {
    border: 3px solid var(--local-80);
    }

    #middle-panel > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) #pfp + div button i,
    #middle-panel > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) #pfp + div button span {
    font-size:15px;
    }

    #middle-panel > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) #pfp + div button img {
    height: 40%;
    width: 40%;
    } 

    #middle-panel #header-section > button
    {
    font-size: 1.2em;
    }
    #middle-panel #header-section > span
    {
        font-size: 0.9em;
    }

    #middle-panel #header-section {
        flex-wrap: wrap;
        display: flex;
    }

    #middle-panel #header-section > button:first-child {
        width: 100%;
        text-align: left;
    }

    #middle-panel #bottom-bar button,
    #middle-panel #bottom-bar span {
        font-size: 15px;
    }

    #middle-panel #bottom-bar i {
        margin-right: 5px;
    }


    #middle-panel #bottom-bar #like-button {
    width: auto;
    }

    #middle-panel #text-section {
        font-size: 14px;
        padding: 10px;
    }

    #navbar-inbox i > div {
        left: 17px;
        font-size: 21px;
    }

    #ranked-tab-button + span > div > div + div,
    #ranked-tab-button + span > div > div  {
        display: none;
    }

    #middle-panel > div:nth-of-type(2) > div > div:nth-of-type(2) > div {
        flex-wrap: wrap;
        max-width: 158px;
        justify-content: flex-end;
        align-self: flex-end;
    }
    
    div[data-is-popover] > div,
    body > div > div:nth-of-type(2) > div > div > div > div {
        width: 100vw;
    }

     div[data-is-popover] {
        max-width: 100vw!important;
        left: 0!important;
        width: 100vw!important;
     }

     div[data-is-popover] > div > div:nth-of-type(2) {
        width: 100vw!important;
        min-width: 100vw!important;
     }

    body div > div:nth-of-type(2) > div > div > div > div #pfp + div  {
        grid-template-columns: 1fr;
        margin-top: 15px;
    }

    body div > div:nth-of-type(2) > div > div > div > div #pfp + div button {
    height: 3.5em;
    }

    body div > div:nth-of-type(2) > div > div > div > div #pfp {
    border: 3px solid var(--local-80);
    }

    body div > div:nth-of-type(2) > div > div > div > div #pfp + div button i,
    body div > div:nth-of-type(2) > div > div > div > div #pfp + div button span {
    font-size:15px;
    }

    body div > div:nth-of-type(2) > div > div > div > div #pfp + div button img {
    height: 40%;
    width: 40%;
    } 

    body div > div:nth-of-type(2) > div > div > div > div #header-section > button,
    body div > div:nth-of-type(2) > div > div > div > div #header-row > span:first-child
    {
    font-size: 1.2em;
    }
    body div > div:nth-of-type(2) > div > div > div > div > span
    {
        font-size: 0.9em;
    }

    body div > div:nth-of-type(2) > div > div > div > div #header-section {
        flex-wrap: wrap;
        display: flex;
    }

    body div > div:nth-of-type(2) > div > div > div > div #header-section > button:first-child {
        width: 100%;
        text-align: left;
    }

    body div > div:nth-of-type(2) > div > div > div > div #bottom-bar button,
    body div > div:nth-of-type(2) > div > div > div > div #bottom-bar span {
        font-size: 15px;
    }

    body div > div:nth-of-type(2) > div > div > div > div #bottom-bar i {
        margin-right: 5px;
    }


    body div > div:nth-of-type(2) > div > div > div > div #bottom-bar #like-button {
    width: auto;
    }

    body div > div:nth-of-type(2) > div > div > div > div #text-section {
        font-size: 14px;
        padding: 10px;
    }

    body div > div:nth-of-type(2) > div > div > div > div #reply-template #pfp-and-concepts > img {
        border: 3px solid var(--local-80);
    }

    #left-panel + div + div {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 100;
        display: block;
        background-color: var(--ac-0);

        transform: translateX(100%);   /* start off-screen to the right */
        transition: transform 0.3s ease;
    }

    #radio-controls {
        height:3rem;
        max-width: 100vw;
    }

    #radio-controls #area-right > div {
        font-size: 20px;
    }

    #radio-controls #area-right {
        margin-top: auto;
        margin-right: 10px;
        margin-left: 0;
        margin-bottom: 5px;
        justify-self: flex-end;
    }

     #radio-controls #song-info-text {
        font-size: 16px;
     }

     #radio-controls #song-info-container {
        width:100vw;
        display: grid;
        grid-template-columns: auto auto 1fr;
     } 

     #concept-search-area #tabs-and-marquee button,
     #concept-search-area,
     #post-preview #bottom-bar,
     #concept-search-area #displayed-concepts-area {
        font-size: 14px;
     }

    #playback-controls {
        align-self: flex-end;
    }

    legend {
        font-size: 12px !important;
        margin-top: 15px;
    }

    #toast-container {
        width:100vw;
        max-width: 100vw;
    }

    #song-info-container {
        display: flex;
    }

}
`;

  const id = 'userscripts-injected-css-simcluster';
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.documentElement.appendChild(el);
  }
})();
