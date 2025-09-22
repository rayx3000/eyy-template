import { appTabContent } from "../data/app-tab-content.js";

let app = ''

appTabContent.forEach(a => {

    app += `
         <div class="app" style="background-color: ${a.color};">
            <span class="material-symbols-outlined">${a.app_icon}</span><span class="app-name">${a.app_name}</span>
        </div>
    `
});

document.getElementById("appsTab").innerHTML = app;