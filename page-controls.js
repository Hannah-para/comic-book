AFRAME.registerComponent("page-controls", {
    scheme: {
        pages: {type: 'array', default: [
            {
                page: 'page1',
                color: '#4d0000'
            },
            {
                page: 'page2',
                color: '#809fff'
            },
            {
                page: 'page3',
                color: '#ffccff'
            },
            {
                page: 'page4',
                color: '#ff8080'
            },
            {
                page: 'page5',
                color: '#b3ffff'
            },
        ]

        },
        pageIndex: {type:'int', default: 0}
    },

    init: function () {
        var pageEL = this.pageEL = document.querySelector('[layer]');
        pageEL.object3D.position.set(0,1.8,-2.5);

        var pageIndex = this.data.pageIndex;

        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight" & pageIndex < 4) {
                pageIndex += 1;
                this.turnpage(pageIndex);
            }
            if (e.key === "ArrowLeft" & pageIndex > 0) {
                pageIndex -=1;
                this.turnpage(pageIndex);
            }
            
        });
        
    },
turnpage: function (pageIndex) {
    var page = this.data.pages;
    var pageId = pages[pageIndex].page;
    var pagecolor = pages[page].color;
    this.pageEl.setAttribute("layer","src","#" + pageId);
    this.el.sceneEl.setAttribute("background","color",pagecolor);
}
  
});