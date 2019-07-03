export function ajaxRequest(method, url, success) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader("Access-Control-Allow-Headers", "*");
    request.send();
    request.onload = () => {
        try {
            return success(JSON.parse(request.responseText));
        } catch (error) {
            console.log(error);
        }
    }
}