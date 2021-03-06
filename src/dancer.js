
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
 
  //var this = Object.create(makeDancer.prototype);
  //return this;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

//Automatically generated by interpreter
//makeDancer.prototype = {};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//Create a lineup method
makeDancer.prototype.lineup = function() {
  this.$node.removeClass('jumpy zooming_dancer');
  this.$node.css({'top':400});
};

//Create a breakline method
makeDancer.prototype.breakline = function() {
  this.setPosition(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
  );
};
