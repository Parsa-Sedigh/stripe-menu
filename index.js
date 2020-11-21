/* It seems that the background of the drop downs, seems to be able to transform itself from the width and the height, as well as
where ever it is, on the page, so it's x and y coordinates.
Actually the dropdowns themselves or the content and text in them, those contents are separate elements. But there's a sort of like a little
puppy <div> that follows each of those drop downs around and will resize itself based on wherever it is on the page. So the white thing that
you see is moving, that's the actual background that just moving itself around and it's just sort of absolutely positioned behind those elements.

So when we hover on links, we need to resize and match the width and height of the content of that dropdown and animate itself wherever it's
gonna go or transition itself wherever it's gonna go.

So we create a <div> which is the background of all of the dropdowns and that's what the white background is gonna follow around, so when
we move from one of the drop downs to another, we haven't three SEPARATE <div>s but actually we have ONE and that's gonna follow along with
the content as we go. Also inside that dropdownBackground class, we have a <span class="arrow"> which is that top arrow of each drop down.
TODO till 2:00*/
