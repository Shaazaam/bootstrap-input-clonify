# bootstrap-input-clonify
Clone Bootstrap form inputs with the click of a button

## Usage

This simple plugin allows the cloning of a group of Bootstrap styled inputs. Consider the example below.
```html
<form>
  <fieldset>
  
    <div class="input-row">
    
      <div class="form-group">
        <label for="FirstName-0" class="control-label">First Name:</label>
          <input type="text" name="FirstName[]" id="FirstName-0" class="form-control">
      </div>

      <div class="form-group">
          <label for="LastName-0" class=" control-label">Last Name:</label>
            <input type="text" name="LastName[]" id="LastName-0" class="form-control">
      </div>

      <div class="form-group">
          <label for="Email-0" class="control-label">Email:</label>
            <input type="text" name="Email[]" id="Email-0" class="form-control">
      </div>

      <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-primary btn-remove remove-row hide">Remove Client</button>
          </div>
      </div>
      
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-primary add-row">Add Another Client</button>
        </div>
    </div>
    
  </fieldset>
</form>
```

The above form has First Name, Last Name, and Email inputs wrapped in ```<div class="input-row">``` with a ```<button class="remove-row">``` inside. By adding ```<button class="add-row">``` to the form, the entire input row will be duplicated. This adds great power to a form when many similar inputs are desired.

All that is left is to add the jQuery below. The add action accepts two options currently. If you are also using Chosen: https://github.com/harvesthq/chosen, Clonify will support this. Pass your Chosen dropdown settings into the chosenSettings option.

```js
var chosenSingleSettings = {
  inherit_select_classes: false,
  width: '100%'
};

$('.add-row').on('click', function() {
  $(this).clonifyInput('add', {
    chosen: true,
    chosenSettings: chosenSingleSettings
  });
});

$('.remove-row').on('click', function() {
  $(this).clonifyInput('remove');
});
```

## Demo

A working exmaple can be found here: [Oneon Development]http://oneondevelopment.com/frontend.php#js

## Version History

**0.1.0** (August 22, 2016)

 * Initial release
