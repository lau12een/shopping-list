$(function(){
  
/**********EVENT HANDLING*********/
    $('#js-shopping-list-form').submit(function(event) {
      
      event.preventDefault();
      
      const listItem = $('.js-shopping-list-entry').val();
      
      //The val() is used to return or set the value of attribute for the selected elements.
       $('.js-shopping-list-entry').val('');
      
      $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
      });
      
      // this is the trigger to delete an item
       $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    
        // "this" will look for the closest parent `li` element and remove the shopping list item.
        $(this).closest('li').remove();
      });
      
      // this is the trigger for the checked item
        $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    
        // "this" will go to the parent li --> find the child`.shopping-item`  and
        // toggle the `.shopping-item__checked` class.
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
      
    });