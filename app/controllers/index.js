if (OS_ANDROID) {
    // Shows how the info button chains the existing create options menu.
    $.index.activity.onCreateOptionsMenu = function (e) {
        var menu = e.menu;
        var menuItem = menu.add({
            title : "Dong?",
            itemId : 0
        });
        menuItem.addEventListener('click', function (e) {
            alert("Dong! Dong! Dong!");
        });
    };
}

$.info.init($.index);
$.info.on('click', function (e) { alert("Ding! Ding! Ding!"); });
if (OS_IOS)
    $.win.open();
else
    $.index.open();
