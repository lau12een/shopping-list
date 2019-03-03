// To build an app like this we must start with triggers first
// then you can figure out the functions

$(function(){

  /******************* EVENT LISTENERS***********/
// add - form submission button
//form trigger
  $('#js-shopping-list-form').submit(function(event) {
    
    event.preventDefault();
    
    const listItem = $('.js-shopping-list-entry').val();
    
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
    
    //delete trigger - on-click ( no form)
     $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  
      // this will look for the closest parent `li` element and remove it from the DOM.
      // Simply, it will delete items from the list
      $(this).closest('li').remove();
    });
    //check trigger - on click ( no form)
      $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  
      // Parent li --> finds the child`.shopping-item`  and
      // toggle the `.shopping-item__checked` class. (on = checked, off = unchecked)
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    
  });