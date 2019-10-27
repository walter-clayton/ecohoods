let deviceCount = 0;
document.getElementById('deviceButton').addEventListener("click", function () {
   const container = document.getElementById('target');
    const template = document.getElementById("tpl-device");

 //   document.getElementById("deviceId").innerText = num.toString();
    container.append(template.content.cloneNode(true));
    document.getElementById('deviceId').id = 'deviceId'+deviceCount;
    let num = Math.floor(Math.random() * 9999999);
    document.getElementById('deviceId'+deviceCount).innerText = num.toString();
    deviceCount++;
});