import { notificationData } from "../data/notification-data.js";

let notification = ''

notificationData.forEach(n => {

    notification += `
        <div class="notification">
            <div class="icon-container">
                ${n.notificationType === "user-account" ? '<div class="notification-profile-icon"></div>' : `<div class="notification-icon">
                            <span class="material-symbols-outlined">${n.notificationType}</span>
                        </div>`}
            </div>
            <div class="notification-label">
                <span id="notification-name">${n.notificationName}</span>
                <span id="notification-description">${n.notificationDescription}</span>
                <span id="notification-time">${n.notificationTime}</span>
            </div>
        </div>
    `
});

if(notificationData.length >= 1){
    document.getElementById("notificationTab").innerHTML = notification;
}
if(notificationData.length === 0){
    document.getElementById("notificationTab").innerHTML = `
        <div class="notification-empty">No Notifications</div>
    `;
}
