$ ->
  # disable animations on mobile
  return if window.matchMedia("only screen and (max-width: 768px)").matches
  
  $('#link-icons > a').css('opacity',0)
  $('.link-title').css('opacity',0)
  $('.project').css('opacity',0)
  $('.position').css('opacity',0)

  animate('.position', "slideLeftIn", 250, 'block')

  $('#projects').one('inview', (e, i, x, y) ->
    animate('.project', "slideLeftIn", 0, 'inline-block')
  )

  $('#links').one('inview', (e, i, x, y) ->
    animate('#link-icons > a', "slideDownIn", 0, 'inline-block')
  )

  $('.link-square').mouseenter( -> 
    $(this).siblings('.link-title').delay(100).velocity('transition.slideUpIn', {duration: 100, display: 'inline-block'})
  )

  $('.link-square').mouseleave( -> 
    $(this).siblings('.link-title').delay(100).velocity('transition.slideDownOut', {duration: 100})
  )
 
animate = (element, transition, delayms, displaymethod) ->
  $(element).delay(delayms).velocity("transition."+transition, {duration: 400, stagger: 75, display: displaymethod})