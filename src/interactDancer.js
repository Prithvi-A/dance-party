var interactDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

interactDancer.prototype = Object.create(makeDancer.prototype);
interactDancer.prototype.constructor = interactDancer;

interactDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this); //OldStep();
  // this.$node.toggle();
};
