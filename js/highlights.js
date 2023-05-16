Aframe.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default: "", type: "string" },
    },
    init: function (){
        this.hendleMouseEnterEvents();
        this.hendleMouseLeaveEvents();
    },
    update: function () {
        const fadeBackgroundE1 = document.querySelector("#fadeBackground");
    c = fadeBackgroundE1.children;
    if(c.length > 0){
        var i;
        for (i = 0; i <= c.length; i++){
            fadeBackgroundE1.removeChild(c[i]);
        }
    }else{
        this.handleMouseClickEvents();
    }
    },
    handleMouseClickEvents: function () {
        this.e.addEventListener("mouseenter",() => {
            const id = this.el.getattribute('id');
            const postersId = [
                "superman",
                "spiderman",
                "capain-aero",
                "outer-space",
            ];
            if (postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container");
                postersContainer.setAttribute("cursor-listner", {
                    selectedItemId: id,
                });
                this.el.setAttribute("material", {color: "#1565c0"});
            }
        });
    },
    handleMouseLeaveEvents: function (){
        this.el.addEventListener("mouseLeave", () =>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if( id == selectedItemId) {
                    el.setAttribute("material", {color: "#fff" });
                }
            }
        });
    },
    handleMouseClickEvents:function() {
        this.el.addEventListener("click", () =>{
            const { selectedItemId } = this.data;

      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      const titleEl = document.querySelector("#app-title");
      const cursorEl = document.querySelector("#camera-cursor");
   
      if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
          itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        });
      } else {
        //else make the plane invisible
        fadeBackgroundEl.setAttribute("visible", false);
        titleEl.setAttribute("visible", true);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12,
        });
      }
    
    })
    }
})