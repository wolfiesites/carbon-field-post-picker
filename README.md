# carbon field: post_picker
* created as extension to carbon fields
* Adds password input field to carbon fields

## usage
1. first download carbon fields via composer  `composer require htmlburger/carbon-fields`
2. download this repo via composer: `composer require wolfiesites/carbon-fields-post-picker`
3. while defining fields use `post_picker` to display the field like this:
```
Field::make( 'post_picker', 'crb_picked-post', 'Password' )
```