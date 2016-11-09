var jumpingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jumpy donald');
};

jumpingDancer.prototype = Object.create(makeDancer.prototype);
jumpingDancer.prototype.constructor = jumpingDancer;

jumpingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this); //OldStep();
};

jumpingDancer.prototype.interact = function() {
  this.$node.removeClass('jumpy');
  this.$node.addClass('interact-jumpingDancer');
  this.$node.css({'top':400});
};

