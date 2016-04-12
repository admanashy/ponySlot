function Server(){
    var me = this;

    this.request = function(){

        me.response({
            reels: [1,3,4,2,1],
            win: 200,
            winType : 'Big Win'
        });

    };

    this.response = function(response){

        fireEvent('serverResponse', response);

    }

    addListener('serverRequest', me.request);
}
