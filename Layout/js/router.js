const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routesHtml = {
    404: "/html/404.html",
    "/": "/html/calendar.html",
    "/calendar": "/html/calendar.html",
    "/register": "/html/register.html",
    "/login": "/html/login.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routesHtml[path] || routesHtml[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();