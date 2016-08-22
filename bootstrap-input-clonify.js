(function($) {

  $.fn.clonifyInput = function(action, options) {

    if (action === 'add') {

      var indexNum = $('.input-row').length;

      if (indexNum === 1) {
        $('.remove-row').removeClass('hide');
      }

      var clonedRow = this.closest('form').find('div.input-row:last').clone(true, true);

      clonedRow.find('label[for$="-' + (indexNum - 1) + '"]').each(function() {
        var labelFor = $(this).attr('for').substring(0, $(this).attr('for').length - 1);
        $(this).attr('for', function(index, value) {
          return value = labelFor + indexNum;
        });
      });

      clonedRow.find('select[id$="-' + (indexNum - 1) + '"]').each(function() {
        var selectId = $(this).attr('id').substring(0, $(this).attr('id').length - 1);
        if (options.chosen == true) {
          clonedRow.find('.chosen-container').remove();
        }
        $(this).attr('id', function(index, value) {
          return value = selectId + indexNum;
        }).show();
        $(this).val('');
      });

      if (options.chosen == true) {
        clonedRow.find('select.chosen-select').chosen(options.chosenSettings);
      }

      clonedRow.find('input[id$="-' + (indexNum - 1) + '"]').each(function() {
        var inputId = $(this).attr('id').substring(0, $(this).attr('id').length - 1);
        $(this).attr('id', function(index, value) {
          return value = inputId + indexNum;
        });
        $(this).val('');
      });

      this.closest('div.form-group').before(clonedRow);

      return this;

    }

    if (action === 'remove') {

      var inputRow = this.closest('.input-row');
      var indexNum = $('.input-row').length;

      inputRow.nextAll('.input-row').each(function() {
        $(this).find('label[for$="-' + (indexNum - 1) + '"]').each(function() {
          $(this).attr('for', function(index, value) {
            return value = value.substring(0, value.length - 1) + (value.substring(value.length - 1) - 1);
          });
        });

        $(this).find('select[id$="-' + (indexNum - 1) + '"]').each(function() {
          $(this).attr('id', function(index, value) {
            return value = value.substring(0, value.length - 1) + (value.substring(value.length - 1) - 1);
          });
        });

        $(this).find('input[id$="-' + (indexNum - 1) + '"]').each(function() {
          $(this).attr('id', function(index, value) {
            return value = value.substring(0, value.length - 1) + (value.substring(value.length - 1) - 1);
          });
        });
      });

      inputRow.remove();
      indexNum = $('.input-row').length;

      if (indexNum === 1) {
        $('.remove-row').addClass('hide');
      }

      return this;

    }

  }

})(jQuery);
