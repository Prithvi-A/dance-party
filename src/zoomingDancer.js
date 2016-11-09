  var zoomingDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('zooming_dancer');
  };

  zoomingDancer.prototype = Object.create(makeDancer.prototype);
  zoomingDancer.prototype.constructor = zoomingDancer;

  zoomingDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this); //OldStep();
  };

  zoomingDancer.prototype.interact = function() {
    this.$node.removeClass('zooming_dancer');
    this.$node.addClass('interact-zoomingDancer');
    this.$node.css({'top':400});
  };
