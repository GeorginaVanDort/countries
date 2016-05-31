$(document).ready(function() {
  $("p").click(function() {
    $("img").slideDown();
  });

  $("button#green").click(function() {
    $("body").addClass("green-background");
  });
  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});
