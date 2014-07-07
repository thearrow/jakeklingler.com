$ ->
  # disable animations on mobile
  return if window.matchMedia("only screen and (max-width: 768px)").matches
  
  $('#links > a').css('opacity',0)
  $('.project').css('opacity',0)
  $('.position').css('opacity',0)

  animate('.position', 250, 'block')

  $('#projects').one('inview', (e, i, x, y) ->
    animate('.project', 0, 'inline-block')
  )

  $('#links').one('inview', (e, i, x, y) ->
    animate('#links > a', 0, 'inline-block')
  )

animate = (element, delayms, displaymethod) ->
  $(element).delay(delayms).velocity("transition.slideDownIn", {duration: 400, stagger: 50, display: displaymethod})