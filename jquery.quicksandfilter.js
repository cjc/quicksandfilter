(function ($) {
  $.fn.quicksandfilter = function(filterselector, itemselector, options){
    itemselector = itemselector || ' > *';
    if (!this.data('qsdata')) {
      this.find(itemselector).each(function(i,elem) {
        $(elem).attr('data-id', i);
      });
      this.data('qsdata', this.clone());
    }
    if (filterselector == 'all') filterselector = '';
    var filtered_data = this.data('qsdata').find(itemselector + filterselector);
    this.quicksand(filtered_data, options);
  }
})(jQuery)
