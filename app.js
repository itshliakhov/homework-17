function Gallery ({$item, $modal , $close , $prev, $modalContentImg, $next}) {
    this.currentSrc = undefined;
    this.$currentItem = undefined;
    this.$item = $item;
    this.$modal = $modal;
    this.$close = $close;
    this.$prev = $prev;
    this.$modalContentImage = $modalContentImg;
    this.$next = $next;

    this.init = () => {
        this.$item.on("click", this.openModal);
        this.$close.on("click", this.closeModal);
        this.$prev.on("click", this.prevItem);
        this.$next.on("click", this.nextItem);
    }

    this.openModal = (event) => {
        this.$currentItem = $(event.currentTarget);
        this.$currentItem.addClass("active");
        this.currentSrc = this.$currentItem.find("img").attr("src");
        this.$modal.addClass("active");
        this.$modalContentImage.attr("src", this.currentSrc);
    }

    this.closeModal = () => {
        this.$modal.toggleClass("active");
        this.$currentItem.toggleClass("active");
    }

    this.changeItem = (item) => {
        if (item.length) {
            this.$currentItem.removeClass("active");
            this.$currentItem = item;
            this.$currentItem.addClass("active");
            this.currentSrc = this.$currentItem.find("img").attr("src");
            $modalContentImg.attr("src", this.currentSrc);
        }
    }

    this.nextItem = () => {
        const $nextItem = this.$currentItem.next();
        this.changeItem($nextItem);
    }

    this.prevItem = () => {
        const $prevItem = this.$currentItem.prev();
        this.changeItem($prevItem);

    }
}

const gallery = new Gallery({
    $item: $('.js--gal_item'),
    $modal: $('.js--modal'),
    $close: $('.js--modal__close'),
    $prev: $('.js--modal__prev'),
    $modalContentImg: $('.js--modal__content img'),
    $next: $('.js--modal__next')
});
gallery.init();