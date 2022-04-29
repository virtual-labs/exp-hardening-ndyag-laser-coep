jQuery(function ($) {
	var current = {
        container: null,
        init: function () {
            $("#powerVsDepth").click(function (e) {
                e.preventDefault();

                $("#cur-modal-content").modal({
                    overlayId: 'cur-overlay',
                    containerId: 'cur-container',
                    closeHTML: null,
                    minHeight: 80,
                    opacity: 65,
                    position: ['0', ],
                    overlayClose: true,
                    onOpen: current.open,
                    onClose: current.close,
                    minWidth: 800
                });
            });
        },
        open: function (d) {
            drawgraph_PowervsDepth();
            var self = this;
            self.container = d.container[0];
            d.overlay.fadeIn('slow', function () {
                $("#cur-modal-content", self.container).show();
                var title = $("#cur-modal-title", self.container);
                title.show();
                d.container.slideDown('slow', function () {
                    setTimeout(function () {
                        var h = $("#cur-modal-data", self.container).height() + title.height() + 20; // padding
                        d.container.animate({
                            height: h
                        }, 200, function () {
                            $("div.close", self.container).show();
                            $("#cur-modal-data", self.container).show();
                        });
                    }, 300);
                });
            })
        },
        close: function (d) {
            var self = this; // this = SimpleModal object
            d.container.animate({
                top: "-" + (d.container.height() + 20)
            }, 500, function () {
                self.close(); // or $.modal.close();
            });
        }
    };
    current.init();
});