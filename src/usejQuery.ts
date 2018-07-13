import * as $ from 'jquery';

export default function usejQuery() {
    $(document.body).ready(() => {
        $("#fromjQuery").text("Hello jQuery!");
        $("#fromjQuery").css("color", "Red");
    });
}
