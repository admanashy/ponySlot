/**
 * шлет ивенты модулю бетлайнс
 */
    function BetLineIndicators() {
    var me = this;
    this.x = 20;
    this.y = 130;

    this.init = function(stage){
        var indicator0 = new RegularButton(me.x, me.y, 'image/indicator.png', 'image/indicator.png');
        indicator0.init(stage);
        indicator0.onMouseDownCallBack = function() {
            fireEvent('showBetline');
        };
        indicator0.onMouseOverCallBack = function() {
            fireEvent('showBetline');
        };

        var indicator1 = new RegularButton(me.x, me.y+150, 'image/indicator.png', 'image/indicator.png');
        indicator1.init(stage);
        indicator1.onMouseDownCallBack = function(){
            fireEvent('showBetline');
        };
        indicator1.onMouseOverCallBack = function() {
            fireEvent('showBetline');
        };


        var indicator2 = new RegularButton(me.x, me.y+300, 'image/indicator.png', 'image/indicator.png');
        indicator2.init(stage);
        indicator2.onMouseDownCallBack =  function (){
            fireEvent('showBetline');
        };
        indicator2.onMouseOverCallBack = function() {
            fireEvent('showBetline');
        };
    };
}