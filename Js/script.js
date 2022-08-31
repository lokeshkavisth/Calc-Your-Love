$(document).ready(function () {
  // start

  $("#calculate").click(function () {
    const you = $("#yourName").val();
    const partner = $("#partnerName").val();
    const youAndPartner = you + " " + " loves " + partner;
    const luckyNum = $("#luckyNumber").val();

    const randomNum = Math.floor(Math.random() * luckyNum);

    $(".coupleName").text(youAndPartner);
    $(".lovePercent").text(randomNum + "%");

    if (randomNum >= 80) {
      $(".quote").text(
        "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you."
      );
    } else if (randomNum >= 60) {
      $(".quote").text(
        "Take my hand, take my whole life too. For I can’t help falling in love with you."
      );
    } else if (randomNum >= 40) {
      $(".quote").text(
        "If I had a flower for every time I thought of you... I could walk through my garden forever."
      );
    } else if (randomNum >= 20) {
      $(".quote").text(
        "I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had."
      );
    } else if (randomNum >= 1) {
      $(".quote").text(
        "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more."
      );
    } else {
      $(".quote").text("Enter correct number and names.");
    }
  });

  // end
});
