var Gem = function(lv, green, blue, grind) {
  // do initialization here
  this.gQ = 8; // greens to make 1 blue
  this.bQ = 6; // blues to make 1 purple
  this.pQ = 5; // purples to make 1 diamond
  this.gP = 999800; // price of one grinder

  this.lv = lv; // level of the gem
  this.green = green; // cost of 1 green
  this.blue = blue; // cost of 1 blue
  this.purple = this.blue * this.bQ; // cost of 1 purple
  this.grind = grind; // how many grinders for diamond
  this.grindCost = this.grind * this.gP;
  this.diamond = this.purple * this.pQ + this.grindCost; // cost of 1 diamond
  var _self = this;

  this.fillTable = function() {
    // set calculate button display
    $("#col" + this.lv).css("display", "block");
    // set calculate button function
    $("#btn" + this.lv).click(this.calculate);
    // set reference table values
    $("#lv" + this.lv + "row").css("display", "table-row");
    $("#lv" + this.lv + "Green").html(this.green.toLocaleString());
    $("#lv" + this.lv + "Blue").html(this.blue.toLocaleString());
    $("#lv" + this.lv + "Purple").html(this.purple.toLocaleString());
    $("#lv" + this.lv + "Diamond").html(this.diamond.toLocaleString());
  };

  this.calculate = function(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    //console.info("#btn" + _self.lv + " clicked!");
    var greensHave = Number($("#txtGreens").val());
    var bluesHave = Number($("#txtBlues").val());
    var purplesHave = Number($("#txtPurples").val());
    var greensNeeded = 0;
    var bluesNeeded = 0;
    var greenTotal = 0;
    var blueMax = _self.bQ * _self.pQ * _self.blue;
    var blueTotal = 0;
    var total = 0;

    // process green gems
    if (greensHave > 0) {
      if (greensHave > _self.gQ) {
        bluesHave = bluesHave + Math.floor(greensHave / _self.gQ) + 1;
      } else {
        bluesHave = bluesHave + 1;
      }
      if (greensHave % _self.gQ > 0) {
        greensNeeded = _self.gQ - greensHave % _self.gQ;
      }
    }

    greenTotal = greensNeeded * _self.green;

    // process blue gems
    if (purplesHave > 0) {
      bluesHave = bluesHave + purplesHave * _self.bQ;
    }

    bluesNeeded = _self.bQ * _self.pQ - bluesHave;
    blueTotal = blueMax - bluesHave * _self.blue;

    total = blueTotal + greenTotal + _self.grindCost;
    // display total needed
    $("#greenNeeded").html(greensNeeded);
    $("#greenTotal").html(greenTotal.toLocaleString());
    $("#blueNeeded").html(bluesNeeded);
    $("#blueTotal").html(blueTotal.toLocaleString());
    $("#grinderNeeded").html(_self.grind);
    $("#grinderTotal").html(_self.grindCost.toLocaleString());
    $("#total").html(total.toLocaleString());

    return false;
  };
};

function reset() {
  $("#lv20row").css("display", "none");
  $("#lv30row").css("display", "none");
  $("#lv40row").css("display", "none");
  $("#lv50row").css("display", "none");

  $("#col20").css("display", "none");
  $("#col30").css("display", "none");
  $("#col40").css("display", "none");
  $("#col50").css("display", "none");
}

function init() {
  // default to moonstone
  reset();

  var lv20 = new Gem(20, 52427, 403309, 1);
  var lv30 = new Gem(30, 100850, 802157, 2);
  var lv40 = new Gem(40, 202444, 1616027, 4);
  var lv50 = new Gem(50, 300006, 2400096, 6);

  lv20.fillTable();
  lv30.fillTable();
  lv40.fillTable();
  lv50.fillTable();

  lv20.calculate();
  $(".table-dark").css("background-color", "rgb(55, 17, 74)");
}

$("#moonstone-tab").click(function(e) {
  init();
});
$("#dragoneye-tab").click(function(e) {
  reset();

  var lv20 = new Gem(20, 54828, 406227, 1);
  var lv30 = new Gem(30, 101442, 804085, 2);
  var lv40 = new Gem(40, 205379, 1631784, 4);

  lv20.fillTable();
  lv30.fillTable();
  lv40.fillTable();

  lv20.calculate();
  $(".table-dark").css("background-color", "rgb(80, 24, 26)");
});
$("#riverheart-tab").click(function(e) {
  reset();

  var lv20 = new Gem(20, 52215, 403328, 1);
  var lv30 = new Gem(30, 100774, 802350, 2);
  var lv40 = new Gem(40, 202004, 1617779, 4);

  lv20.fillTable();
  lv30.fillTable();
  lv40.fillTable();

  lv20.calculate();
  $(".table-dark").css("background-color", "rgb(43, 62, 82)");
});
$("#jade-tab").click(function(e) {
  reset();

  var lv20 = new Gem(20, 52223, 403162, 1);
  var lv30 = new Gem(30, 100762, 802271, 2);
  var lv40 = new Gem(40, 201935, 1614860, 4);

  lv20.fillTable();
  lv30.fillTable();
  lv40.fillTable();

  lv20.calculate();
  $(".table-dark").css("background-color", "rgb(27, 70, 37)");
});
$("#raystone-tab").click(function(e) {
  reset();

  var lv20 = new Gem(20, 54425, 406199, 1);
  var lv30 = new Gem(30, 101831, 805443, 2);
  var lv40 = new Gem(40, 204770, 1638855, 4);
  var lv50 = new Gem(50, 300144, 2400805, 6);

  lv20.fillTable();
  lv30.fillTable();
  lv40.fillTable();
  lv50.fillTable();

  lv20.calculate();
  $(".table-dark").css("background-color", "rgb(82, 69, 29)");
});

// page load
// Shorthand for $( document ).ready()
$(function() {
  init();
});